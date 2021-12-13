import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Home } from '../components/Home';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';

export default function routes() {
    return (
        <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/services" element={<Services />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
    )
}