import './App.css';
import Header from '../src/Components/Header/Header';
import Footer from '../src/Components/Footer/Footer';
import Cover from '../src/Components/Cover/Cover';
import SearchBox from '../src/Components/SearchBox/SearchBox';
import Modal from '../src/Components/Modal/Modal'
import flowers from '../src/Components/Flowers';
function App() {
  return (
    <><Header/>
    <Cover/>
    <SearchBox details={flowers}/>
    <Modal/>
    <Footer/></>
  );
}
export default App;

