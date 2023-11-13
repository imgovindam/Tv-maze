import React, { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { addMovieData, addPeopleData } from "../Redux/movieSlice";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const Container = () => {
  const [input, setInput] = useState("");
  const [searchCategory, setSearchCategory] = useState("shows");
  // const [data, setData] = useState([]);

  console.log(input);

  const dispatch = useDispatch();

  //for getting data from redux for react
  const selectedData = useSelector((state) => {
    return state.myStore.data;
  });
  //API call FOR SHOWS
  const fetchData = async (category) => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/${category}?q=${input}`
      );
      // setData(response.data);
      if (category === "shows") {
        dispatch(addMovieData(response.data));
      } else if (category === "people") {
        dispatch(addPeopleData(response.data));
      }

      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(searchCategory);
  }, [input, searchCategory]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let response;
  //       if (searchCategory === "shows") {
  //         response = await axios.get(
  //           `https://api.tvmaze.com/search/shows?q=${input}`
  //         );
  //         dispatch(addMovieData(response.data));
  //       } else if (searchCategory === "Actors") {
  //         response = await axios.get(
  //           `https://api.tvmaze.com/search/people?q=${input}`
  //         );
  //         dispatch(addPeopleData(response.data));
  //       }
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [input, searchCategory]);

  //******************* */
  //API call FOR PEOPLE/ACTORS

  // useEffect(() => {
  //   axios
  //     .get(`https://api.tvmaze.com/search/people?q=${input}`)
  //     .then((response) => {
  //       dispatch(addPeopleData(response.data));
  //       console.log(response.data);
  //     });
  // }, [input, searchCategory]);

  //****************************************************************** */

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  // const handleActors = () => {
  //   setSearchCategory("Actors");
  // };

  // const handleMovies = () => {
  //   setSearchCategory("shows");
  // };

  const handleCategoryChange = (category) => {
    setSearchCategory(category);
  };
  const slides = [
    {
      url: "https://image.tmdb.org/t/p/original/aIkG2V4UXrfkxMdJZmq30xO0QQr.jpg",
      text: "hellow world",
    },
    {
      url: "https://image.tmdb.org/t/p/original/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
      text: "hellow people",
    },
    {
      url: "https://image.tmdb.org/t/p/original/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
      text: "hellow world",
    },
    {
      url: "https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/7175EHtzjhL.jpg",
      text: "hellow world",
    },
    {
      url: "https://cdn.wallpapersafari.com/84/47/Vpi8BH.jpg",
      text: "hellow world",
    },
    {
      url: "https://m.media-amazon.com/images/I/7175EHtzjhL.jpg",
      text: "hellow world",
    },
    {
      url: "https://rare-gallery.com/uploads/posts/127385-baahubali-2-the-conclusion-anushka-shetty-devasena-prabhas-4k-8k.jpg",
      text: "hellow world",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const prevSlides = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
    const isFirstText = currentText === 0;
    const newText = isFirstText ? slides.length - 1 : current - 1;
    setCurrentText(newText);
  };

  const nextSlides = () => {
    const isLastSlides = current === slides.length - 1;
    const newIndex = isLastSlides ? 0 : current + 1;
    setCurrent(newIndex);
  };

  return (
    <div className="bg-slate-950 ">
      <div className="max-w-[1400px]  h-[780px] w-full py-16 px-4 m-auto relative ">
        <div
          style={{
            backgroundImage: `url(${slides[current].url})`,
            name: `text(${slides[currentText].text}) `,
          }}
          className="w-full h-full rounded-2xl  bg-cover duration-500"
        ></div>
        {/* <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 "></div> */}
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 "
          onClick={() => prevSlides()}
        >
          <ChevronLeftIcon
            fontSize="large"
            style={{ color: "white", backgroundColor: "black" }}
          />
        </div>
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 "
          onClick={() => nextSlides()}
        >
          <KeyboardArrowRightIcon
            fontSize="large"
            style={{ color: "white", backgroundColor: "black" }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center font-sans text-xl font-normal h-20 text-black">
        <div className="bg-white  text-center font-normal text-red-500 px-2 py-2 cursor-pointer rounded-lg">
          <input
            type="radio"
            id="Choice1"
            name="contact"
            value="Actors"
            checked={searchCategory === "people"}
            onClick={() => handleCategoryChange("people")}
          />
          <label className="text-sm mx-1" htmlFor="Choice1">
            Actors
          </label>

          <input
            type="radio"
            id="Choice2"
            name="contact"
            value="Shows"
            checked={searchCategory === "shows"}
            onClick={() => handleCategoryChange("shows")}
          />
          <label className="text-sm mx-1" htmlFor="Choice2">
            shows
          </label>

          {/* <span className="text-lg">Actors </span>
          <input type="radio" id="Actor" name="category" value={Actors} />

          <span className="text-lg">Movies </span>
          <input type="radio" id="Movie" name="category" value={Movies} /> */}
        </div>
      </div>

      <div
        className="flex justify-center items-center h-24 "
        onChange={(e) => handleSearch(e)}
      >
        <input
          className="w-1/2 h-12 rounded-xl font-sans px-2 outline-none"
          type="text"
          placeholder="search movies"
          value={input}
        />
      </div>
      <div className="bg-gray-950  grid grid-cols-4 p-8">
        {selectedData.map((item, index) => {
          // Display data based on the selected category
          const imageUrl =
            searchCategory === "people"
              ? item.person?.image?.original
              : item.show?.image?.original;

          return (
            <div key={index}>
              <motion.figure
                whileHover={{ scale: 1.04 }}
                className=" bg-white h-80 cursor-pointer   m-auto mt-2 p-2  w-60"
              >
                <img
                  className="h-full m-auto rounded-sm bg-cover bg-no-repeat"
                  src={
                    imageUrl ||
                    "https://static.tvmaze.com/uploads/images/original_untouched/73/184595.jpg"
                  }
                  alt="card"
                />
                <figcaption className="absolute  bottom-2 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-around text-sm  mb-2 m-auto px-1 bg-gray-950 text-white font-sans font-normal rounded-sm border border-white   shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                  <div>
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="font-sans font-light text-sm"
                    >
                      {searchCategory === "people"
                        ? item.person?.name
                        : item.show?.language}
                    </Typography>
                    <Typography color="gray" className="mt-2 font-light">
                      {searchCategory === "people"
                        ? item.person?.birthday
                        : item.show?.premiered}
                    </Typography>
                  </div>
                  <div className="flex flex-col mx-4 items-center justify-center">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="text-sm font-sans font-normal text-white"
                    >
                      {searchCategory === "people" ? "Person" : item.show?.name}
                    </Typography>
                    <Typography variant="h5" color="blue-gray">
                      {searchCategory === "people"
                        ? "N/A"
                        : item.show?.rating?.average < 10
                        ? item.show?.rating?.average
                        : " "}
                    </Typography>
                  </div>
                </figcaption>
              </motion.figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
