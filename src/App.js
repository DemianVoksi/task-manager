import Footer from './components/Footer';
import HeaderModal from './components/HeaderModal';
import Tasks from './components/Tasks';
import './index.css';

function App() {
  return (
    <div className="App">
      <HeaderModal />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
