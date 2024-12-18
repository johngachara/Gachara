import {
    Box,
    Container,
    Heading,
    Text,
    Grid,
    VStack,
    HStack,
    Icon,
    Link,
    Button,
    useColorModeValue,
    Badge,
    SimpleGrid,
    Flex,
    keyframes,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react';

import {
    SiKalilinux,
    SiDjango,
    SiPostgresql,
    SiNginx,
    SiRedis,
    SiBurpsuite,
    SiWireshark,
    SiCelery
} from 'react-icons/si';

import {
    FaGithub,
    FaLinkedin,
    FaShieldAlt,
    FaServer,
    FaNetworkWired,
    FaLock,
    FaBug,
    FaHome,
    FaProjectDiagram,
    FaBars,
    FaUser
} from 'react-icons/fa';

// Animation for profile image
const pulseKeyframe = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

// Navigation Component
const Navigation = () => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const buttonHoverBg = useColorModeValue('purple.100', 'purple.700');

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            bg={bgColor}
            boxShadow="md"
            py={2}
        >
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">
                    <HStack spacing={2}>
                        <Icon as={FaUser} color="purple.500" w={6} h={6} />
                        <Text fontSize="lg" fontWeight="bold">John Gachara</Text>
                    </HStack>

                    {/* Desktop Navigation */}
                    <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
                        <Button
                            leftIcon={<FaHome />}
                            variant="ghost"
                            colorScheme="purple"
                            _hover={{ bg: buttonHoverBg }}
                            onClick={() => window.location.href = '/'}
                        >
                            Home
                        </Button>
                        <Button
                            leftIcon={<FaProjectDiagram />}
                            variant="ghost"
                            colorScheme="purple"
                            _hover={{ bg: buttonHoverBg }}
                            onClick={() => window.location.href = '/projects'}
                        >
                            Projects
                        </Button>
                        <Button
                            leftIcon={<FaGithub />}
                            variant="ghost"
                            colorScheme="purple"
                            _hover={{ bg: buttonHoverBg }}
                            as="a"
                            href="https://github.com/johngachara"
                            target="_blank"
                        >
                            GitHub
                        </Button>
                    </HStack>

                    {/* Mobile Navigation */}
                    <Box display={{ base: 'block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<FaBars />}
                                variant="ghost"
                                colorScheme="purple"
                                aria-label="Navigation Menu"
                            />
                            <MenuList>
                                <MenuItem icon={<FaHome />} onClick={() => window.location.href = '/'}>
                                    Home
                                </MenuItem>
                                <MenuItem icon={<FaProjectDiagram />} onClick={() => window.location.href = '/projects'}>
                                    Projects
                                </MenuItem>
                                <MenuItem
                                    icon={<FaGithub />}
                                    as="a"
                                    href="https://github.com/johngachara"
                                    target="_blank"
                                >
                                    GitHub
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

// Project Card Component
const ProjectCard = ({ title, description, tools }) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    return (
        <Box
            p={6}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="lg"
            bg={bgColor}
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
        >
            <VStack align="start" spacing={4}>
                <Heading size="md">{title}</Heading>
                <Text>{description}</Text>
                <Flex wrap="wrap" gap={2}>
                    {tools.map((tool, index) => (
                        <Badge key={index} colorScheme="purple" variant="subtle">
                            {tool}
                        </Badge>
                    ))}
                </Flex>
            </VStack>
        </Box>
    );
};

// Expertise Area Component
const ExpertiseArea = ({ icon, title, items }) => {
    return (
        <VStack
            align="start"
            p={6}
            borderRadius="lg"
            bg={useColorModeValue('white', 'gray.800')}
            shadow="md"
            spacing={4}
            h="full"
        >
            <HStack>
                <Icon as={icon} w={6} h={6} color="purple.500" />
                <Heading size="md">{title}</Heading>
            </HStack>
            <VStack align="start" spacing={2}>
                {items.map((item, index) => (
                    <Text key={index}>• {item}</Text>
                ))}
            </VStack>
        </VStack>
    );
};

// Tech Stack Icon Component
const TechIcon = ({ icon, label }) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    return (
        <VStack
            p={4}
            borderRadius="lg"
            bg={bgColor}
            shadow="md"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
        >
            <Icon as={icon} w={8} h={8} color="purple.500" />
            <Text fontSize="sm" fontWeight="medium">{label}</Text>
        </VStack>
    );
};

const AboutPage = () => {
    const bgMain = useColorModeValue('gray.50', 'gray.900');
    return (
        <Box minH="100vh" bg={bgMain}>
            <Navigation />

            {/* Add padding to account for fixed navigation */}
            <Box pt="60px">
                {/* Hero Section */}
                <Box
                    bg={useColorModeValue('purple.600', 'gray.800')}
                    color="white"
                    py={20}
                    position="relative"
                    overflow="hidden"
                >
                    <Container maxW="container.xl">
                        <Grid
                            templateColumns={{ base: '1fr', md: '2fr 1fr' }}
                            gap={8}
                            alignItems="center"
                        >
                            <VStack align="start" spacing={6}>
                                <Heading size="2xl">John Gachara Mwangi</Heading>
                                <Text fontSize="xl">Backend Security Specialist & Infrastructure Engineer</Text>
                                <Text>
                                    Specializing in secure microservices architecture, penetration testing,
                                    and infrastructure hardening. Passionate about building robust,
                                    scalable backend systems with comprehensive security measures.
                                </Text>
                                <HStack spacing={4}>
                                    <Button
                                        as={Link}
                                        href="https://github.com/johngachara"
                                        leftIcon={<FaGithub />}
                                        colorScheme="whiteAlpha"
                                        variant="outline"
                                    >
                                        GitHub
                                    </Button>
                                    <Button
                                        as={Link}
                                        href="#"
                                        leftIcon={<FaLinkedin />}
                                        colorScheme="whiteAlpha"
                                        variant="outline"
                                    >
                                        LinkedIn
                                    </Button>
                                </HStack>
                            </VStack>

                            <Box
                                animation={`${pulseKeyframe} 3s ease-in-out infinite`}
                                display={{ base: 'none', md: 'block' }}
                            >
                                <Box
                                    borderRadius="full"
                                    overflow="hidden"
                                    boxShadow="2xl"
                                    maxW="300px"
                                    mx="auto"
                                >
                                </Box>
                            </Box>
                        </Grid>
                    </Container>
                </Box>

                {/* Main Content */}
                <Container maxW="container.xl" py={16}>
                    <VStack spacing={16}>
                        {/* Core Expertise */}
                        <Box w="full">
                            <Heading mb={8} textAlign="center">Core Expertise</Heading>
                            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                                <ExpertiseArea
                                    icon={FaShieldAlt}
                                    title="Security Engineering"
                                    items={[
                                        "Penetration Testing & Vulnerability Assessment",
                                        "WAF Configuration & Security Hardening",
                                        "Security Automation & Monitoring",
                                        "Incident Response Planning"
                                    ]}
                                />
                                <ExpertiseArea
                                    icon={FaServer}
                                    title="Backend Development"
                                    items={[
                                        "Distributed Systems Architecture",
                                        "High-Performance APIs",
                                        "Database Optimization",
                                        "Message Queue Systems"
                                    ]}
                                />
                                <ExpertiseArea
                                    icon={FaNetworkWired}
                                    title="Infrastructure"
                                    items={[
                                        "AWS Cloud Architecture"
                                    ]}
                                />
                            </SimpleGrid>
                        </Box>

                        {/* Featured Projects */}
                        <Box w="full">
                            <Heading mb={8} textAlign="center">Featured Projects</Heading>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                                <ProjectCard
                                    title="ALLTECH SHOP: Secure Microservices Backend"
                                    description="Enterprise-grade backend with comprehensive security measures, including WAF, rate limiting, and DDoS protection."
                                    tools={["Django", "Node.js", "PostgreSQL", "Redis", "AWS", "ModSecurity"]}
                                />
                            </SimpleGrid>
                        </Box>

                        {/* Technical Arsenal */}
                        <Box w="full">
                            <Heading mb={8} textAlign="center">Technical Arsenal</Heading>
                            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing={8}>
                                <TechIcon icon={SiKalilinux} label="Kali Linux" />
                                <TechIcon icon={SiBurpsuite} label="Burp Suite" />
                                <TechIcon icon={SiDjango} label="Django" />
                                <TechIcon icon={SiPostgresql} label="PostgreSQL" />
                                <TechIcon icon={SiNginx} label="Nginx" />
                                <TechIcon icon={SiRedis} label="Redis" />
                                <TechIcon icon={SiWireshark} label="Wireshark" />
                                <TechIcon icon={SiCelery} label="Celery" />
                                <TechIcon icon={FaLock} label="ModSecurity" />
                                <TechIcon icon={FaBug} label="Fail2ban" />
                            </SimpleGrid>
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutPage;