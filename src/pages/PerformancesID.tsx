import { Link, useParams } from "react-router-dom";
import performances from "../utils/performances.json";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import "../assets/carousel-custom.css";
import { useEffect, useState } from "react";

export const PerformancesID = () => {
 const { id } = useParams<{ id: string }>();
 const prf = performances.find((p) => String(p.id) === id);
 const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

 useEffect(() => {
  const handleResize = () => {
   setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
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
   <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 pt-2">
    <div
     className="relative bg-primary text-neutral rounded-lg p-4 lg:px-6 lg:py-8 shadow-sm h-[70vh] bg-cover bg-center"
     style={{ backgroundImage: `url(/images/${prf?.cover})` }}
    >
     <Link to="/performances/">
      <button className="bg-primary text-neutral rounded-full p-2 hover:bg-primary/80 transition-all duration-100">
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
    <h1 className="mt-8 lg:mt-24 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-dmserif font-bold drop-shadow mb-2">
     Press Release
    </h1>
    <div className="p-4 lg:px-6 lg:py-8">
     <Slider
      dots={true}
      infinite={false}
      speed={500}
      slidesToShow={windowWidth > 768 ? 2 : 1}
      slidesToScroll={1}
      className="pb-4"
     >
      {prf && prf.pressReleases.length > 0 ? (
       prf?.pressReleases.map((e, i) => (
        <div
         className="w-full bg-primary text-neutral rounded-md p-4 lg:p-8 whitespace-nowrap !mx-8"
         key={i}
         style={{ height: "500px" }}
        >
         {e.cover && (
          <>
           <h1 className="truncate w-full text-md sm:text-xl md:text-2xl font-medium">
            {e.title}
           </h1>
           <p className="text-sm md:text-md mt-2">
            <strong>Date:</strong> {e.date}
           </p>
           <p className="text-sm md:text-md">
            <strong>Source:</strong> {e.source}
           </p>
           <img
            src={e.cover}
            alt={e.title}
            className="w-full mt-4 h-[300px] object-contain bg-neutral/50"
           />
          </>
         )}
         {e.video && (
          <div className="h-[476px]">
           <iframe
            width="100%"
            height="100%"
            src={e.video}
            title={e.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
           ></iframe>
          </div>
         )}
         {e.link && (
          <a
           href={e.link}
           target="_blank"
           rel="noreferrer"
           className="inline-block mt-5"
          >
           <button className="bg-accent text-primary rounded-full py-2 px-4 hover:bg-accent/80 transition-all duration-100 flex items-center">
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
         )}
        </div>
       ))
      ) : (
       <div
        className="w-full bg-primary text-neutral rounded-md p-4 lg:p-8"
        style={{ height: "500px" }}
       >
        <h1 className="text-md sm:text-xl md:text-2xl font-medium">
         No press release available.
        </h1>
       </div>
      )}
     </Slider>
    </div>
   </div>
  </>
 );
};
