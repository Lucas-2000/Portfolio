import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Home } from '../components/Home';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';

const routes = () => {
    return (
        <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default routes