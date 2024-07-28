import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
    Avatar,
    Icon,
    Grid,
    Container,
    useColorModeValue,
    VStack,
    HStack,
    Tag,
    SimpleGrid,
    Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone, FaUniversity, FaCertificate, FaLaptopCode, FaTools, FaDesktop, FaUserTie } from 'react-icons/fa';
import Navbar from "../Navbar";

const MotionBox = motion(Box);

const SkillCategory = ({ icon, title, skills }) => (
    <Box
        bg={useColorModeValue('white', 'gray.800')}
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
    >
        <VStack align="start" spacing={4}>
            <HStack>
                <Icon as={icon} w={6} h={6} color={useColorModeValue('blue.500', 'blue.300')} />
                <Heading as="h3" size="md">{title}</Heading>
            </HStack>
            <SimpleGrid columns={2} spacing={2}>
                {skills.map((skill, index) => (
                    <Tag key={index} size="md" variant="subtle" colorScheme="blue">
                        {skill}
                    </Tag>
                ))}
            </SimpleGrid>
        </VStack>
    </Box>
);

const AboutPage = () => {
    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const textColor = useColorModeValue('gray.800', 'gray.100');
    const gradientStart = useColorModeValue('#4158D0', '#0093E9');
    const gradientEnd = useColorModeValue('#C850C0', '#80D0C7');

    return (
        <Box>
            <Navbar />
            <Box
                bgGradient={`linear(to-br, ${gradientStart}, ${gradientEnd})`}
                color="white"
                py={20}
                px={8}
            >
                <Container maxW="container.xl">
                    <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={8} alignItems="center">
                        <MotionBox
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Flex align="center" direction={['column', 'row']}>
                                <Avatar
                                    size="2xl"
                                    name="John Gachara Mwangi"
                                    src="/api/placeholder/200/200"
                                    mr={[0, 8]}
                                    mb={[4, 0]}
                                />
                                <VStack align={['center', 'start']} spacing={2}>
                                    <Heading as="h1" size="2xl">
                                        John Gachara Mwangi
                                    </Heading>
                                    <Text fontSize="xl" fontWeight="bold">
                                        Software Engineer
                                    </Text>
                                    <HStack>
                                        <Icon as={FaMapMarkerAlt} />
                                        <Text>Nairobi, Kenya</Text>
                                    </HStack>
                                    <HStack>
                                        <Icon as={FaEnvelope} />
                                        <Link href="mailto:johngachara29@gmail.com" isExternal>
                                            johngachara29@gmail.com
                                        </Link>
                                    </HStack>
                                    <HStack>
                                        <Icon as={FaPhone} />
                                        <Text>+254 712 240 197</Text>
                                    </HStack>
                                    <HStack spacing={4} mt={4}>
                                        <Button
                                            as={Link}
                                            href="https://github.com/johngachara"
                                            isExternal
                                            leftIcon={<FaGithub />}
                                            //colorScheme="whiteAlpha"
                                            variant="outline"
                                        >
                                            GitHub
                                        </Button>
                                        <Button
                                            as={Link}
                                            href="#"
                                            isExternal
                                            leftIcon={<FaLinkedin />}
                                           // colorScheme="whiteAlpha"
                                            variant="outline"
                                        >
                                            LinkedIn
                                        </Button>
                                    </HStack>
                                </VStack>
                            </Flex>
                        </MotionBox>
                        <MotionBox
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <VStack align="start" spacing={6} bg="rgba(255, 255, 255, 0.1)" p={6} borderRadius="lg">
                                <Box>
                                    <Heading as="h2" size="lg" mb={2}>
                                        <Icon as={FaUniversity} mr={2} />
                                        Education
                                    </Heading>
                                    <Text><strong>University:</strong> KCA University</Text>
                                    <Text><strong>Major:</strong> Bachelor's Information Communication Technology</Text>
                                    <Text><strong>Expected Graduation:</strong> September 2025</Text>
                                </Box>
                                <Box>
                                    <Heading as="h2" size="lg" mb={2}>
                                        <Icon as={FaCertificate} mr={2} />
                                        Certifications
                                    </Heading>
                                    <Text>E-mobilis web development bootcamp</Text>
                                </Box>
                            </VStack>
                        </MotionBox>
                    </Grid>
                </Container>
            </Box>

            <Box bg={bgColor} color={textColor} py={20} px={8}>
                <Container maxW="container.xl">
                    <VStack spacing={12}>
                        <Heading as="h2" size="2xl" mb={8} textAlign="center">
                            Skills & Expertise
                        </Heading>
                        <SimpleGrid columns={[1, null, 2]} spacing={8} w="full">
                            <SkillCategory
                                icon={FaLaptopCode}
                                title="Programming Languages"
                                skills={['Python', 'Java', 'JavaScript']}
                            />
                            <SkillCategory
                                icon={FaTools}
                                title="Tools and Technologies"
                                skills={['Django', 'Express', 'React', 'Git', 'REST', 'Bootstrap', 'AWS (EC2, RDS,Route 53)', 'C-Panel', 'Vercel', 'Daisy UI', 'Chakra UI', 'Pandas', 'NumPy', 'Sci-kit Learn', 'TensorFlow', 'Seaborn', 'MatplotLib', 'PostgreSQL', 'MySQL', 'Celery',"Redis","Meilisearch"]}
                            />
                            <SkillCategory
                                icon={FaDesktop}
                                title="Development Environments"
                                skills={['Windows', 'Linux (Ubuntu)']}
                            />
                            <SkillCategory
                                icon={FaUserTie}
                                title="Soft Skills"
                                skills={['Problem-solving', 'Collaboration', 'Adaptability', 'Communication', 'Innovation', 'Attention to detail']}
                            />
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutPage;