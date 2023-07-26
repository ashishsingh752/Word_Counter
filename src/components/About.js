import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({

    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(176, 179, 188)' : 'white'
    }

    return (
        <>
            <div className="container " style={myStyle}>
                <h1 style={{ textAlign: 'center', paddingTop: '5px' }}>About Me</h1>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header"  id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Education
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <p> <strong>B.Tech:  </strong> <br />National Institute of Technology Rourkela <br /> 7.69 (till 4th sem) </p>
                                <p> <strong>Intermediate:</strong> <br />Jawahar Navodaya Vidyalaya Manikpur Chitrakoot <br />91.2%</p>
                                <p> <strong>High school: </strong> <br /> Jawahar Navodaya Vidyalaya Manikpur Chitrakoot <br />10 CGPA </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Skills
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <p> <strong>Sufficient Understanding</strong> <br />C/C++ <br />HTML <br />CSS <br />Javascript<br />Python tkinter </p>
                                <p> <strong>Intermediate: </strong> <br />React.js  <br />Bootstrap</p>
                                <p> <strong>Familiar with: </strong><br />Multisim <br /> Matlab <br />LabView <br />Adobe Illustrator</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Work/Project
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <p> <strong>Protfolio</strong>  <br /><span style={{ color: props.mode === 'dark' ? 'white' : 'blue' }}>Using HTML, CSS, Javascript </span> <br />
                                    I made my personal portfolio website using the HTML,CSS and
                                    Javascript to showcase my Skills, Experience and Education.
                                    This is a responsive website to insure optimal viewing across various devices. Added contact form for the easy communication and experience. </p>
                                <p> <strong>Word Counter:</strong><br /><span style={{ color: props.mode === 'dark' ? 'white' : 'blue' }}>Using  React.js </span> <br />This website is made using the React(Javascript Library). I made this website during my learning phase of the React.
                                    This is a responsive website.Here we can analayse the Text by user, change its case and we can get the time to read the whole text entered also  we can remove the extra spaces present in the text.</p>
                                <p> <strong>Phase Transformation In Transformer</strong><br /><span style={{ color: props.mode === 'dark' ? 'white' : 'blue' }}>Using  Python tkinter</span> <br />It is a python GUI.This project is for the phase conversion of the transformer from the three phase to multi phase i.e.
                                    2,5,6,7. By phase conversion we can use it for multi purpose.
                                    As two phase transformer is use in electric arc and electric furnaces and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
