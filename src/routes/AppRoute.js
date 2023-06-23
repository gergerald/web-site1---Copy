import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../components/pages/Home';


export default function AppRoute() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>

    </Routes>
    
    
    </BrowserRouter>

    </>
  )
}
