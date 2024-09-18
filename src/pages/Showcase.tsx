import { Link } from "react-router-dom";
import showcase from "../utils/showcase.json";

export default function Showcase() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto p-8">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow mb-8">
          Showcase
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {showcase.map((p) => (
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
          ))}
        </div>
      </div>
    </>
  );
}
