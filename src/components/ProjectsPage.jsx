import {
    Box,
    Heading,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Grid,
    GridItem,
    Badge,
    Flex,
    Icon,
    Select,
    VStack,
    HStack,
    Progress,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
    IconButton,
    Link as ChakraLink,
    Tooltip
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCheck, FaCalendar, FaGithub, FaHome, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import projects from "./projects";
import {useState} from "react";

const MotionBox = motion(Box);

// Navigation Component
const Navigation = () => {
    const navBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bg={navBg}
            borderBottom="1px solid"
            borderColor={borderColor}
            zIndex="1000"
            px={6}
            py={4}
        >
            <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
                <HStack spacing={4}>
                    <ChakraLink as={Link} to="/">
                        <Button leftIcon={<FaHome />} variant="ghost">
                            Home
                        </Button>
                    </ChakraLink>
                    <ChakraLink as={Link} to="/about">
                        <Button leftIcon={<FaUser />} variant="ghost">
                            About
                        </Button>
                    </ChakraLink>
                </HStack>

                <Tooltip label="View Portfolio Source">
                    <IconButton
                        as="a"
                        href="https://github.com/johngachara"
                        target="_blank"
                        aria-label="GitHub repository"
                        icon={<FaGithub />}
                        variant="ghost"
                        fontSize="20px"
                    />
                </Tooltip>
            </Flex>
        </Box>
    );
};

const ProjectCard = ({ project, onOpen }) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('blue.200', 'blue.600');
    const glowColor = useColorModeValue('0 0 20px rgba(66, 153, 225, 0.6)', '0 0 20px rgba(99, 179, 237, 0.6)');

    const techColors = {
        'Django': 'green',
        'React': 'blue',
        'Node.js': 'yellow',
        'PostgreSQL': 'purple',
        'Python': 'cyan',
        'AWS': 'orange',
        'Firebase': 'red'
    };

    return (
        <MotionBox
            bg={bgColor}
            borderRadius="xl"
            border="1px solid"
            borderColor={borderColor}
            p={6}
            cursor="pointer"
            onClick={onOpen}
            whileHover={{
                scale: 1.05,
                boxShadow: glowColor,
                transition: { duration: 0.3 }
            }}
            transform="auto-gpu"
            position="relative"
        >
            <VStack spacing={4} align="stretch">
                <Heading size="md">{project.title}</Heading>

                <Text noOfLines={2}>{project.description}</Text>

                <Progress
                    value={100}
                    size="sm"
                    colorScheme="blue"
                    borderRadius="full"
                />

                <Flex wrap="wrap" gap={2}>
                    {project.technologies.slice(0, 4).map((tech, index) => (
                        <Tooltip key={index} label={`Technology: ${tech}`}>
                            <Badge
                                colorScheme={techColors[tech] || 'gray'}
                                variant="solid"
                                fontSize="xs"
                            >
                                {tech}
                            </Badge>
                        </Tooltip>
                    ))}
                    {project.technologies.length > 4 && (
                        <Badge colorScheme="gray">
                            +{project.technologies.length - 4}
                        </Badge>
                    )}
                </Flex>

                <HStack spacing={4}>
                    <Icon as={FaCalendar} />
                    <Text fontSize="sm">{project.startYear} - {project.endYear}</Text>
                </HStack>
            </VStack>
        </MotionBox>
    );
};

const ProjectModal = ({ isOpen, onClose, project }) => (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
            <ModalHeader
                bgGradient="linear(to-r, blue.400, purple.500)"
                color="white"
                borderTopRadius="md"
            >
                {project.title}
            </ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody p={6}>
                <VStack spacing={6} align="stretch">
                    <Text fontSize="lg">{project.description}</Text>

                    <Box>
                        <Heading size="sm" mb={3}>Key Features</Heading>
                        <List spacing={3}>
                            {project.detailedDescription.split('•').slice(1).map((feature, index) => (
                                <ListItem key={index} display="flex" alignItems="center">
                                    <ListIcon as={FaCheck} color="green.500" />
                                    <Text>{feature.trim()}</Text>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box>
                        <Heading size="sm" mb={3}>Technologies Used</Heading>
                        <Flex wrap="wrap" gap={2}>
                            {project.technologies.map((tech, index) => (
                                <Badge
                                    key={index}
                                    colorScheme="blue"
                                    variant="subtle"
                                    fontSize="sm"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </Flex>
                    </Box>

                    <Flex gap={4}>
                        {project.githubLink && (
                            <HStack>
                                <Icon as={FaGithub} />
                                <ChakraLink
                                    href={Array.isArray(project.githubLink)
                                        ? project.githubLink[0]
                                        : project.githubLink
                                    }
                                    target="_blank"
                                >
                                    View Repository
                                </ChakraLink>
                            </HStack>
                        )}
                        {project.complexity && (
                            <Badge colorScheme={
                                project.complexity === "Advanced" ? "red" :
                                    project.complexity === "Intermediate" ? "yellow" : "green"
                            }>
                                {project.complexity} Level
                            </Badge>
                        )}
                    </Flex>
                </VStack>
            </ModalBody>
        </ModalContent>
    </Modal>
);

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const categories = [...new Set(projects.flatMap(p => p.technologies))].sort();

    const filteredProjects = selectedCategory
        ? projects.filter(p => p.technologies.includes(selectedCategory))
        : projects;

    const handleCardClick = (project) => {
        setSelectedProject(project);
        onOpen();
    };

    return (
        <Box>
            <Navigation />

            <Box maxW="1200px" mx="auto" py={24} px={4}>
                <VStack spacing={8} mb={12}>
                    <Heading
                        size="2xl"
                        bgGradient="linear(to-r, blue.400, purple.500)"
                        bgClip="text"
                        textAlign="center"
                    >
                        My Projects Portfolio
                    </Heading>

                    <Select
                        placeholder="Filter by Technology"
                        maxW="400px"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}

                    </Select>
                </VStack>

                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)"
                    }}
                    gap={6}
                >
                    {filteredProjects.map((project, index) => (
                        <GridItem key={index}>
                            <ProjectCard
                                project={project}
                                onOpen={() => handleCardClick(project)}
                            />
                        </GridItem>
                    ))}
                </Grid>

                {selectedProject && (
                    <ProjectModal
                        isOpen={isOpen}
                        onClose={onClose}
                        project={selectedProject}
                    />
                )}
            </Box>
        </Box>
    );
};

export default ProjectsPage;