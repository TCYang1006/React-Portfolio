import React from 'react';
import githubLinkLogo from '../../assets/Octocat-GITHUB.jpg';
import githubDeployLogo from '../../assets/GitHub-Mark-DEPLOY.png'

const Modal = ({ onClose, currentProject }) => {
    const { name, description, project_number } = currentProject;
    const github = currentProject.github;
    const deployed = currentProject.deployed;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img
                src={require(`../../assets/Challenge${project_number}.png`)}
                alt="current Project"
                />
                <p>{description}</p>
                <br></br>
                    <h6>Click on the github octopus logo to the URL link</h6>
                        <a href={github} target="_blank">
                            <img src={githubLinkLogo} alt="github link" className="logo2"></img>
                        </a>
                <br></br>
                    <h6>Click on the github mark to the deployed link</h6>
                        <a href={deployed} target="_blank">
                            <img src={githubDeployLogo} alt="github deploy" className="logo2"></img>
                        </a>
                <div className="row">
                    <button type="button" onClick={onClose}>
                        Close this modal
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;