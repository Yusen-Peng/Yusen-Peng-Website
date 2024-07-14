import React from 'react'
import '../App.css';

const OSU = () =>{
    return (
        <>
            <header className='Research-heading'>Education</header>

                <div className='Heading-container-2'>
                    <div className='Location'>Columbus, Ohio</div>
                    <div className='Job-title'>The Ohio State university (GPA: 4.00/4.00)</div>
                    <div className='Advisor'>Honors B.S. Computer Science and Engineering, Expected May 2026</div>
                </div> 
            
            <header className='Research-heading'>Campus Employment</header>
            
            <div className='Research-container'>
                <div className='Location'>The Ohio State University, Columbus, Ohio</div>
                <div className='Job-title'>Teaching Assistant (Java), from August 2023 to December 2023</div>    
                <ul className='Description-list'>
                    <li>Graded homework and projects for CSE 2221: Software Components for a class of 40 students</li>
                    <li>Helped students master data structures in Java, JUnit framework, and HTML in lab sessions and office hours</li>
                </ul> 
            </div>
            
            <div className='Research-container'>
                <div className='Location'>The Ohio State University, Columbus, Ohio</div>
                <div className='Job-title'>Lab Assistant (Power Apps), from May 2023 to August 2023</div>    
                <ul className='Description-list'>
                    <li>Collaborated in designing and developing a mobile application that helps students self-purchase machine parts</li>
                    <li>Coded in Power Fx; implemented the automation between user interface and SharePoint using Power Automate</li>
                </ul> 
            </div>
            

            <header className='Research-heading'>Student Organizations</header>
            <div className='Research-container'>
                <div className='Location'>Competitive Programming Club @ The Ohio State University, Columbus, Ohio</div>
                <div className='Job-title'>Communications Director, from February 2024 to Present</div>    
                <ul className='Description-list'>
                <li>Write and send emails and Discord announcement for each week's club meeting</li>
                <li>Assist in coding problem creation and weekly meeting presentation</li>
                </ul> 
                
                <div className='Location'>Competitive Programming Club @ The Ohio State University, Columbus, Ohio</div>
                <div className='Job-title'>Problem Engineer, from February 2023 to February 2024</div>    
                <ul className='Description-list'>
                    <li>Developed, tested, and reviewed coding problems in Java and Python for on-campus programming competitions</li>
                    <li>Applied various data structures and algorithms: hash table, graph, greedy, sorting, searching</li>
                </ul>
            </div>
           

            
            <div className='Research-container'>
                <div className='Location'>CSE/CIS Peer Mentors @ The Ohio State University, Columbus, Ohio</div>
                <div className='Job-title'>Peer Mentor, from August 2023 to November 2023</div>    
                <ul className='Description-list'>
                <li>Offered personal experiences and constructive advice to first-year computer science major students </li>
                <li>Attended Engr 1100.15 weekly class to address students' concerns about computer science major</li>
                </ul>
            </div>
        </>
    )
}

export default OSU;