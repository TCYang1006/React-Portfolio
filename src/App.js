import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
    const [currentTitle, setCurrentTitle] = useState("about");

    const renderTitle = () => {
        switch (currentTitle) {
            case "about": return <About />;
            case "portfolio": return <Portfolio />;
            case "contact": return <ContactForm />;
            case "resume": return <Resume />;
            default: return null;
        }
    };
    return(
        <div>
            <Header className="mobile-header" currentTitle={currentTitle} setCurrentTitle={setCurrentTitle}>
            </Header>
            <main>
                {renderTitle()}
            </main>
            <Footer></Footer>
        </div>
    )
}
  
export default App;