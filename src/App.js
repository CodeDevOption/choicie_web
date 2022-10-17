import './App.css';
import { Navbar } from './components';
import {Footer, Home , About, Content, ChoicieUse, Maps} from  './containers/index';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Content />
      <ChoicieUse />
      <Maps />
      <Footer />
    </>
  )
}

export default App