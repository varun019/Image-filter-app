import './App.css';
import GalleryReact from './components/GalleryReact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (<> <Router>

    <Routes>
      <Route exact path='/' element={< GalleryReact />}></Route>
    </Routes>
  </Router> </>
  );
}

export default App;