import './services.css';

export default function Services() {
    const services = [
        {
            icon: "💻",
            title: "Web Development",
            description: "Custom website development using modern technologies including React, JavaScript, and responsive design principles.",
            skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design"]
        },
        {
            icon: "📊",
            title: "Data Analysis",
            description: "Data cleaning, analysis, and visualization to extract meaningful insights and support data-driven decision making.",
            skills: ["Data Cleaning", "Statistical Analysis", "Data Visualization", "Reporting"]
        },
        {
            icon: "🛠️",
            title: "Programming Solutions",
            description: "Software development and programming solutions tailored to solve specific business problems and automate processes.",
            skills: ["Problem Solving", "Algorithm Design", "Software Development", "Automation"]
        },
        {
            icon: "📱",
            title: "Frontend Development",
            description: "Creating interactive and user-friendly interfaces with focus on usability and modern web standards.",
            skills: ["UI/UX Principles", "React Components", "Cross-browser Compatibility"]
        },
        {
            icon: "🔍",
            title: "Data Visualization",
            description: "Transforming complex data into clear, actionable visual representations using charts, graphs, and dashboards.",
            skills: ["Chart.js", "Data Reporting", "Dashboard Creation", "Insight Generation"]
        },
        {
            icon: "⚡",
            title: "Technical Support",
            description: "Debugging, troubleshooting, and providing technical solutions for software and programming challenges.",
            skills: ["Debugging", "Technical Documentation", "Code Optimization"]
        }
    ];

    return (
        <div className="services-container">
            <h1>My Services</h1>
            <p className="services-intro">
                Leveraging my education in computer programming and data analytics to provide comprehensive technical solutions.
            </p>
            
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className="skills-tags">
                            {service.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="education-context">
                <h2>Powered by My Education</h2>
                <p>
                    My services are built upon the strong foundation from <strong>Centennial College's Computer Programming Technician</strong> program 
                    and practical skills gained from <strong>NPower Canada's Data Analyst BootCamp</strong>.
                </p>
            </div>
        </div>
    );
}