import './App.css';
import Header from './Components/Header/Header';
import SectionH from './Components/SectionH/SectionH';
import SectionA from './Components/SectionA/SectionA';
import SectionB from './Components/SectionB/SectionB';
import SectionC from './Components/SectionC/SectionC';

import { HeaderLinks } from './helpers/staticHeaderLinks';

function App() {
  return (
    <>
      <Header links={HeaderLinks} />
      <SectionH />
      <SectionA />
      <SectionB />
      <SectionC />
    </>
  );
}

export default App;
