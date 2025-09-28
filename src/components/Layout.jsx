import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Layout.css';

export default function Layout() {
    const location = useLocation();
    
    return (
        <header className="header">
            <div className="header-left">
                <div className="logo">
                    <img src={logo} alt="Portfolio Logo" className="logo-image" />
                </div>
                <h1 className="portfolio-title">Noor Muttaki</h1>
            </div>
            
            <nav className="navigation">
                <Link 
                    to="/" 
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                    Home
                </Link>
                <Link 
                    to="/about" 
                    className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                >
                    About Me
                </Link>
                <Link 
                    to="/projects" 
                    className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                >
                    Projects
                </Link>
                <Link 
                    to="/education" 
                    className={`nav-link ${location.pathname === '/education' ? 'active' : ''}`}
                >
                    Education
                </Link>
                <Link 
                    to="/services" 
                    className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                >
                    Services
                </Link>
                <Link 
                    to="/contact" 
                    className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                >
                    Contact Me
                </Link>
            </nav>
        </header>
    )
}