import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Vehicles from './pages/Vehicles';
import About from './pages/About';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

function App() {

  // const firebaseConfig = {
  //   apiKey: "AIzaSyCf6rgSbk3y0JZ2oYxdbqWEl_aqjF_G_kg",
  //   authDomain: "rentalsite-af5c1.firebaseapp.com",
  //   projectId: "rentalsite-af5c1",
  //   storageBucket: "rentalsite-af5c1.appspot.com",
  //   messagingSenderId: "893565189977",
  //   appId: "1:893565189977:web:854abcc8e16d33fd1c9648",
  //   measurementId: "G-5FMQ5406BQ"
  // };

  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
