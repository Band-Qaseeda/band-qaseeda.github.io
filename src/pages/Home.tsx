import { useEffect, useState } from "react";
import discographySlider from "../utils/discographySlider";
import discographyLists from "../utils/discography.json";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import "../assets/carousel-custom.css";
import Button from "../components/Button";

interface Events {
  date: string;
  time: string;
  poster: string;
}

export default function Home() {
  const [events, setEvents] = useState<Events[]>([]);
  const SPREADSHEET_ID = "1WzQICXQ0tshJ2axEqH2kLFSjHzlBv1UFOdRhmVYCdIY";
  const API_KEY = "AIzaSyBppRNRXIBmg_RFrIQl4Gpb_YlFsWUJK_c";
  const RANGE = "Sheet1!A1:C10";

  useEffect(() => {
    discographySlider();
    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
      )
      .then((response) => {
        let obj = response.data.values.slice(1);
        obj = obj
          .map((a: ["date", "time", "poster"]) => {
            return {
              date: a[0],
              time: a[1],
              poster: a[2],
            };
          })
          .filter((e: Events) => new Date(Date.parse(e.date)) >= new Date());
        setEvents(obj);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Qaseeda Band</title>
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

      <div className="w-full bg-[url('/images/bg.jpg')] bg-center bg-contain">
        <div className="w-full bg-gradient-to-b lg:bg-gradient-to-t from-neutral to-neutral/40 lg:via-neutral/40 lg:to-neutral">
          <div className="w-full max-w-7xl mx-auto p-4 relative">
            <div className="absolute top-20 left-20 animate-pulse hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-14 opacity-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                />
              </svg>
            </div>
            <div className="absolute bottom-[160px] right-20 animate-pulse hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-14 opacity-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </div>
            <div className="h-fit md:min-h-[50vh] lg:min-h-[80vh] flex items-center justify-center">
              <div className="py-[3rem] lg:py-0 relative flex flex-col justify-center text-center w-full h-full">
                <div>
                  <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold max-w-3xl drop-shadow">
                      We are the Artisans and Voices of Tradition!
                    </h1>
                    <p className="text-sm sm:text-md md:text-lg lg:text-xl mt-4 md:mt-8 text-gray-300 max-w-3xl">
                      Where tradition meets youthful spirit. We fuse
                      Bangladesh's nearly lost cultural heritage with modern
                      music, preserving its essence while crafting something
                      soulful and groundbreaking.
                    </p>
                    <Link to="/about-us">
                      <Button
                        className="mt-8"
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                            />
                          </svg>
                        }
                      >
                        Discover More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-grayish py-4">
        <div className="my-8 w-full max-w-7xl mx-auto p-8">
          <div className="w-full h-full flex justify-between items-center gap-4 md:gap-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold drop-shadow">
                Who are we?
              </h1>
              <p className="text-sm sm:text-md md:text-lg mt-4 md:mt-8 text-gray-300 max-w-xl">
                We are a group of musicians who are dedicated to preserving and
                promoting the rich musical heritage of traditional cultures.
              </p>
              <Link to="/about-team">
                <Button className="mt-8">Meet Our Team</Button>
              </Link>
            </div>
            <img
              src="/images/bg.jpg"
              alt="Qawwali"
              className="hidden md:block w-full h-[300px] md:h-[400px] lg:h-[500px] lg:max-w-xl object-cover rounded-lg bg-accent"
            />
          </div>
          <div className="mt-20 md:mt-12 w-full h-full flex justify-between items-center gap-4 md:gap-8">
            <img
              src="/images/bg.jpg"
              alt="Qawwali"
              className="hidden md:block w-full h-[300px] md:h-[400px] lg:h-[500px] lg:max-w-xl object-cover rounded-lg bg-accent"
            />
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold drop-shadow">
                Our Performances
              </h1>
              <p className="text-sm sm:text-md md:text-lg mt-4 md:mt-8 text-gray-300 max-w-xl">
                We have performed at various events and have received immense
                love and appreciation from our audience.
              </p>
              <Link to="/showcase">
                <Button className="mt-8">Discover Our Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto p-8 pt-0">
        <div className="mt-16 md:mt-0">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl  font-bold drop-shadow mt-12 md:mt-[100px] mb-8">
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
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold drop-shadow mb-8">
              Upcoming Events
            </h1>
            <Slider
              infinite={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              className="max-w-2xl mx-auto !h-fit"
            >
              {events.length > 0 ? (
                events
                  .sort(
                    (a, b) =>
                      new Date(b.date + " " + b.time).getTime() -
                      new Date(a.date + " " + a.time).getTime()
                  )
                  .map((e, i) => (
                    <div className="w-full p-4 lg:p-8 relative" key={i}>
                      <div
                        className="absolute top-2 left-2 border-2 border-accent text-accent rounded-full p-1 px-3"
                        hidden={new Date(e.date + " " + e.time) < new Date()}
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
                        src={e.poster}
                        alt="Event Poster"
                        className="w-full h-[400px] object-contain"
                      />
                    </div>
                  ))
              ) : (
                <div className="w-full bg-primary text-neutral rounded-md p-4 lg:p-8">
                  <h1 className="text-sm sm:text-xl font-medium">
                    No upcoming event found!
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
