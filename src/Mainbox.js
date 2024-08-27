import './index.css';

function Mainbox() {
    return (
        <>
            <div className='mainbox'>
                <div className="mycard Education ">
                    <div className='innercard inner-div'>
                        <h1>Education</h1>
                        <ul>
                            <li><h2 className='blue'>MCA (Master of Computer Application) from Lovely Professional University
                                Phagwara-(2022-2024). </h2></li>
                            <li><h2 className='red'>B.A (Bachelor of Art) from Chaudhary Charan University
                                Saharanpur-(2019-2022)</h2></li>
                            <li><h2 className='blue'>Intermediate(12th class) from St Thomas Academy Saharanpur-(2018)</h2>
                            </li>
                            <li><h2 className='red'>High School(10th class) from St Thomas Academy Saharanpur-(2016)</h2>
                            </li>
                        </ul></div>
                    <div className='innercard2 inner-div'>
                        <img className="edu_img" src='/images/School.png'></img>
                    </div>
                </div>


                <div className="mycard skill  ">
                    <div className='innercard2 inner-div'>
                        <img className="edu_img" src='/images/Skill.png'></img>
                    </div>
                    <div className='innercard inner-div'>
                        <h1>Skill</h1>
                        <ul>
                            <li><h2 className='red'> Programming Languages: Python ,C++,C,Java  </h2></li>
                            <li><h2 className='blue'>Website Builder : Shopify ,WordPress ,Wix</h2></li>
                            <li><h2 className='red'>Web Development: HTML , CSS , JavaScript , SQL ,React js </h2>
                            </li>
                            <li><h2 className='blue'>MS Office : Power Bi ,MS Word , MS Excel , MS Powerpoint </h2>
                            </li>
                            <li><h2 className='red'>Design Tools: Figma ,Canva, Photoshop</h2>
                            </li>
                        </ul></div>
                    <div>

                    </div>
                </div>


                <div className="mycard project  ">

                    <div className='innercard inner-div'>
                        <h1>Project</h1>
                        <ul>
                            <li><h2 className='blue'> Playbook - web application for children to enhance creativity and learning. Built with React.js
                                for an engaging user interface  </h2></li>
                            <li><h2 className='red'> Personal Portfolio Website - Personal portfolio web app using MERN to show my skills ,knowledge learning . project
                                will also help Recruiter and HR they can see my work directly from site .</h2></li>
                            <li><h2 className='blue'>Online Food Ordering Portal- "The Himalayan Bites " restaurant app using MERN to simplify the food ordering
                                experience. Users can browse restaurants, view menus, and place orders
                                directly through the app. This project focused on creating a user-friendly interface for efficient restaurant
                                discovery
                            </h2>
                            </li>

                        </ul>
                    </div>
                    <div className='innercard2 inner-div'>
                        <img className="edu_img" src='/images/project.png'></img>
                    </div>

                </div>



                <div className="mycard skill  ">
                    <div className='innercard2 inner-div'>
                    <img className="edu_img" src='/images/certifiy.png'></img>
                    </div>
                    <div className='innercard inner-div'>
                        <h1>Certifications</h1>
                        <ul>
                            <li><h2 className='red'>Fundamental of HTML from Great Learning Aug 26 2024
                            </h2></li>
                            <li><h2 className='blue'>Fundamentals of Python Programmingat from Ybi Foundation in Oct 31 2023.</h2></li>
                            <li><h2 className='red'>Python101 for Data Science by IBM in Oct 06 2023</h2>
                            </li>
                            <li><h2 className='blue'>Prompt Engineering For Every by IBM skill Network Oct 31 2023
                            </h2>
                            </li>
                        </ul></div>
                    <div>

                    </div>
                </div>










            </div>

        </>
    );
}







export default Mainbox;
