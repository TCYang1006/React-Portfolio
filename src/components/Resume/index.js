import React from 'react';
import myResume from '../../assets/TCYang.pdf';

function Resume() {
    return (
        <section className="container">
            <h1 className="row mobile">Tongchee Y. Yang's Resume</h1>
            <div className="row">
                <a href={myResume} download>
                    <h4>Download Resume</h4>
                </a>
            </div>
            <div>
                <div className="row">
                <h2>Skills</h2>
                </div>
                <div className="row">
                <div className="col-md-8 col-sm-8">
                <p>HTML and CSS</p>
                <p>JavaScript</p> 
                <p>Node.js</p> 
                <p>Express.js</p> 
                </div>
                <div className="col-md-8 col-sm-8">
                <p>SQL</p> 
                <p>MongoDB</p> 
                <p>React</p>
                <p>MERN</p>
                </div>
                </div>
            </div>
            <div>
                <h2>Work History</h2>
                <h5>NTN Driveshaft Anderson, Indiana 2018~Present</h5>
                <p>I'm currently a Process/Induction Hardening Engineer with NTN Driveshft at the Anderson, Indiana Plant.  I lead a team of 5 to install and start up the turning and heat-treat department.  The installation required working with outside contractors (machine riggers, electricians and pipefitters) to install 2 induction hardening machines, 2 tempering ovens, 8 overhead transfering systems, 7 lathes, 2 mills, 2 rolling centers, 2 Fanuc robot-arms and 5 multi-inpsection units.  Currently, all of the machines are up and running.  I'm continuously improving on the induction hardening process by creating training operators with SOP (Standard Operating Procedures), implementing preventative maintenance checks, ordering spare parts, improving overall efficiency to meet 500 pcs per shift (improving material handling speed and accuracy and reducing quenching cycle time but still maintaining microstructure quality) and maintaining traceability all every part through the induction hardening process.</p>
            </div>
            <br></br>
            <div>
                <h2 className="headerResume">Education</h2>
                <h5>Butler University - Coding Bootcamp</h5>
                <h5>IUPUI - Bachelor of Science in Mechanical Engineering</h5>
                <h5>Greenfield Central High School</h5>
            </div>
        </section>
    )
}
export default Resume;