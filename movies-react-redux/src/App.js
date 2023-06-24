import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import MovieStatsHeader from './components/MovieStatsHeader';
import MovieCards from './components/MovieCards';
import Loading from './components/Loading';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <Modal/>
    <MovieStatsHeader />
    <MovieCards/>
    </>
  );
}

export default App;
