import profileImage from '../assets/images/profile.jpg';
import resume1 from '../assets/images/resume-1.png';
import resume2 from '../assets/images/resume-2.png';
import resumePDF from '../assets/images/resume.pdf';
import './About.css';

export default function About() {
    return (
        <div className="about-container">
            {/* About Me Content First */}
            <section className="about-content">
                <div className="profile-image">
                    <img 
                        src={profileImage} 
                        alt="Noor Muttaki" 
                        className="profile-photo"
                    />
                </div>
                <div className="profile-info">
                    {/* Removed "About Me" heading */}
                    <h3>Noor Muttaki</h3>
                    <p className="title">Software Engineering Technician Student</p>
                    <p className="school">Centennial College</p>
                    
                    <div className="about-text">
                        <p>
                            I am a passionate Software Engineering Technician student at Centennial College 
                            with a strong interest in web development, software design, and innovative 
                            technology solutions. My journey in software engineering has equipped me with 
                            skills in various programming languages and development frameworks.
                        </p>
                        <p>
                            I enjoy creating responsive web applications and am constantly learning new 
                            technologies to enhance my skill set. My goal is to contribute to meaningful 
                            projects that make a positive impact through technology.
                        </p>
                    </div>

                    <div className="skills">
                        <h4>Technical Skills</h4>
                        <div className="skills-list">
                            <span>HTML/CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Node.js</span>
                            <span>Python</span>
                            <span>Java</span>
                            <span>SQL</span>
                            <span>Git</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resume Section Below */}
            <section className="resume-section">
                <h2>My Resume</h2>
                
                <div className="resume-display">
                    <img 
                        src={resume1} 
                        alt="Noor Muttaki Resume Page 1"
                        className="resume-image"
                    />
                    <img 
                        src={resume2} 
                        alt="Noor Muttaki Resume Page 2"
                        className="resume-image"
                    />
                </div>

                <div className="resume-download">
                    <a href={resumePDF} download className="download-btn">
                        📄 Download Full Resume (PDF)
                    </a>
                </div>
            </section>
        </div>
    )
}