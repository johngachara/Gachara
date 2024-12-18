import React, { useState, useEffect } from 'react';
import {
    Box,
    Flex,
    VStack,
    Heading,
    Text,
    HStack,
    Container,
    Link,
    Icon,
    useColorMode,
    useColorModeValue,
    IconButton,
    Tooltip,
    Stack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaServer,
    FaShieldAlt,
    FaSun,
    FaMoon,
    FaCode,
    FaDatabase,
    FaLock
} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

// Floating particles background component
const ParticleBackground = () => {
    const particles = Array(20).fill(null);

    return (
        <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            overflow="hidden"
            pointerEvents="none"
        >
            {particles.map((_, index) => (
                <motion.div
                    key={index}
                    style={{
                        position: 'absolute',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        width: Math.random() * 20 + 5,
                        height: Math.random() * 20 + 5,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [-20, 20],
                        x: [-20, 20],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            ))}
        </Box>
    );
};

const FloatingSocialBar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const iconHoverVariants = {
        hover: {
            scale: 1.2,
            rotate: [0, -5, 5, 0],
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300
            }
        }
    };

    if (isMobile) {
        return (
            <HStack
                position="fixed"
                bottom={4}
                left="50%"
                transform="translateX(-50%)"
                spacing={6}
                zIndex={10}
                bg="whiteAlpha.200"
                backdropFilter="blur(10px)"
                borderRadius="full"
                p={3}
            >
                {[
                    { icon: FaGithub, href: "https://github.com/johngachara", label: "GitHub" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/john-gachara-5b8030298/", label: "LinkedIn" },
                    { icon: FaEnvelope, href: "mailto:johngachara29@gmail.com", label: "Email" }
                ].map((social, index) => (
                    <Tooltip key={index} label={social.label}>
                        <Box>
                            <motion.div variants={iconHoverVariants} whileHover="hover">
                                <Link href={social.href} isExternal>
                                    <Icon
                                        as={social.icon}
                                        boxSize={5}
                                        color="whiteAlpha.900"
                                        _hover={{ color: "white" }}
                                    />
                                </Link>
                            </motion.div>
                        </Box>
                    </Tooltip>
                ))}
            </HStack>
        );
    }

    return (
        <VStack
            position="fixed"
            left={4}
            top="50%"
            transform="translateY(-50%)"
            spacing={6}
            zIndex={10}
            bg="whiteAlpha.200"
            backdropFilter="blur(10px)"
            borderRadius="full"
            p={3}
        >
            {[
                { icon: FaGithub, href: "https://github.com/johngachara", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/john-gachara-5b8030298/", label: "LinkedIn" },
                { icon: FaEnvelope, href: "mailto:johngachara29@gmail.com", label: "Email" }
            ].map((social, index) => (
                <Tooltip key={index} label={social.label} placement="right">
                    <Box>
                        <motion.div variants={iconHoverVariants} whileHover="hover">
                            <Link href={social.href} isExternal>
                                <Icon
                                    as={social.icon}
                                    boxSize={6}
                                    color="whiteAlpha.900"
                                    _hover={{ color: "white" }}
                                />
                            </Link>
                        </motion.div>
                    </Box>
                </Tooltip>
            ))}
        </VStack>
    );
};

const AnimatedButton = ({ children, ...props }) => (
    <motion.div
        whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
    >
        <Box
            as="button"
            px={6}
            py={3}
            borderRadius="full"
            border="2px solid"
            borderColor="whiteAlpha.400"
            bg="whiteAlpha.200"
            color="white"
            backdropFilter="blur(10px)"
            transition="all 0.3s"
            _hover={{
                bg: "whiteAlpha.300",
                borderColor: "whiteAlpha.600"
            }}
            {...props}
        >
            {children}
        </Box>
    </motion.div>
);

const SkillBadge = ({ icon, label }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
    >
        <HStack
            spacing={2}
            bg="whiteAlpha.200"
            backdropFilter="blur(10px)"
            p={2}
            borderRadius="full"
        >
            <Icon as={icon} boxSize={5} />
            <Text fontSize="sm">{label}</Text>
        </HStack>
    </motion.div>
);

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const gradientStart = useColorModeValue('#4158D0', '#0093E9');
    const gradientEnd = useColorModeValue('#C850C0', '#80D0C7');

    return (
        <Box position="relative" overflow="hidden">
            <ParticleBackground />
            <FloatingSocialBar />

            <Box
                position="absolute"
                top={4}
                right={4}
                zIndex={10}
            >
                <IconButton
                    aria-label="Toggle color mode"
                    icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                    onClick={toggleColorMode}
                    isRound
                    variant="outline"
                    bg="whiteAlpha.200"
                    backdropFilter="blur(10px)"
                    _hover={{ bg: "whiteAlpha.300" }}
                />
            </Box>

            <Flex
                align="center"
                justify="center"
                direction="column"
                minH="100vh"
                bgGradient={`linear(to-br, ${gradientStart}, ${gradientEnd})`}
                color="white"
                position="relative"
                overflow="hidden"
                p={{ base: 4, md: 8 }}
            >
                <Container maxW="container.xl">
                    <VStack spacing={8} textAlign="center">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Heading
                                as="h1"
                                fontSize={{ base: "4xl", md: "6xl" }}
                                mb={4}
                                bgGradient="linear(to-r, whiteAlpha.900, whiteAlpha.600)"
                                bgClip="text"
                            >
                                John Gachara
                            </Heading>

                            <Text fontSize={{ base: "xl", md: "2xl" }} mb={6}>
                                <TypeAnimation
                                    sequence={[
                                        'Backend Developer',
                                        2000,
                                        'Security Specialist',
                                        2000,
                                        'Tech Innovator',
                                        2000,
                                        'Problem Solver',
                                        2000
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            </Text>

                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                maxW="2xl"
                                mx="auto"
                                mb={8}
                                opacity={0.9}
                            >
                                "Crafting robust backend solutions and exploring the intricate world of cybersecurity,
                                one line of code at a time."
                            </Text>

                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                spacing={{ base: 4, sm: 6 }}
                                justify="center"
                            >
                                <AnimatedButton as={Link} href="/About">
                                    About Me
                                </AnimatedButton>
                                <AnimatedButton as={Link} href="/Projects">
                                    My Projects
                                </AnimatedButton>
                            </Stack>
                        </motion.div>

                        <Flex
                            wrap="wrap"
                            justify="center"
                            gap={4}
                            mt={12}
                            maxW="4xl"
                        >
                            <SkillBadge icon={FaServer} label="Backend Development" />
                            <SkillBadge icon={FaShieldAlt} label="Security" />
                            <SkillBadge icon={FaDatabase} label="Database Design" />
                            <SkillBadge icon={FaCode} label="API Development" />
                            <SkillBadge icon={FaLock} label="Pentesting" />
                        </Flex>
                    </VStack>
                </Container>
            </Flex>
        </Box>
    );
};

export default Home;