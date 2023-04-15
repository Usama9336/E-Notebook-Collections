import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
//import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <NoteState>
    <Navbar/>
      <Home/>
   </NoteState>
   </>
  );
}
/*<Routes>
   <Route exact path='/' element={<Home/>}/>
   <Route exact path='/About' element={<Home/>}/>
   <Route exact path='/' element={<Home/>}/>
   <Route exact path='/' element={<Home/>}/>
  </Routes>*/
export default App;
