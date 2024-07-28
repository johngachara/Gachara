import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Icon,
    Link,
    Image,
    useColorMode,
    useColorModeValue,
    VStack,
    HStack,
    Container,
    SimpleGrid,
    Tooltip,
    IconButton,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaServer, FaBrain, FaSun, FaMoon } from 'react-icons/fa';
import { SiTensorflow, SiReact, SiDjango, SiPostgresql,SiExpress,SiCelery,SiAwsorganizations,SiRedis,SiMeilisearch,SiFirebase,SiMongodb,SiNginx,SiCaddy,SiPandas,SiNumpy,SiUbuntu,SiScikitlearn ,SiCpanel} from 'react-icons/si';

// Placeholder for project image
const alltechImage = require("../screenshots/alltech.png")

const RotatingCube = () => {
    return (
        <Box
            as={motion.div}
            animate={{ rotateY: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            w="100px"
            h="100px"
            bg="rgba(255, 255, 255, 0.1)"
            borderRadius="15px"
            position="relative"
            transformStyle="preserve-3d"
            boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(255, 255, 255, 0.05)"
                borderRadius="15px"
                border="1px solid rgba(255, 255, 255, 0.1)"
            />
        </Box>
    );
};

const TechIcon = ({ icon: IconComponent, label }) => (
    <Tooltip label={label}>
        <Box as={motion.div} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <IconComponent size="40" />
        </Box>
    </Tooltip>
);

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const textColor = useColorModeValue('gray.800', 'gray.100');
    const gradientStart = useColorModeValue('#4158D0', '#0093E9');
    const gradientEnd = useColorModeValue('#C850C0', '#80D0C7');

    const controls = useAnimation();

    React.useEffect(() => {
        controls.start(i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 },
        }));
    }, [controls]);

    return (
        <Box>
            <Flex
                align="center"
                justify="center"
                direction="column"
                minH="100vh"
                bgGradient={`linear(to-br, ${gradientStart}, ${gradientEnd})`}
                color="white"
                py={20}
                px={8}
                position="relative"
                overflow="hidden"
            >
                <Box position="absolute" top="5%" left="5%"><RotatingCube /></Box>
                <Box position="absolute" bottom="5%" right="5%"><RotatingCube /></Box>

                {/* Light/Dark Mode Toggle */}
                <Box position="absolute" top={4} right={4}>
                    <IconButton
                        aria-label="Toggle color mode"
                        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                        onClick={toggleColorMode}
                        size="lg"
                        colorScheme={colorMode === 'light' ? 'purple' : 'orange'}
                        isRound
                    />
                </Box>

                <Container maxW="container.xl">
                    <VStack spacing={10} align="stretch">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <Heading as="h1" size="4xl" mb={4} textAlign="center">
                                John Gachara
                            </Heading>
                            <Text fontSize="2xl" mb={8} textAlign="center">
                                Full Stack Developer | ML Enthusiast | Deep Learning Explorer
                                <br></br>
                                "In pursuit to find or rewrite already written code"
                            </Text>
                        </motion.div>

                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                            {[
                                { icon: FaServer, title: "Full Stack", description: "Building robust web applications from frontend to backend" },
                                { icon: FaBrain, title: "Machine Learning", description: "Crafting intelligent solutions with data-driven insights" },
                                { icon: SiTensorflow, title: "Deep Learning", description: "Exploring neural networks and advanced AI models" }
                            ].map((item, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={controls} custom={index}>
                                    <VStack
                                        p={5}
                                        bg="rgba(255, 255, 255, 0.1)"
                                        borderRadius="lg"
                                        border="1px solid rgba(255, 255, 255, 0.2)"
                                        backdropFilter="blur(10px)"
                                        transition="all 0.3s"
                                        _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                                    >
                                        <Icon as={item.icon} w={10} h={10} mb={4} />
                                        <Heading size="md" mb={2}>{item.title}</Heading>
                                        <Text textAlign="center">{item.description}</Text>
                                    </VStack>
                                </motion.div>
                            ))}
                        </SimpleGrid>

                        <HStack justify="center" spacing={6}>
                            <Button
                                as={Link}
                                href="/About"
                                //colorScheme="gold"
                                variant="outline"
                                size="lg"
                                _hover={{ bg: 'whiteAlpha.200' }}
                            >
                                About Me
                            </Button>
                            <Button
                                as={Link}
                                href="/Projects"
                               // colorScheme="whiteAlpha"
                                variant="outline"
                                size="lg"
                                _hover={{ bg: 'whiteAlpha.200' }}
                            >
                                My Projects
                            </Button>
                        </HStack>
                    </VStack>
                </Container>
            </Flex>

            <Box py={20} px={8} bg={bgColor} color={textColor}>
                <Container maxW="container.xl">
                    <VStack spacing={12}>
                        <Heading as="h2" size="2xl" mb={6} textAlign="center">
                            Tech Stack
                        </Heading>
                        <SimpleGrid columns={{ base: 3, md: 6 }} spacing={10}>
                            <TechIcon icon={SiReact} label="React" />
                            <TechIcon icon={SiDjango} label="Django" />
                            <TechIcon icon={SiExpress} label="Express" />
                            <TechIcon icon={SiFirebase} label="Firebase" />
                            <TechIcon icon={SiRedis} label="Redis" />
                            <TechIcon icon={SiCelery} label="Celery" />
                            <TechIcon icon={SiMeilisearch} label="Meilisearch" />
                            <TechIcon icon={SiPostgresql} label="PostgreSQL" />
                            <TechIcon icon={SiMongodb} label="MongoDB" />
                            <TechIcon icon={SiTensorflow} label="TensorFlow" />
                            <TechIcon icon={SiPandas} label="Pandas" />
                            <TechIcon icon={SiNumpy} label="Numpy" />
                            <TechIcon icon={SiScikitlearn} label="Sci-kit Learn" />
                            <TechIcon icon={SiAwsorganizations} label="AWS" />
                            <TechIcon icon={SiCpanel} label="C Panel" />
                            <TechIcon icon={SiUbuntu} label="Ubuntu" />
                            <TechIcon icon={SiCaddy} label="Caddy Reverse Proxy" />
                            <TechIcon icon={SiNginx} label="Nginx Reverse Proxy" />
                        </SimpleGrid>

                        <Box w="100%">
                            <Heading as="h2" size="2xl" mb={6} textAlign="center">
                                Featured Project: Alltech Management System
                            </Heading>
                            <Text fontSize="xl" mb={6} textAlign="center" maxW="3xl" mx="auto">
                                This comprehensive set of web applications showcases my expertise in developing
                                practical and scalable solutions for a phone repair shop. The applications include:
                                <br></br>
                                Firebase Authentication: Provides secure and seamless user authentication and management
                                on the frontend.
                                <br></br>
                                JWT Authentication: Ensures robust and secure access control for backend APIs.
                                <br></br>
                                Redis Caching: Enhances application performance with efficient caching mechanisms.
                                <br></br>
                                MeiliSearch: Implements fast and responsive search functionality for swift data
                                retrieval.
                                <br></br>
                                Google SMTP: Integrates reliable emailing services for customer notifications and
                                transaction updates.
                                <br></br>
                                Firebase Push Notifications: Real-time push notifications to keep users informed about
                                stock updates and order updates.
                                <br></br>
                                Firebase Realtime Database & PostgreSQL: Data is stored using these databases
                                <br></br>
                                The system effectively manages key business functions, including stock control, sales
                                tracking, and transaction management, demonstrating my ability to build and integrate
                                advanced technologies in real-world applications
                            </Text>
                            <Image
                                src={alltechImage}
                                alt="Alltech Management System Screenshot"
                                w="full"
                                maxW="4xl"
                                mx="auto"
                                borderRadius="xl"
                                boxShadow="2xl"
                                mb={6}
                            />
                            <Flex justify="center">
                                <Button
                                    as={Link}
                                    href="https://main.gachara.store/Login"
                                    isExternal
                                    colorScheme="blue"
                                    size="lg"
                                    rightIcon={<Icon as={FaServer} />}
                                >
                                    View Project
                                </Button>
                            </Flex>
                        </Box>

                        <Box>
                            <Heading as="h2" size="2xl" mb={6} textAlign="center">
                                Let's Connect
                            </Heading>
                            <HStack justify="center" spacing={8}>
                                <Link href="https://github.com/johngachara" isExternal>
                                    <Icon as={FaGithub} boxSize={10} />
                                </Link>
                                <Link href="mailto:johngachara29@gmail.com" isExternal>
                                    <Icon as={FaEnvelope} boxSize={10} />
                                </Link>
                                <Link href="#" isExternal>
                                    <Icon as={FaLinkedin} boxSize={10} />
                                </Link>
                            </HStack>
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;