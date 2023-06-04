import Home from './pages/page'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NewPage from './pages/new-page';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path='/new-product' element={ <NewPage/>} />
        </Routes>
    </Router>
  );
}

export default App;

