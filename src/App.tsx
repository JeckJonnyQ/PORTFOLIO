import './App.css';
import Header from './Components/Header/Header';
import SectionHome from './Components/SectionHome/SectionHome';
import SectionAbout from './Components/SectionAbout/SectionAbout';
import SectionSkills from './Components/SectionSkills/SectionSkills';
import SectionPortfolio from './Components/SectionPortfolio/SectionPortfolio';
import Footer from './Components/Footer/Footer';

import { HeaderLinks } from './helpers/staticDataHeader';

function App() {
  return (
    <>
      <Header links={HeaderLinks} />
      <SectionHome />
      <SectionAbout />
      <SectionSkills />
      <SectionPortfolio />
      <Footer />
    </>
  );
}

export default App;
