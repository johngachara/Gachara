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
    IconButton
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaServer,
    FaShieldAlt,
    FaSun,
    FaMoon
} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const FloatingSocialBar = () => {
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

    return (
        <VStack
            position="fixed"
            left={4}
            top="50%"
            transform="translateY(-50%)"
            spacing={4}
            zIndex={10}
        >
            {[
                { icon: FaGithub, href: "https://github.com/johngachara" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/john-gachara-5b8030298/" },
                { icon: FaEnvelope, href: "mailto:johngachara29@gmail.com" }
            ].map((social, index) => (
                <motion.div
                    key={index}
                    variants={iconHoverVariants}
                    whileHover="hover"
                >
                    <Link href={social.href} isExternal>
                        <Icon
                            as={social.icon}
                            boxSize={6}
                            color="whiteAlpha.800"
                            _hover={{ color: "white" }}
                        />
                    </Link>
                </motion.div>
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

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const gradientStart = useColorModeValue('#4158D0', '#0093E9');
    const gradientEnd = useColorModeValue('#C850C0', '#80D0C7');

    return (
        <Box position="relative" overflow="hidden">
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
                p={8}
            >
                <Container maxW="container.xl">
                    <VStack spacing={8} textAlign="center">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Heading as="h1" size="3xl" mb={4}>
                                John Gachara
                            </Heading>

                            <Text fontSize="2xl" mb={6}>
                                <TypeAnimation
                                    sequence={[
                                        'Backend Developer',
                                        2000,
                                        'Pentester',
                                        2000,
                                        'Tech Enthusiast',
                                        2000,
                                        'Problem Solver',
                                        2000
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            </Text>

                            <Text fontSize="lg" maxW="2xl" mx="auto" mb={8}>
                                "Crafting robust backend solutions and exploring the intricate world of cybersecurity,
                                one line of code at a time."
                            </Text>

                            <HStack justify="center" spacing={6}>
                                <AnimatedButton as={Link} href="/About">
                                    About Me
                                </AnimatedButton>
                                <AnimatedButton as={Link} href="/Projects">
                                    My Projects
                                </AnimatedButton>
                            </HStack>
                        </motion.div>

                        <HStack spacing={12} mt={12}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Icon
                                    as={FaServer}
                                    boxSize={16}
                                    color="whiteAlpha.700"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Icon
                                    as={FaShieldAlt}
                                    boxSize={16}
                                    color="whiteAlpha.700"
                                />
                            </motion.div>
                        </HStack>
                    </VStack>
                </Container>
            </Flex>
        </Box>
    );
};

export default Home;