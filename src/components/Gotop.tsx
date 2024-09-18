import { useEffect, useState } from "react";

const Gotop = () => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <div className="fixed bottom-10 right-10 z-40" hidden={!show}>
      <button
        className="bg-primary text-neutral rounded-full p-2 hover:bg-primary/80 transition-all duration-100 shadow-lg border active:scale-95 animate-bounce"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 18.75 7.5-7.5 7.5 7.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Gotop;
