export const Gallery = () => {
 return (
  <div className="w-full max-w-7xl mx-auto">
   <div className="flex flex-col gap-8">
    <div className="w-full p-8 lg:py-12">
     <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow mb-8">
      Gallery
     </h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-primary rounded-md p-2 hover:scale-105 hover:opacity-95 transition-transform duration-100 active:scale-100 cursor-pointer">
       <img
        src="/images/98478.jpg"
        alt="Gallery Image"
        className="aspect-w-16 aspect-h-9 rounded-md object-cover bg-neutral/5"
       />
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};
