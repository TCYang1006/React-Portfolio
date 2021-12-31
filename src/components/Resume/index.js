import React from 'react';
import myResume from '../../assets/TCYang.pdf';

function Resume() {
    return (
        <section>
            <h1 className="center header">Tongchee Y. Yang's Resume</h1>
            <div>
                <a href={myResume} download>
                    <h4>Download Resume</h4>
                </a>
            </div>
            <div>
                <h2>Skills</h2>
                <ol>HTML and CSS</ol>
                <ol>JavaScript</ol> 
                <ol>Node</ol> 
                <ol>Express</ol> 
                <ol>SQL</ol> 
                <ol>MongoDB</ol> 
                <ol>React</ol> 
            </div>
            <div>
                <h2>Experience</h2>
                <h5>NTN Driveshaft Anderson, Indiana 2018~Present</h5>
                <h6>I'm currently a Process/Induction Hardening Engineer with NTN Driveshft at the Anderson, Indiana Plant.  I lead a team of 5 to install and start up the turning and heat-treat department.  The installation required working with outside contractors (machine riggers, electricians and pipefitters) to install 2 induction hardening machines, 2 tempering ovens, 8 overhead transfering systems, 7 lathes, 2 mills, 2 rolling centers, 2 Fanuc robot-arms and 5 multi-inpsection units  </h6>
            </div>
            <br></br>
            <div>
                <h2 className="headerResume">Education</h2>
                <h5>Butler University - Coding Bootcamp</h5>
                <h5>IUPUI - Bachelor of Science in Mechanical Engineering 2001</h5>
                <h5>Greenfield Central High School</h5>
            </div>
        </section>
    )
}
export default Resume;