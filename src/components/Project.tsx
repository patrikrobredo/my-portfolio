import mock03 from '../assets/images/mock03.png';
import mock05 from '../assets/images/mock05.png';
import mock07 from '../assets/images/mock07.png';
import mock09 from '../assets/images/mock09.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock09} className="zoom" alt="thumbnail" width="100%"/>
                <h2>High Speed Chase</h2>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Flexible Interface Building</h2>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Integral Analysis</h2>
                <p>As a developer focused on Integral Analysis, I excel in breaking down complex systems, identifying key components, and integrating them seamlessly to create optimized, high-performance applications. </p>
            </div>
            <div className="project">
                <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Course Management</h2>
                <p>As a Full Stack Developer, I built a Course Management System designed to streamline the management of courses, students, and instructors for educational institutions or online platforms.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;