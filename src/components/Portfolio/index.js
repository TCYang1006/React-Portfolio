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
            project_number: 1,
            description: "This is a one day scheduling log. The current day and date will appear at the top of the scheduling log. As time passes each hour, the time slot will change color (red for past, grey for current and green for future). For each hour of the day, a task/event can be added to the middle column. Clicking on the disk icon will save the task/event. Each hour has it's own disk icon for saving. The task/event will be stored in local storage when saved. Reloading or refreshing the website will update the column with the recently saved local storage information.",
            github: 'https://github.com/TCYang1006/workday-scheduler',
            deployed: 'https://TCYang1006.github.io/workday-scheduler'

        },
        {
            name: "This Week's Distractions",
            project_number: 2,
            description: "This Week's Distractions is a one-stop event planner for those who like to get out, travel and have some fun. Users can search by city and a list of events will display, along with the current weather forecast and a map of the location.",
            github: 'https://github.com/TCYang1006/Project-1',
            deployed: 'https://tcyang1006.github.io/Project-1'

        },
        {
            name: 'Weather-Dashboard',
            project_number: 3,
            description: "The Weather-Dashboard allow a user to enter a city name and report the current weather condition(Temperature, Humidity, Wind-speed and UV index) and a 5-Day forecast. The 5-Day forecast will include a weather icon, temperature, humidity and wind-speed.",
            github: 'https://github.com/TCYang1006/WeatherDashboard',
            deployed: 'https://tcyang1006.github.io/WeatherDashboard'

        },
        {
            name: 'Vaccine Tracker',
            project_number: 4,
            description: 'As more places and events require proof of vaccination.  This application allow users to keep track of their COVID vaccine record.  The user will be able to sign-up, login and update their personal information and vaccine record. ',
            github: 'https://github.com/aschmidtke/vaccine-tracker-project',
            deployed: 'https://cryptic-shelf-43216.herokuapp.com/'

        }
    ]);
    
    const toggleModal = (index) => {
        setCurrentProject(projects[index]);
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
                    onClick={(e) => toggleModal(0)}

                />
                    <img
                    src={challenge2}
                    alt="This Week's Distraction"
                    className="img-thumbnail mx-6"
                    onClick={(e) => toggleModal(1)}

                />
                </ul>
                <ul className="col-md-6 col-sm-6">
                <img
                    src={challenge3}
                    alt="Weather Dashboard"
                    className="img-thumbnail mx-6"
                    onClick={(e) => toggleModal(2)}

                />
                <img
                    src={challenge4}
                    alt="Vaccine Tracker"
                    className="img-thumbnail mx-6"
                    onClick={(e) => toggleModal(3)}

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