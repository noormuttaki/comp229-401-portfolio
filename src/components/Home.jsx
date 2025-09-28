import { Link } from 'react-router-dom';
import profileImage from '../assets/images/profile.jpg'; // profile image
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <div className="welcome-text">
                        <h1>Hello</h1>
                        <h2>I am <span className="name-highlight">Noor Muttaki</span></h2>
                        <p className="intro-text">
                            I am a student at Centennial College studying 
                            <span className="highlight"> Software Engineering Technician</span>.
                        </p>
                    </div>
                    
                    <div className="mission-section">
                        <h3>My Mission</h3>
                        <p className="mission-statement">
                            "When the world shoves you around, you just gotta stand up and shove back. It’s not about how many times you get knocked down, but how many times you stand up and keep moving forward" - Roronoa Zoro
                        </p>
                    </div>

                    <div className="cta-buttons">
                        <Link to="/about" className="cta-button primary">Learn More About Me</Link>
                        <Link to="/projects" className="cta-button secondary">View My Projects</Link>
                    </div>
                </div>
                
                <div className="hero-image">
                    <img 
                        src={profileImage} 
                        alt="Noor Muttaki" 
                        className="profile-photo"
                    />
                </div>
            </section>
        </div>
    )
}