//npm packages
import TypeWriterEffect from '../type_writer_effect/TypeWriterEffect';

//local imports
import './Home.css';

const Home = () => {
    
    return (
        <div className='home' id="home">
            <p className="home-background-text">Developer</p>
            <div className="home-content" id="home">
                <div className="home-content-wrapper">
                    <div className="home-content-left">
                        <div className="home-content-container">
                            <span className="home-content-name">Arnold Zulu</span>
                            <span className="home-content-role">
                                <TypeWriterEffect
                                    text={['Web Developer', 'JavaScript Developer',  'React Developer', 'Front End Developer', 'Back End Developer', 'Full Stack Developer', 'Software Developer']}
                                />
                            </span>
                            <span className="home-content-text">
                                I build interactive web applications 
                                with cool user interfaces, 
                                improved security and performance.
                            </span>
                            <a href='#contacts' className="link">
                                <button className="home-content-button">LET'S TALK</button>
                            </a>
                        </div>
                    </div>
                    <div className="home-content-right">
                        <img 
                            alt='img'
                            className='home-img' 
                            src='/assets/images/person/profile_image.png'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
