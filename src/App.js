// import Footer from './components/Footer';
// import Header from './components/Header';
import Login from './components/Login';
// import MainForm from './components/MainForm';
import './index.css';

// cijeli login napraviti u App-u, i onda
// conditionally renderat ostalo
// alternativno passaj setChildData kao prop u child

function App() {
	return (
		<div className='App'>
			<Login />
			{/* <Header />
      <MainForm />
      <Footer /> */}
		</div>
	);
}

export default App;
