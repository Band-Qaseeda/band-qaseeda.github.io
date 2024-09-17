import { Link, useParams } from "react-router-dom";
import showcase from "../utils/showcase.json";
import { Helmet } from "react-helmet";
import "../assets/carousel-custom.css";

export const ShowcaseID = () => {
  const { id } = useParams<{ id: string }>();
  const prf = showcase.find((p) => String(p.id) === id);
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
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 pt-2">
        <div
          className="relative bg-primary text-neutral rounded-lg p-4 lg:px-6 lg:py-8 shadow-sm h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: `url(/images/${prf?.cover})` }}
        >
          <Link to="/showcase/">
            <button className="bg-primary text-neutral rounded-full p-2 hover:bg-primary/80 transition-all duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.25 18.75 7.75 12 15.25 5.25"
                />
              </svg>
            </button>
          </Link>

          <div className="absolute bottom-0 left-0 right-0 p-4 lg:px-6 rounded-b-lg text-primary bg-gradient-to-t from-neutral/90 pt-12">
            <h1 className="text-xl sm:text-2xl font-semibold leading-tight">
              {prf?.title}
            </h1>
            <p className="text-sm md:text-md lg:text-lg mt-3">
              <strong>Date:</strong> {prf?.date}
            </p>
            <p className="text-sm md:text-md lg:text-lg">
              <strong>Place:</strong> {prf?.place}
            </p>
          </div>
        </div>

        {/* Press Release */}
        <h1 className="mt-8 lg:mt-24 text-xl sm:text-2xl md:text-3xl font-dmserif font-bold drop-shadow mb-4 border-b-[4px] pb-1 border-accent/50 w-fit">
          Press Release
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {prf && prf.pressReleases.length > 0 ? (
            prf?.pressReleases.map(
              (e, i) =>
                e.link && (
                  <div
                    className="w-full text-primary rounded-md p-4 lg:p-8 whitespace-nowrap flex flex-col md:flex-row gap-4 md:gap-8 items-center"
                    key={i}
                  >
                    <div>
                      <img
                        src={
                          e && "logo" in e && typeof e.logo === "string"
                            ? e.logo
                            : `https://logo.clearbit.com/${
                                new URL(e.link).hostname
                              }`
                        }
                        alt="logo"
                        className="w-[100px] h-[100px] object-contain bg-primary rounded-md"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-sm md:text-md lg:text-lg font-medium">
                        {e?.source}
                      </p>
                      <p className="text-sm md:text-md mt-2 text-gray-500">
                        {e?.date}
                      </p>
                      <a
                        href={e?.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-3"
                      >
                        <button className="bg-accent text-primary rounded-full py-1 px-4 hover:bg-accent/80 transition-all duration-100 flex items-center text-sm">
                          <span>Read More</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                )
            )
          ) : (
            <div
              className="w-full bg-gray-800 text-primary rounded-md p-4 lg:p-8"
            >
              <h1 className="text-md sm:text-xl font-medium">
                No press release available.
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
