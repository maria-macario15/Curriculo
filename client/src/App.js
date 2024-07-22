import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Port from './views';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Port/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;