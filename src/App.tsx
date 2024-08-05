import './App.css';
import Header from './Components/Header/Header';
import SectionHome from './Components/SectionHome/SectionHome';
import SectionAbout from './Components/SectionAbout/SectionAbout';
import SectionSkills from './Components/SectionSkills/SectionSkills';
import SectionB from './Components/SectionB/SectionB';
import SectionC from './Components/SectionC/SectionC';

import { HeaderLinks } from './helpers/staticDataHeader';

function App() {
  return (
    <>
      <Header links={HeaderLinks} />
      <SectionHome />
      <SectionAbout />
      <SectionSkills />
      <SectionB />
      <SectionC />
    </>
  );
}

export default App;
