import React from 'react';
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        {/* First Column Heading and Paragraph */}
        <div data-aos="zoom-in-down" className='skills-left'>
            <h2 className='skills-heading' >Technologies I work with</h2>
            <p className='skills-text'>
I am a chemistry student with a basic understanding of web development,Typescript and C++, focusing on HTML, CSS, and JavaScript. I'm learning frameworks like React and Tailwind CSS to build simple, visually appealing interfaces. In addition to my technical interests, I have a strong foundation in chemistry, with skills in laboratory techniques, analytical methods, and chemical safety protocols. I am eager to expand my knowledge in both fields to apply my skills effectively in academic and technical projects.
            </p>
        </div>
        
           {/* Second Column:Skills*/}
           <div className='skills-right'>
            <div className='skills-icon-grid'>
                <div className='skills-space'>
                 
                <h2 data-aos="zoom-in-down">C++</h2>
                <h2 data-aos="zoom-in-down">Typescript</h2>
                <h2 data-aos="zoom-in-down">Analytical Method</h2>
            </div>

            <div className='skills-space'>
                <h2 data-aos="zoom-in-down">Research Work</h2>
                <h2 data-aos="zoom-in-down">Titration</h2>
                <h2 data-aos="zoom-in-down">Node.js</h2>
            </div>
            </div>
        </div>
 </div>
</div>
 );
};

export default Skills;
