import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
// import Nav from './components/Nav';
import './App.css';


function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact-form":
        return <ContactForm />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };
  return (
    <div>
			<div>
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
      <div>
        <Footer></Footer>
      </div>
		</div>
  );
}
//   return (
//     <div>
//       <Header/>
//       <main>
//         <About/>
//         <Portfolio/>
//         <ContactForm/>
//       </main>
//       <Footer/>
//     </div>
//   );
// };


export default App;