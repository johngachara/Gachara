import React from 'react';
import {
    Box,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    Link,
    Grid,
    GridItem,
    Icon,
    Flex,
    Spacer,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import Navbar from "./Navbar";

const ProjectsPage = () => {
    return (
        <div>
            <Navbar/>
        <Box maxW="1200px" mx="auto" py={12} px={6}>
            <Heading as="h1" size="4xl" mb={8}>
                Projects
            </Heading>

            <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={8}>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                              PHENOM ISP SYSTEM(ONGOING)
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/patmuchiri/phenom_isp_software" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                Collaborating with a network engineer to develop an isp management system that is meant to handle customer data and autonomously handle router activation and deactivation using mikrotik api based on customer subscription status.
                            </ListItem>
                            <ListItem>
                              M-PESA STK Push will be incorporated in the final stages
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                ALLTECH SHOP MANAGEMENT SYSTEM
                            </Heading>
                            <Spacer />
                            <Link href="https://alltechfront.vercel.app/" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                Developed a full-stack web application for a local business (Alltech), managing 2
                                shops and a storage facility in Django and React.
                            </ListItem>
                            <ListItem>
                                Backend Hosted on C-panel using PostgreSQL for the database hosted on AWS
                                Relational Database Service.
                            </ListItem>
                            <ListItem>
                                Frontend Hosted on Vercel and utilizes Daisy UI for component styling.
                            </ListItem>
                            <ListItem>
                                Features: User authentication, stock management, AI response (Google's Gemini
                                model), and email services via Google's SMTP server.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                COVID-19 ANALYSIS
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/Covid19Analysis" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                Developed a web application utilizing Python's data visualization and manipulation
                                tools (Pandas, NumPy, Seaborn, Matplotlib) on a large COVID-19 analysis dataset
                                from Kaggle.
                            </ListItem>
                            <ListItem>
                                Visualized various observations using pair plots and bar graphs. Data shuffled upon
                                each refresh.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                RANDOM FOREST MODEL
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/random-forest-model" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                Developed a Random Forest model predicting car prices based on a Kaggle dataset
                                utilizing Pandas and Sci-kit Learn.
                            </ListItem>
                            <ListItem>Predictions stored in a simple CSV file.</ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                SPOTIFY CLONE
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/spotifyclone" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                Developed a web application clone of Spotify, utilizing Spotify's web API and Web
                                Playback SDK.
                            </ListItem>
                            <ListItem>
                                Offers user authentication and seamless integration with Spotify, allowing users to
                                search and play songs, view playlists, etc.
                            </ListItem>
                            <ListItem>Attempted to provide a UI similar to Spotify.</ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                TITANIC DATA ANALYSIS
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/titanic-data-analysis" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                Performed data analysis on the historic Titanic dataset utilizing Python tools
                                i.e., Pandas, Seaborn, NumPy.
                            </ListItem>
                            <ListItem>
                                Utilized scikit-learn library for preprocessing techniques e.g., Normalization.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                Restaurant Website Using HTML5 and CSS3
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/restaurantwebsite" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                A static website for a restaurant showcasing their menu, location, and other information, built using HTML5 and CSS3.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                Simple Image Uploader App Using Django
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/imageuploader" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                A Django web application that allows users to upload and View images.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                Weather App Using Django and VisualCrossing Weather API
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/weatherapp" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                A Django web application that displays current weather information and forecasts by integrating with the VisualCrossing Weather API.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                               Weather 2.0
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/weather2.0" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                An improved  version of the Weather app mentioned earlier, with additional features and a better ui.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                Astronomy Picture of the Day
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/astronomy" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                An application that fetches and displays the Astronomy Picture of the Day from NASA's API.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                Simple RESTful API That Manages Posts
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/restapi" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                A RESTful API built with Django, providing endpoints to create, read, update, and delete blog posts .
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                Iris Dataset Visualization App
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/Irisvisualization" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                A web application that visualizes the famous Iris dataset using data visualization libraries ie Matplotlib and Seaborn.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                Song Management API
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/RESTAPI2" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                  A Django-based RESTful API for managing songs, artists, albums, and their relationships.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                Shop Management API
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/restapi3" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                 A Django-based RESTful API for managing shops, products, inventory, and their relationships.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                K-Nearest Neighbors Classifier Model on Sklearn Wine Dataset
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/knn2" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                A machine learning model using the K-Nearest Neighbors algorithm to classify the Wine dataset, implemented using the Scikit-learn library in Python.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                K-Nearest Neighbors Classifier Model on  Iris Dataset
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/knneighbours" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                Similar to the previous project, but using the Iris dataset and the K-Nearest Neighbors algorithm for classification.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                Simple Express.js API Using MongoDB's Find Functions
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/expressapi" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                A RESTful API built with Express.js and MongoDB, utilizing MongoDB's find functions to perform CRUD operations on a simple schema.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                Express.js API Using MongoDB for CRUD Operations on a School Schema
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/expressapi2" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                Similar to the previous project, but with a more complex schema related to a school or educational institution, allowing CRUD operations on entities like students.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        p={6}
                        bg="gray.100"
                        borderRadius="md"
                        boxShadow="md"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.02)' }}
                    >
                        <Flex alignItems="center" mb={4}>
                            <Heading as="h2" size="xl" mr={4}>
                                GitHub Username Search React App
                            </Heading>
                            <Spacer />
                            <Link href="https://github.com/johngachara/githubapi" isExternal>
                                <Icon as={FaGithub} boxSize={6} />
                            </Link>
                        </Flex>
                        <UnorderedList spacing={2}>
                            <ListItem>
                                A React application that allows users to search for GitHub usernames and display relevant information about the user ie repositories.
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
        </div>
    );
};

export default ProjectsPage;