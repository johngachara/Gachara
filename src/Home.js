import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Icon,
    Link,
    Stack,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
import alltech from "./alltech.png";
import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
    const bgColor = useColorModeValue('gray.100', 'gray.900');
    const textColor = useColorModeValue('gray.700', 'gray.200');

    return (
        <Box>
            <Flex
                align="center"
                justify="center"
                direction="column"
                minH="90vh"
                bgGradient={`linear(to-l, ${useColorModeValue('#7928CA', '#FF0080')}, ${useColorModeValue('#FF0080', '#7928CA')})`}
                color="white"
                py={20}
                px={8}
            >
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <Heading as="h1" size="6xl" mb={6}>
                        Hello, I'm John Gachara
                    </Heading>
                    <Text fontSize="3xl" mb={8}>
                        A passionate software engineer specializing in full stack development and data science.
                    </Text>
                </motion.div>
                <Stack spacing={4} direction={['column', 'row']}>
                    <Button
                        as={Link}
                        href="/About"
                        colorScheme="whiteAlpha"
                        variant="outline"
                        size="lg"
                    >
                        About Me
                    </Button>
                    <Button
                        as={Link}
                        href="/Projects"
                        colorScheme="whiteAlpha"
                        variant="outline"
                        size="lg"
                    >
                        My Projects
                    </Button>
                </Stack>
            </Flex>

            <Box py={20} px={8} bg={bgColor} color={textColor}>
                <Flex align="center" justify="center" direction="column" mb={12}>
                    <Heading as="h2" size="3xl" mb={6}>
                        Get in Touch
                    </Heading>
                    <Text fontSize="xl" mb={6} textAlign="center" maxW="md">
                        Let's connect and explore opportunities for collaboration or discuss
                        your project requirements.
                    </Text>
                </Flex>
                <Flex justify="center">
                    <Stack direction={['column', 'row']} spacing={6}>
                        <Link href="https://github.com/your-username" isExternal>
                            <Icon as={FaGithub} boxSize={10} />
                        </Link>
                        <Link href="mailto:johngachara29@gmail.com" isExternal>
                            <Icon as={FaEnvelope} boxSize={10} />
                        </Link>
                    </Stack>
                </Flex>
            </Box>

            <Box py={20} px={8} bg={useColorModeValue('gray.200', 'gray.800')}>
                <Flex align="center" justify="center" direction="column" mb={12}>
                    <Heading as="h2" size="3xl" mb={6}>
                        Featured Project
                    </Heading>
                    <Text fontSize="xl" mb={6} textAlign="center" maxW="md">
                        Alltech Management System.
                        This is a full stack web application for a phone repair shop that i actively maintain and is used to manage stock,sales
                        and transactions for the business.It utilises a django backend for handling requests and a
                        POSTGRESQL database for storing the data.The backend is hosted on c-panel shared hosting whereas
                        the database is hosted on aws relational database service.The frontend is developed in react and
                        utilises JWT token authentication to communicate with the backend securely.The frontend is
                        hosted on vercel.Key Features: Authentication ,Access control,Stock Management,Mailing services using google SMTP,Order Management
                    </Text>
                  <a
                      style={{color:"blue"}}
                      href="https://alltechfront.vercel.app" isExternal target="_blank">View</a>
                </Flex>
                <Flex justify="center">
                <Image
                        src={alltech}
                        alt="Featured Project Screenshot"
                        maxW="l"
                        borderRadius="md"
                        boxShadow="lg"
                    />
                </Flex>
            </Box>
        </Box>
    );
};

export default Home;