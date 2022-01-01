import React, { useState } from "react";
import challenge1 from '../../assets/Challenge1.png';
import challenge2 from '../../assets/Challenge2.png';
import challenge3 from '../../assets/Challenge3.png';
import challenge4 from '../../assets/Challenge4.png';
import Modal from '../Modal';


function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();

    const [projects] = useState([
        {
            name: 'Work Day Scheduler',
            description: 'Third Party API - Work scheduler',
            applications: [
                'HTML/CSS',
                'JavaScript',
                'Node.js',
            ],
            github: 'https://github.com/TCYang1006',
            deployed: 'https://github.com/TCYang1006'

        },
        {
            name: 'Weekend Fun',
            description: 'Front-End Project',
            applications: [
                'HTML/CSS',
                'JavaScript',
                'Node.js',
            ],
            github: 'https://github.com/TCYang1006',
            deployed: 'https://github.com/TCYang1006'

        },
        {
            name: 'Employee Tracker',
            description: 'tracking employee in company',
            applications: [
                'HTML/CSS',
                'JavaScript',
                'Node.js',
            ],
            github: 'https://github.com/TCYang1006',
            deployed: 'https://github.com/TCYang1006'

        },
        {
            name: 'Full Stack Project',
            description: 'Complete full stack project',
            applications: [
                'HTML/CSS',
                'JavaScript',
                'Node.js',
            ],
            github: 'https://github.com/TCYang1006',
            deployed: 'https://github.com/TCYang1006'

        }
    ]);
    
    const toggleModal = (image, i) => {
        setCurrentProject({...image, index: i});
        setIsModalOpen(!isModalOpen);
    };

    return(
        <section>
            <div>
                {isModalOpen && (
                    <Modal onClose={toggleModal} currentProject={currentProject} />
                )}
            </div>
            <h1 className="row">Tongchee Y. Yang's Portfolio</h1>
            <div className="row">
                <ul className="col-md-6 col-sm-6">
                <img
                    src={challenge1}
                    alt="Work Day Scheduler"
                    className="img-thumbnail mx-6"

                />
                    <img
                    src={challenge2}
                    alt="This Week's Distraction"
                    className="img-thumbnail mx-6"

                />
                </ul>
                <ul className="col-md-6 col-sm-6">
                <img
                    src={challenge3}
                    alt="Employee Tracker"
                    className="img-thumbnail mx-6"

                />
                <img
                    src={challenge4}
                    alt="Our People Tracker"
                    className="img-thumbnail mx-6"

                />
                </ul>
            </div>
        </section>
    )
}
export default Portfolio;

//{currentProjects.map((image, i)=> (
//<img
//src={require(`../../assets/Challenge${i}.png`)}
//alt={image.name}
//className="img-thumbnail mx-6"
//onClick={() => toggleModal(image, i)}
//key={image.name}
//))}