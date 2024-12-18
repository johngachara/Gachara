const projects = [
    {
        title: "ALLTECH SHOP MANAGEMENT SYSTEM: Backend Microservices",
        description: "Architected a secure, high-performance microservices backend using Django and Node.js, featuring comprehensive security measures and enterprise-grade infrastructure.",
        detailedDescription: `
    Production-grade backend solution featuring:
    • Distributed microservices architecture with Django and Node.js
    • Multi-database integration (PostgreSQL and Firestore)
    • Advanced caching mechanisms using Redis
    • Scalable infrastructure deployed on AWS EC2

    Security Implementation:
    • Firebase ID token verification for JWT authentication
    • Content Security Policy (CSP) headers implementation
    • HTTP Strict Transport Security (HSTS) enforcement
    • DRF throttling for API rate limiting
    • Nginx reverse proxy with custom rate limiting rules
    • Fail2ban integration for auth endpoint protection
    • Cloudflare integration for DDoS protection and WAF
    • ModSecurity WAF configuration for additional security
    • FirewallD implementation for server-level access control

    Infrastructure & Performance:
    • Nginx reverse proxy configuration for load balancing
    • MeiliSearch integration for real-time search indexing
    • Redis-based caching for improved performance
    • Comprehensive logging and monitoring setup
    • Regular security audits and vulnerability scanning
    `,
        githubLink: [
            'https://github.com/johngachara/phone_shop_pos_backend',
            'https://github.com/johngachara/sequelizer'
        ],
        technologies: [
            "Django",
            "Node.js",
            "PostgreSQL",
            "Firestore",
            "JWT Authentication",
            "Redis",
            "AWS EC2",
            "Nginx",
            "MeiliSearch",
            "Cloudflare",
            "ModSecurity",
            "FirewallD",
            "Fail2ban"
        ],
        type: "Backend Microservices",
        startYear: 2023,
        endYear: "current",
        complexity: "Advanced"
    },
    {
        title: "ALLTECH SHOP MANAGEMENT SYSTEM: Responsive POS Frontend",
        description: "Developed a secure, high-performance React-based Point-of-Sale frontend with AI-powered insights, advanced user management, and enterprise-grade security measures.",
        detailedDescription: `
    Enterprise-grade frontend application featuring:
    • Role-based access control with granular permissions
    • Firebase authentication integration
    • High-performance search with MeiliSearch
    • Progressive Web App (PWA) compatibility
    • AI-powered responses from GPT4o for general inquiries

    Security Implementation:
    • Content Security Policy (CSP) headers via AWS Amplify
    • Cache-Control headers for optimal caching strategy
   
    State Management & Performance:
    • Zustand for efficient global state management
    • Component-level code splitting
    • Lazy loading for improved initial load time
    • Optimized asset delivery through Amplify CDN

    Infrastructure:
    • Hosted on AWS Amplify with CI/CD pipeline
    • Automatic branch deployments
    • Built-in SSL/TLS certificate management
    • Environment variable management
    `,
        githubLink: 'https://github.com/johngachara/phone_shop_pos',
        technologies: [
            "React",
            "Chakra UI",
            "Zustand",
            "Firebase Authentication",
            "MeiliSearch",
            "Gpt4o",
            "AWS Amplify",
        ],
        type: "Frontend Application",
        startYear: 2023,
        endYear: "current",
        complexity: "Advanced"
    },
    {
        title: "ALLTECH SHOP MANAGEMENT SYSTEM: Automated Reporting Engine",
        description: "Engineered a sophisticated Celery-based task scheduling system to automate critical business processes.",
        detailedDescription: `
        Task management solution featuring:
        • Automated report generation (weekly sales reports)
        • Email notifications via Google SMTP
        • Asynchronous task queue for distributed workflows
        `,
        githubLink: 'https://github.com/johngachara/scheduler',
        technologies: [
            "Celery", "Django", "Task Queue",
            "Periodic Jobs"
        ],
        type: "Background Task Management",
        startYear: 2023,
        endYear: 'current',
        complexity: "Advanced"
    },
    {
        title: "Credit Card Fraud Detection",
        description: "A machine learning project to detect fraudulent credit card transactions using various algorithms and neural networks.",
        detailedDescription: `
        Machine learning solution demonstrating:
        • Advanced predictive modeling techniques
        • Multiple algorithm comparisons
        • Comprehensive data preprocessing
        • Performance evaluation and optimization
        `,
        technologies: [
            "Python", "Scikit-learn", "TensorFlow", "Keras",
            "Pandas", "NumPy"
        ],
        githubLink: "https://github.com/johngachara/credit_card_fraud_detection",
        startYear: 2022,
        endYear: 2023,
        complexity: "Advanced"
    },
    {
        title: "Gemini-Powered Intelligent Chatbot",
        description: "Engineered a cutting-edge chatbot application leveraging Google's state-of-the-art Generative AI models, Gemini and Gemini Pro.",
        detailedDescription: `
        AI-driven chatbot showcasing:
        • Integration of advanced generative AI
        • Responsive and interactive design
        • Real-time conversational capabilities
        • Modern web development practices
        `,
        githubLink: "https://github.com/johngachara/chatbot",
        technologies: ["React", "Google Generative AI SDK"],
        startYear: 2023,
        endYear: 2024,
        complexity: "Intermediate"
    },
    {
        title: "Meilisearch Querying Backend",
        description: "Developed a high-performance querying backend using Meilisearch to deliver fast and efficient search results.",
        detailedDescription: `
        High-performance search system featuring:
        • Fast querying with Meilisearch
        • Optimized for large-scale data retrieval
        • AWS EC2 and Nginx for robust hosting and traffic management
        `,
        githubLink: "https://github.com/johngachara/meilisearch_query",
        technologies: ["Express.js", "AWS EC2", "Nginx"],
        startYear: 2023,
        endYear: 2024,
        complexity: "Intermediate"
    },
    {
        title: "GitHub Username Search React App",
        description: "Created an intuitive React application for GitHub user discovery, integrating GitHub's public API for real-time data retrieval.",
        detailedDescription: `
        GitHub user search application featuring:
        • Real-time data retrieval from GitHub API
        • Responsive design for cross-device compatibility
        • Interactive user interface for smooth experience
        `,
        githubLink: "https://github.com/johngachara/githubapi",
        technologies: ["React", "GitHub API"],
        startYear: 2023,
        endYear: 2024,
        complexity: "Intermediate"
    },
    {
        title: "SPOTIFY CLONE",
        description: "Developed a comprehensive web application cloning Spotify's functionality, integrating Spotify's Web API and Web Playback SDK for authentic music streaming experience.",
        detailedDescription: `
        Full-featured music streaming platform:
        • Integrated Spotify Web API for song search and playback
        • Web Playback SDK for real-time streaming
        • User authentication for a personalized experience
        • Playlist management and music library
        `,
        githubLink: "https://github.com/johngachara/spotifyclone",
        technologies: ["React", "Spotify API", "Web Playback SDK"],
        startYear: 2023,
        endYear: 2024,
        complexity: "Intermediate"
    }

];
export default projects