import Slider from "react-slick";
import eventsAll from "../utils/events.json";
import "../assets/carousel-custom.css";
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import { useState } from "react";

export const Events = () => {
  const [events, setEvents] = useState(eventsAll);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const searchByDate = () => {
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    setEvents(
      eventsAll.filter((event) => {
        const eventDate = new Date(event.date);
        const afterStart = start ? eventDate >= start : true;
        const beforeEnd = end ? eventDate <= end : true;
        return afterStart && beforeEnd;
      })
    );
  };
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
      <div className="w-full p-8">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow mb-8">
          All Events
        </h1>

        <div className="w-full max-w-2xl mx-auto flex flex-col md:flex-row mb-8 md:justify-between gap-4">
          <div className="overflow-x-auto flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                id="datepicker-range-start"
                name="start"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-gray-50 border text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-primary focus:ring-blue-500 focus:border-blue-500"
                placeholder="Select date start"
              />
            </div>
            <span className="mx-4 text-gray-500">to</span>
            <div className="relative me-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                id="datepicker-range-end"
                name="end"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-gray-50 border text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-primary focus:ring-blue-500 focus:border-blue-500"
                placeholder="Select date end"
              />
            </div>
          </div>
          <div>
            <Button
              py={3}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              }
              onClick={searchByDate}
            >
              Search
            </Button>
          </div>
        </div>

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
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((e, i) => (
                <div
                  className="w-full bg-primary text-neutral p-4 lg:p-8 relative"
                  key={i}
                >
                  <div
                    className="absolute top-2 left-2 border-2 border-accent text-accent rounded-full p-1 px-3"
                    hidden={new Date(e.date) < new Date()}
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
                This section is under construction.
              </h1>
            </div>
          )}
        </Slider>
      </div>
    </>
  );
};
