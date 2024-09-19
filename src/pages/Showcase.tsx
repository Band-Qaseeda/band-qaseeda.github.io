import { Link } from "react-router-dom";
import showcaseAll from "../utils/showcase.json";
import Button from "../components/Button";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default function Showcase() {
  const [showcase, setShowcase] = useState(showcaseAll);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const searchByDate = () => {
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    setShowcase(
      showcaseAll.filter((event) => {
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
        <title>Showcase - Qaseeda Band</title>
      </Helmet>
      <div className="w-full max-w-7xl mx-auto p-8">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow mb-8">
          Showcase
        </h1>

        <div className="mb-8 flex items-center">
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
        <div className="mb-8 w-full max-w-2xl mx-auto">
          <div
            className={
              "flex-col md:flex-row md:justify-between gap-4 " +
              (showSearch ? "flex" : "hidden")
            }
          >
            <div className="overflow-x-auto flex items-center">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-showcase-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
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
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-showcase-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {showcase.length > 0 ? (
            showcase.map((p) => (
              <Link to={`/showcase/${p?.id}`}>
                <div className="rounded-lg shadow-sm cursor-pointer hover:scale-105 hover:opacity-95 transition-transform duration-100 active:scale-100 cursor-pointer bg-gradient-to-b from-transparent via-accent to-transparent p-1">
                  <div className="bg-primary text-neutral rounded-lg">
                    <img
                      src={"/images/" + p?.cover}
                      alt={p?.title}
                      className="w-full rounded-t-md object-cover h-[200px] md:h-[250px] bg-neutral/50"
                    />
                    <div className="p-4 lg:px-6">
                      <h1 className="text-xl font-semibold leading-tight pl-0.5 truncate">
                        {p?.title}
                      </h1>
                      <div className="text-sm md:text-md flex gap-1 items-center mb-1 mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-accent"
                        >
                          <path
                            fillRule="evenodd"
                            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="truncate">{p?.place}</p>
                      </div>
                      <p className="text-sm md:text-md mt-1 flex gap-1 items-center text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-gray-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {p?.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="rounded-lg shadow-sm cursor-pointer hover:scale-105 hover:opacity-95 transition-transform duration-100 active:scale-100 cursor-pointer bg-gradient-to-b from-transparent via-accent to-transparent p-1">
              <div className="bg-primary text-neutral rounded-lg p-4">
                No performance found!
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
