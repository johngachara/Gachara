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
    useColorModeValue, Center,
} from '@chakra-ui/react';
import { FaGithub, FaLock, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from "../Navbar";

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
                    {project.githubLink && (<Link href={project.githubLink} isExternal mr={2}>
                        <Icon as={FaGithub} boxSize={6}/>
                    </Link>)}
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
                {project.screenshot ? (
                    <Image
                        src={project.screenshot}
                        alt={`${project.title} screenshot`}
                        borderRadius="md"
                        mb={4}
                        objectFit="cover"
                        height="200px"
                        width="100%"
                    />
                ) : <Center>
                    <h2 style={{marginBottom:20}}>
                      No screenshot to show

                    </h2>
                </Center>}
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
            title: "PHENOM ISP SYSTEM (ONGOING)",
            description: "Engineered a state-of-the-art ISP management system that revolutionizes network administration. Seamlessly integrated customer data handling with autonomous router activation via Mikrotik API. Implemented dynamic network resource management based on real-time subscription status. Incorporated M-PESA STK Push for frictionless payment processing and developed an intelligent bulk SMS system for proactive customer engagement.",
            githubLink: "https://github.com/patmuchiri/phenom_isp_software",
            technologies: ["Django", "ROUTEROS", "PESA-PAL API"],
            screenshot: require('../screenshots/phenom.png')
        },
        {
            title: "ALLTECH SHOP MANAGEMENT SYSTEM",
            description: "Architected a robust, multi-tiered business management ecosystem for Alltech, managing operations across two shops. Designed a microservices architecture utilizing Node.js, Django, and React with Firebase integration. Implemented advanced features including user authentication, inventory management, and AI-powered responses using Google's Gemini model. Leveraged cloud technologies (AWS, Firebase) and optimized performance with Redis caching and Meilisearch. Ensured security with Firebase Authentication and implemented email services.",
            isPrivate: true,
            technologies: ["Django", "React", "Express", "PostgreSQL", "AWS RDS,EC2,Route 53", "Vercel", "Chakra UI", "Nginx", "Firebase Authentication,Realtime Database", "Redis Cache", "Meilisearch", "Google SMTP", "Sequelize"],
            screenshot: require("../screenshots/alltech.png")
        },
        {
            title: "Password Manager",
            description: "Developed a secure, user-friendly password management solution using React and Firebase Realtime Database. Implemented Corbado for advanced authentication, enabling phone-based passkey sign-in. Ensured data security through bcrypt hashing and encryption for database transmissions.",
            technologies: ["React", "Vercel", "Firebase Realtime Database","Corbado"],
            isPrivate: true,
            screenshot: require('../screenshots/password.png')
        },
        {
            title: "Celery Scheduler",
            description: "Engineered a powerful task scheduling system for client and personal applications using Celery beat and Celery worker. Deployed on AWS EC2 for scalability and high availability, with Supervisor for process control and monitoring.",
            technologies: ["Django", "Celery", "AWS EC2", "Supervisor"],
            githubLink: "https://github.com/johngachara/scheduler"
        },
        {
            title: "GitHub Username Search React App",
            description: "Created an intuitive React application for GitHub user discovery, integrating GitHub's public API for real-time data retrieval. Implemented responsive design for seamless user experience across devices.",
            githubLink: "https://github.com/johngachara/githubapi",
            technologies: ["React", "GitHub API"],
            screenshot:require("../screenshots/github.png")
        },
        {
            title: "SPOTIFY CLONE",
            description: "Developed a comprehensive web application cloning Spotify's functionality, integrating Spotify's Web API and Web Playback SDK for authentic music streaming experience. Implemented user authentication and features for song search, playback, and playlist management.",
            githubLink: "https://github.com/johngachara/spotifyclone",
            technologies: ["React", "Spotify API", "Web Playback SDK"],
            screenshot:require('../screenshots/spotify.png')
        },   {
            "title": "Gemini-Powered Intelligent Chatbot",
            "description": "Engineered a cutting-edge chatbot application leveraging Google's state-of-the-art Generative AI models, Gemini and Gemini Pro. This project showcases proficiency in integrating advanced AI technologies with modern web development frameworks.",
            "githubLink": "https://github.com/johngachara/chatbot",
            "technologies": ["React", "Google Generative AI SDK"],
            screenshot:require('../screenshots/gemini.png')
        },
        {
            title: "COVID-19 ANALYSIS",
            description: "Engineered a data-driven web application for COVID-19 trend analysis, utilizing Python's data visualization and manipulation tools on a large-scale Kaggle dataset. Created insightful visualizations and integrated Django for a user-friendly web interface to explore the data. This project showcases skills in data analysis, visualization, and web application development for handling and presenting large datasets.",
            githubLink: "https://github.com/johngachara/Covid19Analysis",
            technologies: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib", "Django"],
            screenshot: require("../screenshots/covid.png")
        },
        {
            title: "RANDOM FOREST MODEL",
            description: "Developed a machine learning model for precise car price prediction using a Random Forest algorithm. Implemented with Scikit-learn on a comprehensive Kaggle dataset, utilizing Pandas for efficient data manipulation and preprocessing. Achieved high accuracy in price predictions.",
            githubLink: "https://github.com/johngachara/random-forest-model",
            technologies: ["Python", "Pandas", "Scikit-learn"],
        },
        {
            title: "TITANIC DATA ANALYSIS",
            description: "Conducted an in-depth analysis of the historic Titanic dataset, employing advanced data preprocessing techniques using Scikit-learn, including normalization. Utilized Pandas, Seaborn, and NumPy for comprehensive data manipulation and visualization, extracting meaningful insights from complex historical data.",
            githubLink: "https://github.com/johngachara/titanic-data-analysis",
            technologies: ["Python", "Pandas", "Seaborn", "NumPy", "Scikit-learn"],
        },
        {
            "title": "Iris Dataset Visualization Web App",
            "description": "Developed a dynamic web application showcasing advanced data visualization techniques for the renowned Iris dataset. Leveraged Matplotlib and Seaborn to create interactive, publication-quality plots, demonstrating proficiency in data analysis and visualization in a web environment.",
            "githubLink": "https://github.com/johngachara/Irisvisualization",
            "technologies": ["Python", "Matplotlib", "Seaborn", "Web Development"],
        },
        {
            "title": "K-Nearest Neighbors Wine Classification Model",
            "description": "Engineered a sophisticated machine learning model utilizing the K-Nearest Neighbors algorithm to classify wines based on their chemical properties. This project showcases expertise in feature engineering, model training, and evaluation using industry-standard tools.",
            "githubLink": "https://github.com/johngachara/knn2",
            "technologies": ["Python", "Scikit-learn", "K-Nearest Neighbors", "Data Preprocessing"],

        },
        {
            "title": "Iris Classification using K-Nearest Neighbors",
            "description": "Developed a high-performance machine learning model for the classic Iris flower classification problem. This project demonstrates proficiency in applying the K-Nearest Neighbors algorithm to solve real-world classification challenges.",
            "githubLink": "https://github.com/johngachara/knneighbours",
            "technologies": ["Python", "Scikit-learn", "K-Nearest Neighbors", "Data Visualization"],

        },
        {
            title: "Restaurant Website",
            description: "A static website for a restaurant showcasing their menu, location, and other information, built using HTML5 and CSS3.",
            githubLink: "https://github.com/johngachara/restaurantwebsite",
            technologies: ["HTML5", "CSS3"],
        },
        {
            title: "Simple Image Uploader App",
            description: "A Django web application that allows users to upload and view images.",
            githubLink: "https://github.com/johngachara/imageuploader",
            technologies: ["Django", "Python"],
        },
        {
            title: "Weather App",
            description: "A Django web application that displays current weather information and forecasts by integrating with the VisualCrossing Weather API.",
            githubLink: "https://github.com/johngachara/weatherapp",
            technologies: ["Django", "Python", "VisualCrossing Weather API"],
        },
        {
            title: "Weather 2.0",
            description: "An improved version of the Weather app mentioned earlier, with additional features and a better UI.",
            githubLink: "https://github.com/johngachara/weather2.0",
            technologies: ["Django", "Python", "VisualCrossing Weather API"],
        },
        {
            title: "Astronomy Picture of the Day",
            description: "An application that fetches and displays the Astronomy Picture of the Day from NASA's API.",
            githubLink: "https://github.com/johngachara/astronomy",
            technologies: ["Python", "NASA API"],
        },
        {
            title: "Simple RESTful API for Posts",
            description: "A RESTful API built with Django, providing endpoints to create, read, update, and delete blog posts.",
            githubLink: "https://github.com/johngachara/restapi",
            technologies: ["Django", "Django REST Framework"],
        },
        {
            title: "Song Management API",
            description: "A Django-based RESTful API for managing songs, artists, albums, and their relationships.",
            githubLink: "https://github.com/johngachara/RESTAPI2",
            technologies: ["Django", "Django REST Framework"],
        },
        {
            title: "Shop Management API",
            description: "A Django-based RESTful API for managing shops, products, inventory, and their relationships.",
            githubLink: "https://github.com/johngachara/restapi3",
            technologies: ["Django", "Django REST Framework"],
        },

        {
            title: "Express.js API with MongoDB",
            description: "A RESTful API built with Express.js and MongoDB, utilizing MongoDB's find functions to perform CRUD operations on a simple schema.",
            githubLink: "https://github.com/johngachara/expressapi",
            technologies: ["Express.js", "MongoDB", "Node.js"],
        },
        {
            title: "Express.js School API",
            description: "Similar to the previous project, but with a more complex schema related to a school or educational institution, allowing CRUD operations on entities like students.",
            githubLink: "https://github.com/johngachara/expressapi2",
            technologies: ["Express.js", "MongoDB", "Node.js"],
        },
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