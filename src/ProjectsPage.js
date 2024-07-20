import React from 'react';
import {
    Box,
    Heading,
    Text,
    Link,
    Grid,
    GridItem,
    Icon,
    Flex,
    Spacer,
    Tag,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaLock, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from "./Navbar";

const MotionBox = motion(Box);

const ProjectCard = ({ project }) => {
    const bgColor = useColorModeValue('gray.100', 'gray.700');
    const borderColor = useColorModeValue('blue.500', 'blue.300');

    return (
        <MotionBox
            p={6}
            bg={bgColor}
            borderRadius="lg"
            borderLeft="4px solid"
            borderColor={borderColor}
            boxShadow="lg"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
        >
            <Flex direction="column" height="100%">
                <Flex alignItems="center" mb={4}>
                    <Heading as="h2" size="lg" mr={4} color={useColorModeValue('gray.800', 'white')}>
                        {project.title}
                    </Heading>
                    <Spacer />
                    <Link href={project.githubLink} isExternal mr={2}>
                        <Icon as={FaGithub} boxSize={6} />
                    </Link>
                    {project.isPrivate && (
                        <Tag colorScheme="red" size="sm">
                            <Icon as={FaLock} mr={1} /> Private
                        </Tag>
                    )}
                    {project.liveLink && (
                        <Link href={project.liveLink} isExternal ml={2}>
                            <Icon as={FaExternalLinkAlt} boxSize={5} />
                        </Link>
                    )}
                </Flex>
                {project.screenshot && (
                    <Image
                        src={project.screenshot}
                        alt={`${project.title} screenshot`}
                        borderRadius="md"
                        mb={4}
                        objectFit="cover"
                        height="200px"
                        width="100%"
                    />
                )}
                <Text mb={4} flex="1">
                    {project.description}
                </Text>
                <Flex wrap="wrap" mt={2}>
                    {project.technologies.map((tech, index) => (
                        <Tag key={index} colorScheme="blue" mr={2} mb={2}>
                            {tech}
                        </Tag>
                    ))}
                </Flex>
            </Flex>
        </MotionBox>
    );
};

const ProjectsPage = () => {
    const projects = [
        {
            title: "PHENOM ISP SYSTEM",
            description: "Collaborating with a network engineer to develop an ISP management system that handles customer data and autonomously manages router activation using Mikrotik API based on customer subscription status. M-PESA STK Push will be incorporated in the final stages.",
            githubLink: "https://github.com/patmuchiri/phenom_isp_software",
            isPrivate: true,
            technologies: ["Python", "Django", "React", "Mikrotik API", "M-PESA API"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "ALLTECH SHOP MANAGEMENT SYSTEM",
            description: "A full-stack web application for a local business (Alltech), managing 2 shops and a storage facility. Features include user authentication, stock management, AI response (Google's Gemini model), and email services.",
            githubLink: "https://github.com/johngachara/alltechfront",
            liveLink: "https://alltechfront.vercel.app/",
            technologies: ["Django", "React", "PostgreSQL", "AWS RDS", "Vercel", "Daisy UI", "Google Gemini API"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "COVID-19 ANALYSIS",
            description: "A web application utilizing Python's data visualization and manipulation tools on a large COVID-19 analysis dataset from Kaggle. Visualized various observations using pair plots and bar graphs.",
            githubLink: "https://github.com/johngachara/Covid19Analysis",
            technologies: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "RANDOM FOREST MODEL",
            description: "Developed a Random Forest model predicting car prices based on a Kaggle dataset utilizing Pandas and Sci-kit Learn. Predictions stored in a simple CSV file.",
            githubLink: "https://github.com/johngachara/random-forest-model",
            technologies: ["Python", "Pandas", "Scikit-learn"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "SPOTIFY CLONE",
            description: "A web application clone of Spotify, utilizing Spotify's web API and Web Playback SDK. Offers user authentication and seamless integration with Spotify, allowing users to search and play songs, view playlists, etc.",
            githubLink: "https://github.com/johngachara/spotifyclone",
            technologies: ["React", "Spotify API", "Web Playback SDK"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "TITANIC DATA ANALYSIS",
            description: "Performed data analysis on the historic Titanic dataset utilizing Python tools. Utilized scikit-learn library for preprocessing techniques e.g., Normalization.",
            githubLink: "https://github.com/johngachara/titanic-data-analysis",
            technologies: ["Python", "Pandas", "Seaborn", "NumPy", "Scikit-learn"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "Restaurant Website",
            description: "A static website for a restaurant showcasing their menu, location, and other information, built using HTML5 and CSS3.",
            githubLink: "https://github.com/johngachara/restaurantwebsite",
            technologies: ["HTML5", "CSS3"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "Simple Image Uploader App",
            description: "A Django web application that allows users to upload and view images.",
            githubLink: "https://github.com/johngachara/imageuploader",
            technologies: ["Django", "Python"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "Weather App",
            description: "A Django web application that displays current weather information and forecasts by integrating with the VisualCrossing Weather API.",
            githubLink: "https://github.com/johngachara/weatherapp",
            technologies: ["Django", "Python", "VisualCrossing Weather API"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "Weather 2.0",
            description: "An improved version of the Weather app mentioned earlier, with additional features and a better UI.",
            githubLink: "https://github.com/johngachara/weather2.0",
            technologies: ["Django", "Python", "VisualCrossing Weather API"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "Astronomy Picture of the Day",
            description: "An application that fetches and displays the Astronomy Picture of the Day from NASA's API.",
            githubLink: "https://github.com/johngachara/astronomy",
            technologies: ["Python", "NASA API"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "Simple RESTful API for Posts",
            description: "A RESTful API built with Django, providing endpoints to create, read, update, and delete blog posts.",
            githubLink: "https://github.com/johngachara/restapi",
            technologies: ["Django", "Django REST Framework"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "Iris Dataset Visualization App",
            description: "A web application that visualizes the famous Iris dataset using data visualization libraries i.e., Matplotlib and Seaborn.",
            githubLink: "https://github.com/johngachara/Irisvisualization",
            technologies: ["Python", "Matplotlib", "Seaborn"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "Song Management API",
            description: "A Django-based RESTful API for managing songs, artists, albums, and their relationships.",
            githubLink: "https://github.com/johngachara/RESTAPI2",
            technologies: ["Django", "Django REST Framework"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "Shop Management API",
            description: "A Django-based RESTful API for managing shops, products, inventory, and their relationships.",
            githubLink: "https://github.com/johngachara/restapi3",
            technologies: ["Django", "Django REST Framework"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "K-Nearest Neighbors Classifier (Wine Dataset)",
            description: "A machine learning model using the K-Nearest Neighbors algorithm to classify the Wine dataset, implemented using the Scikit-learn library in Python.",
            githubLink: "https://github.com/johngachara/knn2",
            technologies: ["Python", "Scikit-learn", "K-Nearest Neighbors"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "K-Nearest Neighbors Classifier (Iris Dataset)",
            description: "Similar to the previous project, but using the Iris dataset and the K-Nearest Neighbors algorithm for classification.",
            githubLink: "https://github.com/johngachara/knneighbours",
            technologies: ["Python", "Scikit-learn", "K-Nearest Neighbors"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "Express.js API with MongoDB",
            description: "A RESTful API built with Express.js and MongoDB, utilizing MongoDB's find functions to perform CRUD operations on a simple schema.",
            githubLink: "https://github.com/johngachara/expressapi",
            technologies: ["Express.js", "MongoDB", "Node.js"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "Express.js School API",
            description: "Similar to the previous project, but with a more complex schema related to a school or educational institution, allowing CRUD operations on entities like students.",
            githubLink: "https://github.com/johngachara/expressapi2",
            technologies: ["Express.js", "MongoDB", "Node.js"],
            screenshot: "/api/placeholder/400/200"
        },
        {
            title: "GitHub Username Search React App",
            description: "A React application that allows users to search for GitHub usernames and display relevant information about the user i.e., repositories.",
            githubLink: "https://github.com/johngachara/githubapi",
            technologies: ["React", "GitHub API"],
            screenshot: "/api/placeholder/400/200"
        }
    ];

    return (
        <Box>
            <Navbar />
            <Box maxW="1200px" mx="auto" py={20} px={6}> {/* Adjusted padding-top */}
                <Heading as="h1" size="4xl" mb={8} textAlign="center" bgGradient="linear(to-r, blue.500, purple.500)" bgClip="text">
                    My Tech Journey
                </Heading>
                <Text fontSize="xl" textAlign="center" mb={12}>
                    Explore my projects and see how I've been pushing the boundaries of technology.
                </Text>
                <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={8}>
                    {projects.map((project, index) => (
                        <GridItem key={index}>
                            <ProjectCard project={project} />
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ProjectsPage;