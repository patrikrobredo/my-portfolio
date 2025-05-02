import { faDocker, faLaravel, faReact } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "Next.js",
    "Redux",
    "Vue.js", 
    "Angular",
    "jQuery",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "Bootstrap",
    "Tailwind CSS",
    "CSS3",
    "SASS",
];

const labelsSecond = [
    "Node.js",
    "Express.js",
    "Laravel",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "REST APIs",
    "Firebase",
    "Redis",
];

const labelsThird = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend Web Development</h3>
                    <p>As a passionate Frontend Developer, I specialize in crafting intuitive, responsive, and visually appealing user interfaces. I focus on creating seamless user experiences (UX) that are both functional and aesthetically pleasing, utilizing the latest tools, frameworks, and best practices in web development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLaravel} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>As a skilled Backend Developer, I specialize in building robust, scalable, and efficient server-side solutions that power dynamic web applications. I focus on creating seamless integrations between the front-end and back-end, ensuring smooth data flow, security, and optimal performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;