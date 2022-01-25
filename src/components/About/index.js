import React from 'react';
import mainImage from '../../assets/mainImage.png';

function About() {
    return(
        <section className="my-5">
            <img src={mainImage} className="my-2" style={{width: "100%"}} alt="fiber-optic image" />
            <div className="center">
                <p>
                I'm a Process Engineer with a Bachelor of Science in Mechanical Engineering from IUPUI (Indiana University Purdue University at Indianapolis).  I will be completing the Coding Bootcamp Certification Program from Butler University in Feb, 2022.  I've learned the following skills from the Coding Bootcamp: HTML, CSS, JavaScript, Node, Express, SQL, MongoDB and React.  I've applied what I've learned in serveral real-life projects in the Coding Bootcamp.  I'm driven, motivated and eager to continue growing and learning as a Software Developer.  
                <br></br>
                <br></br>
                I'm excited to make the transition from a process engineer to a software developer.  I look forward to contine refining my skill with the right company.  I'm currently based out of McCordsville, Indiana but I'm willing to relocate.  
                </p>
            </div>
        </section>
    );
}

export default About;