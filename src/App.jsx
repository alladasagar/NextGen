import MyNavbar from './components/Navbar'
import Header from './components/Header'
import Aboutus from './components/Aboutus'
import Programs from './components/Programs';
import Contact from './components/Contact';
import Teachers from './components/Teachers';
import './App.css';

function App() {
  return (
    <div>
      <MyNavbar/>
      <Header/>
      <Aboutus/>
      <Programs/>
      <Teachers/>
      <Contact/>
    </div>
  );
}
export default App;
