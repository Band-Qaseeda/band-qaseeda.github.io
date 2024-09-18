import { useEffect } from "react";
import discographySlider from "../utils/discographySlider";
import discographyLists from "../utils/discographyLists.json";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import eventsList from "../utils/events.json";
import "../assets/carousel-custom.css";
import Button from "../components/Button";

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

      <div className="w-full max-w-7xl mx-auto p-8">
        <div className="h-fit md:h-[80vh] flex items-center justify-center relative">
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

          <div className="py-[2.5rem] md:py-0 relative flex flex-col justify-center text-center w-full h-full bg-neutral/50">
            <div>
              <div className="relative z-10 flex flex-col items-center px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dmserif font-bold max-w-3xl drop-shadow">
                  We are the Bearers and Heralds of Tradition!
                </h1>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl mt-4 md:mt-8 opacity-75 max-w-xl">
                  Discover a journey through the profound rhythms and melodies
                  of Qawwali and Najrul Geeti.
                </p>
                <Link to="/about-us">
                  <Button
                    className="mt-8"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                        />
                      </svg>
                    }
                  >
                    Discover Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary/5 py-4">
        <div className="my-8 w-full max-w-7xl mx-auto p-8">
          <div className="w-full h-full flex justify-between items-center gap-4 md:gap-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow">
                Who are we?
              </h1>
              <p className="text-sm sm:text-md md:text-lg mt-4 md:mt-8 opacity-75 max-w-xl">
                We are a group of musicians who are dedicated to preserving and
                promoting the rich musical heritage of Qawwali and Najrul Geeti.
              </p>
              <Link to="/about-team">
                <Button
                  className="mt-8"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  }
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="/images/53342195.jpg"
                alt="Qawwali"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] lg:max-w-xl object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="mt-20 md:mt-12 w-full h-full flex justify-between items-center gap-4 md:gap-8">
            <div className="hidden md:block">
              <img
                src="/images/455886477.jpg"
                alt="Qawwali"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] lg:max-w-xl object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow">
                Our Performances
              </h1>
              <p className="text-sm sm:text-md md:text-lg mt-4 md:mt-8 opacity-75 max-w-xl">
                We have performed at various events and have received immense
                love and appreciation from our audience.
              </p>
              <Link to="/showcase">
                <Button
                  className="mt-8"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                  }
                >
                  Discover Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto p-8 pt-0">
        <div className="mt-16 md:mt-0">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-dmserif font-bold drop-shadow mt-12 md:mt-[100px] mb-8">
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

          <div className="my-8 w-full py-8 lg:py-12">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow mb-8">
              Upcoming Events
            </h1>
            <Slider
              dots={true}
              infinite={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              className="max-w-2xl mx-auto !h-fit"
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
                <div className="w-full bg-primary text-neutral rounded-md p-4 md:p-8">
                  <h1 className="text-md sm:text-xl font-medium">
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
