import './App.css';
import Header from './Components/Header/Header';
import SectionHome from './Components/SectionHome/SectionHome';
import SectionA from './Components/SectionA/SectionA';
import SectionB from './Components/SectionB/SectionB';
import SectionC from './Components/SectionC/SectionC';

import { HeaderLinks } from './helpers/staticHeaderLinks';

function App() {
  return (
    <>
      <Header links={HeaderLinks} />
      <SectionHome />
      <SectionA />
      <SectionB />
      <SectionC />
    </>
  );
}

export default App;
