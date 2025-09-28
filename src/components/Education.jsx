import './education.css';

export default function Education() {
    return (
        <div className="education-container">
            <h1>Education & Training</h1>
            
            <div className="education-grid">
                <div className="education-card">
                    <h2>Centennial College</h2>
                    <h3>Computer Programming Technician</h3>
                    <p className="education-period">Current</p>
                    <p>
                        Currently studying computer programming fundamentals, software development, 
                        and technical skills to become a proficient programmer.
                    </p>
                    <div className="future-plans">
                        <strong>Future Plans:</strong> Continue education to obtain a degree in Computer Science.
                    </div>
                </div>

                <div className="education-card">
                    <h2>NPower Canada</h2>
                    <h3>Data Analyst BootCamp</h3>
                    <p className="education-period">Completed</p>
                    <p>
                        Completed an intensive BootCamp program focused on data analysis skills and techniques.
                    </p>
                    <ul className="skills-list">
                        <li>Data analysis and visualization</li>
                        <li>Statistical analysis</li>
                        <li>Database management</li>
                        <li>Reporting and insights generation</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}