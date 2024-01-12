import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from '../Pages/Homepage'

import Popularpage from '../Pages/Popularpage'
import MovieDetails from '../Components/MovieDetails'
import Topratedpage from '../Pages/Topratedpage'
import Favouritepage from '../Pages/Favouritepage'

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          <Route path="/popularpage" element={<Popularpage />} />
          <Route path="/topratedpage" element={<Topratedpage />} />
          <Route path="/favorite" element={<Favouritepage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing