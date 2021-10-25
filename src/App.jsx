import './App.css';
import AboutMe from './components/about_me/AboutMe';
import Contacts from './components/contacts/Contacts';
import Projects from './components/projects/Projects'
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';

const App = () => {
    return (
        <>
            <NavBar />
            <Home />
            <AboutMe />
            <Projects />
            <Contacts />
        </>
    )
}

export default App;
