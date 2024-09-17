import { Link } from "react-router-dom";
import showcase from "../utils/showcase.json";

export default function Showcase() {
 return (
  <>
   <div className="w-full max-w-7xl mx-auto">
    <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-dmserif font-bold drop-shadow mb-8">
         Showcase
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
     {showcase.map((p) => (
      <Link to={`/showcase/${p.id}`}>
       <div className="h-full bg-primary text-neutral rounded-lg shadow-sm cursor-pointer hover:scale-105 hover:opacity-95 transition-transform duration-100 active:scale-100 cursor-pointer">
        <img
         src={"/images/" + p.cover}
         alt={p.title}
         className="w-full rounded-t-md object-cover h-[200px] md:h-[250px] bg-neutral/50"
        />
        <div className="p-4 lg:px-6">
         <h1 className="text-xl font-semibold leading-tight">
          {p.title}
         </h1>
         <p className="text-sm md:text-md mt-2">
          <strong>Date:</strong> {p.date}
         </p>
         <p className="text-sm md:text-md">
          <strong>Place:</strong> {p.place}
         </p>
        </div>
       </div>
      </Link>
     ))}
    </div>
   </div>
  </>
 );
}
