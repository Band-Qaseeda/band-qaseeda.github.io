import gallery from "../utils/gallery.json";

export const Gallery = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
        <div className="w-full p-8">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow mb-8">
            Gallery
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <div
                className="bg-primary rounded-md p-2 hover:scale-105 hover:opacity-95 transition-transform duration-100 active:scale-100 cursor-pointer relative group"
                key={i}
              >
                <img
                  src={"/images/" + g?.image}
                  alt={g?.image}
                  className="aspect-w-16 aspect-h-9 rounded-md object-cover bg-neutral/5"
                />
                <div className="w-full p-6 pt-24 absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-neutral hidden group-hover:block">
                  <p className="text-primary font-medium lg:text-lg">{g?.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
