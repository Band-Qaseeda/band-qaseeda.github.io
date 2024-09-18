import Slider from "react-slick";
import events from "../utils/events.json";
import "../assets/carousel-custom.css";
import { Helmet } from "react-helmet";

export const Events = () => {
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
    <Slider
     infinite={false}
     speed={500}
     slidesToShow={1}
     slidesToScroll={1}
     className="max-w-2xl mx-auto !h-fit"
    >
     {events.length > 0 ? (
      events
       .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
