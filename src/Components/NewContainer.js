import React, { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { addMovieData, addPeopleData } from "../Redux/movieSlice";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const NewContainer = () => {
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState("false");
  const [showsCategory, setshowsCategory] = useState("shows");

  const dispatch = useDispatch();
  const selectedData = useSelector((state) => {
    return state.myStore.data;
  });

  console.log(input);
  const fetchData = async (category) => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/${category}?q=${input}`
        // `https://api.tvmaze.com/search/shows?q=${input}`
      );

      if (category === "shows") {
        dispatch(addMovieData(response.data));
      } else if (category === "people") {
        dispatch(addPeopleData(response.data));
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData(showsCategory);
  }, [input, showsCategory]);

  //   useEffect(
  //     (category) => {
  //       axios
  //         .get(`https://api.tvmaze.com/search/${category}q=${input}`)
  //         .then((response) => {
  //           dispatch(addMovieData(response.data));
  //           console.log(response.data);
  //         });
  //     },
  //     [input]
  //   );

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const handleRadioCheck = () => {
    setChecked(checked);
  };

  const handleCategoryChange = (category) => {
    setshowsCategory(category);
    fetchData(category);
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
    <div>
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
          <div className="bg-white px-2 py-2 cursor-pointer rounded-lg">
            <input
              type="radio"
              id="Choice1"
              name="contact"
              value={handleRadioCheck}
              checked={showsCategory === "people"}
              onClick={() => handleCategoryChange("people")}
            />
            <label htmlFor="Choice1">Actors</label>
            <input
              type="radio"
              id="Choice2"
              name="contact"
              value={handleRadioCheck}
              checked={showsCategory === "shows"}
              onClick={() => handleCategoryChange("shows")}
            />
            <label htmlFor="Choice2">shows</label>
          </div>
          <div
            className="flex justify-center items-center h-24"
            onChange={(e) => handleSearch(e)}
          >
            <input
              className="w-1/2 h-12 rounded-xl font-sans px-2 outline-none"
              type="text"
              placeholder="search movies"
              value={input}
            />
          </div>
          <div className="h-full m-20 grid grid-cols-3">
            {selectedData?.map((it, dx) => {
              const imageUrl =
                showsCategory === "people"
                  ? it.person?.image?.original
                  : it.show?.image?.original;
              return (
                <div key={dx}>
                  <figure className="relative h-96 w-full">
                    <img
                      className="h-full w-full rounded-xl object-cover object-center"
                      src={
                        imageUrl ||
                        "https://static.tvmaze.com/uploads/images/original_untouched/73/184595.jpg"
                      }
                      alt="card"
                    />
                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                      <div>
                        <Typography variant="h5" color="blue-gray">
                          {showsCategory === "people"
                            ? it.person?.name
                            : it.show?.language}
                        </Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                          {showsCategory === "people"
                            ? it.person?.Birthday
                            : it.show?.premiered}
                        </Typography>
                      </div>
                      <Typography variant="h5" color="blue-gray">
                        {showsCategory === "people "
                          ? it.shows?.premiered
                          : it.shows?.premiered}
                        {}
                      </Typography>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContainer;
