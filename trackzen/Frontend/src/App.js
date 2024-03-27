import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Help from "./pages/Help";
import Dashbord from "./pages/Dashbord";
import Footer from "./pages/Footer";
import Feedback from "./pages/Feedback";
import Signup from "./pages/Signup";
import Anaylatics from "./pages/Anaylatics";


function App() {
  return (


    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path = '/help' element = {<Help/>}/>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/dash' element = {<Dashbord/>}/>
      <Route path= '/signup' element={<Signup/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/any' element={<Anaylatics/>}/>

    </Routes>
<Footer/>
  </BrowserRouter>

  //  <>
 
  //   <Home />
   
   
  //  </>
  );
}

export default App;
