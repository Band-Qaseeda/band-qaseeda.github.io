export default function navbarEffect() {
 const navbar = document.querySelector("nav");
 window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
   navbar?.classList.remove("py-6", "md:py-8", "border-transparent", "bg-neutral");
   navbar?.classList.add(
    "md:py-5",
    "py-4",
    "border-primary/10",
    "bg-neutral/30",
    "backdrop-blur-lg"
   );
  } else {
   navbar?.classList.add("py-6", "md:py-8", "border-transparent", "bg-neutral");
   navbar?.classList.remove(
    "md:py-5",
    "py-4",
    "border-primary/10",
    "bg-neutral/30",
    "backdrop-blur-lg"
   );
  }
 });
}
