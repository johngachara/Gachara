import React from 'react';
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
    Divider,
    SimpleGrid,
    Flex,
    keyframes,
    Image
} from '@chakra-ui/react';

import {
    SiKalilinux,
    SiDjango,
    SiPostgresql,
    SiFirebase,
    SiNginx,
    SiRedis,
    SiBurpsuite,
    SiWireshark,
    SiLinux,
    SiDocker,
    SiKubernetes,
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
    FaTools
} from 'react-icons/fa';

const pulseKeyframe = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

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

const AboutPage = () => {
    const bgMain = useColorModeValue('gray.50', 'gray.900');
    const bgAccent = useColorModeValue('purple.50', 'gray.800');

    return (
        <Box minH="100vh">
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
                                <Image
                                    src="/api/placeholder/300/300"
                                    alt="John Gachara"
                                    w="100%"
                                    h="100%"
                                    objectFit="cover"
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>

            {/* Main Content */}
            <Box bg={bgMain} py={16}>
                <Container maxW="container.xl">
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
                                        "AWS Cloud Architecture",
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
                                {[
                                    { icon: SiKalilinux, label: "Kali Linux" },
                                    { icon: SiBurpsuite, label: "Burp Suite" },
                                    { icon: SiDjango, label: "Django" },
                                    { icon: SiPostgresql, label: "PostgreSQL" },
                                    { icon: SiNginx, label: "Nginx" },
                                    { icon: SiRedis, label: "Redis" },
                                    { icon: SiWireshark, label: "Wireshark" },
                                    { icon: SiCelery, label: "Celery" },
                                    { icon: FaLock, label: "ModSecurity" },
                                    { icon: FaBug, label: "Fail2ban" }
                                ].map((tech, index) => (
                                    <VStack
                                        key={index}
                                        p={4}
                                        borderRadius="lg"
                                        bg={bgMain}
                                        shadow="md"
                                        transition="all 0.3s"
                                        _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                                    >
                                        <Icon as={tech.icon} w={8} h={8} color="purple.500" />
                                        <Text fontSize="sm" fontWeight="medium">{tech.label}</Text>
                                    </VStack>
                                ))}
                            </SimpleGrid>
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutPage;