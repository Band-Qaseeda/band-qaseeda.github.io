import Slider from "react-slick";
import "../assets/carousel-custom.css";
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ShowEvent from "../components/ShowEvent";

interface Events {
  date: string;
  time: string;
  poster: string;
}

export const Events = () => {
  const [eventsAll, setEventsAll] = useState<Events[]>([]);
  const [events, setEvents] = useState<Events[]>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [showEvent, setShowEvent] = useState<boolean>(false);
  const [dataOfEvent, setDataOfEvent] = useState({});
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const SPREADSHEET_ID = "1WzQICXQ0tshJ2axEqH2kLFSjHzlBv1UFOdRhmVYCdIY";
  const API_KEY = "AIzaSyBppRNRXIBmg_RFrIQl4Gpb_YlFsWUJK_c";
  const RANGE = "Sheet1!A1:C10";

  const searchByDate = () => {
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (eventsAll.length > 0) {
      setEvents(
        eventsAll.filter((event) => {
          const eventDate = new Date(event.date);
          const afterStart = start ? eventDate >= start : true;
          const beforeEnd = end ? eventDate <= end : true;
          return afterStart && beforeEnd;
        })
      );
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
      )
      .then((response) => {
        let obj = response.data.values.slice(1);
        obj = obj.map((a: ["date", "time", "poster"]) => {
          return {
            date: a[0],
            time: a[1],
            poster: a[2],
          };
        });
        setEventsAll(obj);
        setEvents(obj);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <Helmet>
        <title>Events - Qaseeda Band</title>
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
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl  font-bold drop-shadow mb-8">
          All Events
        </h1>

        <div
          className={
            "w-full max-w-2xl mx-auto flex flex-col md:flex-row mb-8 md:justify-between gap-4 " +
            (showSearch ? "flex" : "hidden")
          }
        >
          <div className="overflow-x-auto flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3">
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
              <div className="absolute inset-y-0 start-0 flex items-center ps-3">
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

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-8 md:p-8">
          <div>
            <div className="mb-4 flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                checked={showSearch}
                onChange={(e) => setShowSearch(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded ring-blue-500 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600 cursor-pointer"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none cursor-pointer"
              >
                Search filter
              </label>
            </div>
            <Slider
              infinite={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              className="max-w-lg mx-auto !h-fit"
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
                <div className="w-full bg-primary text-neutral rounded-md p-4 lg:p-8 mt-4 lg:mt-8">
                  <h1 className="text-sm sm:text-xl font-medium">
                    No event found!
                  </h1>
                </div>
              )}
            </Slider>
          </div>

          <div className="w-full max-w-2xl mx-auto">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              viewClassNames="w-fit"
              dayCellClassNames="cursor-pointer"
              eventContent={
                <div className="fc-daygrid-event-dot !border-accent !border-[6px] !rounded-full ml-3"></div>
              }
              events={eventsAll.map((e) => {
                return {
                  date: new Date(e.date + " " + e.time).toISOString(),
                  extendedProps: { poster: e.poster },
                };
              })}
              eventClick={(a) => {
                setShowEvent(true);
                setDataOfEvent(a.event.extendedProps);
              }}
            />
          </div>
        </div>
      </div>
      <ShowEvent show={showEvent} setShow={setShowEvent} data={dataOfEvent} />
    </>
  );
};
