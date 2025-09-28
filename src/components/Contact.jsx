import { useState } from 'react';
import './contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        // Simple form validation
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus('error');
            setIsSubmitting(false);
            return;
        }

        // Using mailto as a fallback (direct email)
        const mailtoLink = `mailto:muttaki9@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`)}`;
        
        // Try to open email client
        window.location.href = mailtoLink;
        
        setSubmitStatus('success');
        setIsSubmitting(false);
        
        // Reset form after successful submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000);
    };

    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-info">
                    <h1>Get In Touch</h1>
                    <p>
                        I'm currently available for freelance work, internships, and full-time opportunities. 
                        Whether you have a project in mind or just want to say hello, I'd love to hear from you!
                    </p>
                    
                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:muttaki9@gmail.com">muttaki9@gmail.com</a>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div>
                                <h3>Location</h3>
                                <p>Toronto, Ontario, Canada</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">💼</div>
                            <div>
                                <h3>Availability</h3>
                                <p>Open to opportunities</p>
                            </div>
                        </div>
                    </div>

                    <div className="location-map">
                        <h3>Based in Toronto</h3>
                        <div className="map-placeholder">
                            <p>📍 Toronto, Ontario</p>
                            <p>Greater Toronto Area</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2>Send me a message</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project inquiry or general message"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell me about your project or how I can help you..."
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitStatus === 'success' && (
                            <div className="status-message success">
                                ✅ Message sent successfully! Your email client should open shortly.
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="status-message error">
                                ❌ Please fill in all required fields.
                            </div>
                        )}
                    </form>

                    <div className="direct-email">
                        <p>Prefer to email directly?</p>
                        <a href="mailto:muttaki9@gmail.com" className="direct-email-link">
                            Click here to email muttaki9@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}