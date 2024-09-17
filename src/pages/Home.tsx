import { useEffect } from "react";
import discographySlider from "../utils/discographySlider";
import discographyLists from "../utils/discographyLists.json";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import eventsList from "../utils/events.json";
import "../assets/carousel-custom.css";

export default function Home() {
  const events = eventsList.filter(
    (e) => new Date(Date.parse(e.date)) >= new Date()
  );
  useEffect(() => {
    discographySlider();
  }, []);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>

      <div className="w-full max-w-7xl mx-auto">
        <div className="md:h-[80vh] flex items-center justify-center relative">
          <div className="absolute top-20 left-20 animate-pulse hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
              />
            </svg>
          </div>

          <div className="py-[8rem] md:py-0 relative flex flex-col justify-center text-center w-full h-full bg-neutral/50">
            <div>
              <div className="relative z-10 flex flex-col items-center px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dmserif font-bold max-w-3xl drop-shadow">
                  We are the Bearers and Heralds of Tradition!
                </h1>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl mt-4 md:mt-8 opacity-75 max-w-xl">
                  Discover a journey through the profound rhythms and melodies
                  of Qawwali and Najrul Geeti.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 w-full">
          <div className="w-full h-full flex justify-between items-center">
            <div className="px-4 py-12 sm:px-12 lg:px-12 lg:py-24">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow">
                Who are we?
              </h1>
              <p className="text-sm sm:text-md md:text-lg mt-4 md:mt-8 opacity-75 max-w-xl">
                We are a group of musicians who are dedicated to preserving and
                promoting the rich musical heritage of Qawwali and Najrul Geeti.
              </p>
              <Link to="/about-us">
                <button className="mt-8 bg-accent text-primary py-2 px-4 md:py-3 md:px-5 hover:bg-accent/80 transition-all duration-100">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="/images/53342195.jpg"
                alt="Qawwali"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] lg:max-w-xl object-cover"
              />
            </div>
          </div>
          <div className="mt-8 w-full h-full flex justify-between items-center">
            <div className="hidden md:block">
              <img
                src="/images/455886477.jpg"
                alt="Qawwali"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] lg:max-w-xl object-cover"
              />
            </div>
            <div className="px-4 py-12 sm:px-12 lg:px-12 lg:py-24">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow">
                Our Showcase
              </h1>
              <p className="text-sm sm:text-md md:text-lg mt-4 md:mt-8 opacity-75 max-w-xl">
                We have performed at various events and have received immense
                love and appreciation from our audience.
              </p>
              <Link to="/showcase">
                <button className="mt-8 bg-accent text-primary py-2 px-4 md:py-3 md:px-5 hover:bg-accent/80 transition-all duration-100">
                  See Showcase
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-8">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow mt-12 md:mt-[100px] mb-8">
            Discography
          </h1>
          <div className="relative my-8 w-full rounded-[1.375rem] lg:rounded-[2.375rem] bg-cover bg-[url('/images/4557126.jpg')] bg-center">
            <div
              className="w-full h-full bg-neutral/30 p-4 lg:p-8"
              id="discography-main"
            >
              <div
                className="flex gap-5 overflow-x-auto"
                id="discography-slider"
              >
                {discographyLists
                  .filter((d) => new Date(d.date) <= new Date())
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .map((d, i) => (
                    <div
                      className="min-w-[350px] max-w-[350px] bg-primary text-neutral rounded-md cursor-pointer active:scale-95"
                      key={i}
                    >
                      <iframe
                        src={d.video}
                        className="w-full h-[350px]"
                      ></iframe>
                      <div className="p-4">
                        <h1 className="text-md leading-tight line-clamp-2 font-semibold text-gray-800">
                          {d.title}
                        </h1>
                        <p className="text-sm text-gray-600 pt-1">
                          {d.date} | {d.places}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div>
                <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary/50 text-neutral rounded-full p-2 hover:bg-primary/80 transition-all duration-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </button>
                <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary/50 text-neutral rounded-full p-2 hover:bg-primary/80 transition-all duration-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="my-8 w-full p-8 lg:py-12">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow mb-8">
              Upcoming Events
            </h1>
            <Slider
              dots={true}
              infinite={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              className="max-w-2xl mx-auto p-4 !h-fit"
            >
              {events.length > 0 ? (
                events.map((e, i) => (
                  <div
                    className="w-full bg-primary text-neutral p-4 lg:p-8 relative"
                    key={i}
                  >
                    <div
                      className="absolute top-2 left-2 border-2 border-accent text-accent rounded-full p-1 px-3"
                      hidden={new Date(Date.parse(e.date)) < new Date()}
                    >
                      <p className="text-sm md:text-md flex gap-2 items-center justify-center font-bold">
                        <svg
                          id="dot"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-1.5 h-1.5 animate-ping"
                        >
                          <circle cx="10" cy="10" r="10" />
                        </svg>
                        Upcoming
                      </p>
                    </div>
                    <img
                      src={"/images/" + e.poster}
                      alt="Event Poster"
                      className="w-full h-[400px] object-contain"
                    />
                  </div>
                ))
              ) : (
                <div className="w-full bg-primary text-neutral rounded-md p-4 lg:p-8">
                  <h1 className="text-md sm:text-xl md:text-2xl font-medium">
                    No Upcoming Events
                  </h1>
                </div>
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
