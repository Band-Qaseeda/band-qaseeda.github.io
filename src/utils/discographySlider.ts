function hideArrows(slider: HTMLElement, prev: HTMLElement, next: HTMLElement) {
 if (slider.scrollLeft <= 0) {
  prev.style.display = "none";
 } else {
  prev.style.display = "block";
 }

 if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
  next.style.display = "none";
 } else {
  next.style.display = "block";
 }

 if (slider.scrollWidth <= slider.clientWidth) {
  prev.style.display = "none";
  next.style.display = "none";
 }
}

export default function discographySlider() {
 const main = document.getElementById("discography-main");

 if (main) {
  const slider = main.querySelector("#discography-slider") as HTMLElement;
  const prev = main.querySelector("button:first-child") as HTMLElement;
  const next = main.querySelector("button:last-child") as HTMLElement;

  if (slider && prev && next) {
   hideArrows(slider, prev, next);
   slider.addEventListener("scroll", () => {
    hideArrows(slider, prev, next);
   });

   prev.addEventListener("click", () => {
    slider.scrollBy({
     left: -slider.clientWidth,
     behavior: "smooth",
    });
   });

   next.addEventListener("click", () => {
    slider.scrollBy({
     left: slider.clientWidth,
     behavior: "smooth",
    });
   });
  }
 }
}
