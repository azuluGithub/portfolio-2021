import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='about-me' id='about-me'>
            <div className="about-me-heading">
                <span className="about-me-heading-left"></span>
                <span className="about-me-heading-right"></span>
            </div>
            <div className="about-me-wrapper">
                <div className="about-me-left">
                    <div className="about-me-card-wrapper">
                        <img 
                            alt='img'
                            className='about-me-img' 
                            src='/assets/images/person/about_image.png'
                        />
                        <div className="about-me-card-top">
                            <div className="about-me-card-inner-top"></div>
                        </div>
                        <div className="about-me-card-bottom">
                            <div className="about-me-card-inner-bottom"></div>
                        </div>
                    </div> 
                </div>
                <div className="about-me-right">
                    <h3 className="about-me-right-header">A few things about me...</h3>
                    <p className="about-me-right-text">
                        I am a Full Stack JavaScript Developer and a WeThinkCode_ graduate.
                        <br/>
                        <br/>
                        I have coded in Java, PHP, C and JavaScript.
                        I have used database management systems such as MySQL, PostgreSQL, Firebase and MongoDB.
                        I have also used tools and platforms such as Git, GitHub, AWS and Docker.
                        <br/>
                        <br/>
                        I have build a social app, ecommerce site, dating app amongst others and 
                        I have written some unit tests using Jest in JavaScript functions, React Components and Express server.
                    </p>
                    <h3 className="about-me-right-header">What Motivates me...</h3>
                    <p className="about-me-right-text">
                        I am a self-taught developer who learnt through peers, research, building projects and problem solving. 
                        Coding taught me how to thinking outside the box. 
                        As long as I haven't mastered Algorithms, Machine Learning and Artificial Intelligence 
                        I will not retire from this field.
                    </p>
                    <h3 className="about-me-right-header">My ideal role...</h3>
                    <p className="about-me-right-text">
                        My wish is to work in any of the following roles: Front End Developer, Back End Developer, JavaScript Developer, 
                        React Developer, Full Stack Developer and Software Developer. Over the years I fell in love with the entire 
                        development process and I'm willing to improve my skills in any of the departments mentioned above.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
