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
                                <p>
                                    This comprehensive suite of web applications showcases my expertise in developing
                                    scalable and efficient solutions for a phone shop POS system. The suite includes:
                                </p>

                                <ul>
                                    <li><strong>Firebase Authentication</strong>: Provides secure user authentication
                                        and role-based access control across the frontend.
                                    </li>
                                    <li><strong>JWT Authentication</strong>: Ensures robust and secure API access
                                        control in the backend, issuing tokens after validating Firebase ID tokens.
                                    </li>
                                    <li><strong>Redis Caching</strong>: Enhances performance by efficiently caching
                                        frequent data requests, reducing load times on the backend.
                                    </li>
                                    <li><strong>MeiliSearch Integration</strong>: Implements fast and responsive
                                        full-text search functionality for quick data retrieval in both the frontend and
                                        backend.
                                    </li>
                                    <li><strong>Google SMTP (via Nodemailer & Django)</strong>: Enables reliable email
                                        services for customer notifications, sales reports, and transaction updates.
                                    </li>
                                    <li><strong>Celery Application</strong>: A separate service that schedules and sends
                                        periodic sales transaction emails to administrators using API-based
                                        authentication across the backend servers.
                                    </li>
                                    <li><strong>Firebase Push Notifications</strong>: Real-time notifications to keep
                                        users updated on stock levels and order statuses.
                                    </li>
                                    <li><strong>Firebase Realtime Database & PostgreSQL</strong>: Utilizes both NoSQL
                                        (Firebase) and relational (PostgreSQL) databases for efficient data storage and
                                        management.
                                    </li>
                                    <li><strong>Nginx Reverse Proxy</strong>: Centralized reverse proxy configuration to
                                        handle requests for both the Django and Node.js backend servers, ensuring load
                                        balancing and security.
                                    </li>
                                </ul>

                                <p>
                                    This system manages core business operations such as inventory control, sales
                                    tracking, transaction management, and customer communications, demonstrating my
                                    ability to integrate cutting-edge technologies into practical, real-world
                                    applications. The applications are hosted on AWS, ensuring reliability and
                                    scalability.
                                </p>
                            </Text>

                            <HStack spacing={4} justifyContent="center" mb={6}>
                                <Link href="https://github.com/johngachara/phone_shop_pos_backend" isExternal>
                                    <HStack>
                                        <FaGithub size={24} /> {/* Use FaGithub icon */}
                                        <Text>View Django Repo</Text>
                                    </HStack>
                                </Link>
                                <Link href="https://github.com/johngachara/sequelizer" isExternal>
                                    <HStack>
                                        <FaGithub size={24} />
                                        <Text>View Node.js Repo</Text>
                                    </HStack>
                                </Link>
                                <Link href="https://github.com/johngachara/scheduler" isExternal>
                                    <HStack>
                                        <FaGithub size={24} />
                                        <Text>View Celery Repo</Text>
                                    </HStack>
                                </Link>
                                <Link href="https://github.com/johngachara/phone_shop_pos" isExternal>
                                    <HStack>
                                        <FaGithub size={24} />
                                        <Text>View Frontend Repo</Text>
                                    </HStack>
                                </Link>
                            </HStack>

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
                        </Box>
                        <Box>
                            <Heading as="h2" size="2xl" mb={6} textAlign="center">
                                Let's Connect
                            </Heading>
                            <HStack justify="center" spacing={8}>
                                <Link href="https://github.com/johngachara" isExternal>
                                    <Icon as={FaGithub} boxSize={10}/>
                                </Link>
                                <Link href="mailto:johngachara29@gmail.com" isExternal>
                                    <Icon as={FaEnvelope} boxSize={10}/>
                                </Link>
                                <Link href="https://www.linkedin.com/in/john-gachara-5b8030298/" isExternal>
                                    <Icon as={FaLinkedin} boxSize={10}/>
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