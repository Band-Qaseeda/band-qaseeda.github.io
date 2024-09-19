import { Link } from "react-router-dom";
import profiles from "../utils/profiles.json";

export const Team = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto p-8">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-dmserif font-bold drop-shadow mb-8">
          Team
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-8 xl:gap-y-24">
          {profiles.map((v, i) => (
            <div key={i} className="flex justify-center">
              <Link
                to={`/biography/${v?.prefix}`}
                className="rounded-lg text-neutral w-full max-w-[300px] hover:scale-105 hover:opacity-95 transition-transform duration-100 active:scale-100 relative group h-full relative"
              >
                <div className="relative">
                  <img
                    src={"/images/person/" + v?.prefix + ".png"}
                    alt="Person"
                    className="w-full aspect-square object-cover bg-center bg-transparent group-hover:opacity-70 relative z-10"
                  />
                  <div className="absolute bottom-0 inset-0 flex justify-center items-center">
                    <div className="w-full h-full rounded-t-full bg-gradient-to-b from-transparent to-accent z-0 md:-mb-[170px] group-hover:to-accent/60"></div>
                  </div>
                </div>
                <div className="p-3 md:p-5 z-10 bg-primary rounded-b-md">
                  <h1 className="sm:text-xl font-medium group-hover:italic truncate">
                    {v?.name}
                  </h1>
                  <p className="text-gray-600 text-sm md:text-md flex gap-1 items-center mt-1 truncate">
                    <div><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 md:size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                        clipRule="evenodd"
                      />
                      <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                    </svg></div>

                    {v?.bio?.role}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
