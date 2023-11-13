import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";

import { addMovieData } from "../Redux/movieSlice";
import NewContainer from "./NewContainer";

const Master = () => {
  return (
    <div className="bg-slate-950">
      <div>
        <Navbar />
      </div>
      <div>
        <Container />
        {/* <NewContainer /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Master;
