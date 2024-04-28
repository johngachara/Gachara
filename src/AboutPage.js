import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    Link,
    Avatar,
    Icon,
    Divider,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Navbar from "./Navbar";

const AboutPage = () => {
    return (
        <div>
        <Navbar />

        <Box maxW="1200px" mx="auto" py={12} px={6}>
            <Grid
                templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}
                gap={8}
                alignItems="center"
            >
                <GridItem>
                    <Flex align="center" direction={['column', 'row']} mb={8}>
                        <Avatar
                            size="2xl"
                            name="John Gachara Mwangi"
                            src="/profile-photo.jpg"
                            mr={[0, 8]}
                            mb={[4, 0]}
                        />
                        <Box>
                            <Heading as="h1" size="4xl" mb={2}>
                                John Gachara Mwangi
                            </Heading>
                            <Text fontSize="xl" fontWeight="bold" mb={2}>
                                Software Engineer
                            </Text>
                            <Flex align="center" mb={2}>
                                <Icon as={FaMapMarkerAlt} mr={2} />
                                <Text>Nairobi, Kenya</Text>
                            </Flex>
                            <Flex align="center" mb={2}>
                                <Icon as={FaEnvelope} mr={2} />
                                <Link href="mailto:johngachara29@gmail.com" isExternal>
                                    johngachara29@gmail.com
                                </Link>
                            </Flex>
                            <Flex align="center" mb={4}>
                                <Icon as={FaPhone} mr={2} />
                                <Text>+254 712 240 197</Text>
                            </Flex>
                            <Flex>
                                <Link href="https://github.com/johngachara" isExternal>
                                    <Icon as={FaGithub} boxSize={6} />
                                </Link>
                            </Flex>
                        </Box>
                    </Flex>
                </GridItem>

                <GridItem>
                    <Box>
                        <Heading as="h2" size="xl" mb={4}>
                            Education
                        </Heading>
                        <Text mb={2}>
                            <strong>University:</strong> KCA University
                        </Text>
                        <Text mb={2}>
                            <strong>Major:</strong> Bachelor's Information Communication Technology
                        </Text>
                        <Text mb={6}>
                            <strong>Expected Graduation:</strong> September 2025
                        </Text>
                        <Text mb={6}>
                            <strong>Certifications:</strong> E-mobilid web development bootcamp
                        </Text>

                        <Heading as="h2" size="xl" mb={4}>
                            Skills
                        </Heading>
                        <Heading as="h3" size="md" mb={2}>
                            Programming Languages
                        </Heading>
                        <UnorderedList spacing={2} mb={4}>
                            <ListItem>Python</ListItem>
                            <ListItem>Java</ListItem>
                            <ListItem>JavaScript</ListItem>
                        </UnorderedList>
                        <Heading as="h3" size="md" mb={2}>
                            Tools and Technologies
                        </Heading>
                        <UnorderedList spacing={2} mb={6}>
                            <ListItem>Django||Express</ListItem>
                            <ListItem>React</ListItem>
                            <ListItem>Git</ListItem>
                            <ListItem>REST</ListItem>
                            <ListItem>Bootstrap</ListItem>
                            <ListItem>AWS(EC2,RDS)|C-Panel | Vercel</ListItem>
                            <ListItem>Daisy ui | Chakra ui</ListItem>
                            <ListItem>Pandas | NumPy</ListItem>
                            <ListItem>Sci-kit Learn | Tensorflow</ListItem>
                            <ListItem>Seaborn | MatplotLib</ListItem>
                            <ListItem>PostgreSQL | MYSQL</ListItem>
                            <ListItem>SQL</ListItem>
                            <ListItem>Celery</ListItem>

                        </UnorderedList>

                        <Heading as="h2" size="xl" mb={4}>
                            Development Environments
                        </Heading>
                        <UnorderedList spacing={2} mb={6}>
                            <ListItem>Windows</ListItem>
                            <ListItem>LINUX(UBUNTU)</ListItem>
                        </UnorderedList>

                        <Heading as="h2" size="xl" mb={4}>
                            Soft Skills
                        </Heading>
                        <UnorderedList spacing={2}>
                            <ListItem>Problem-solving</ListItem>
                            <ListItem>Collaboration</ListItem>
                            <ListItem>Adaptability</ListItem>
                            <ListItem>Communication</ListItem>
                            <ListItem>Innovation</ListItem>
                            <ListItem>Attention to detail</ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
            </Grid>

            <Divider my={12} />

        </Box>
        </div>
    );
};

export default AboutPage;