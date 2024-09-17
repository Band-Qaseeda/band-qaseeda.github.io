
export default function About() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        <div className="px-4">
          <div className="mt-8 flex flex-col lg:flex-row items-center gap-y-12">
            <div className="w-auto text-primary lg:px-8">
              <h2 className="text-center text-3xl md:text-4xl font-dmserif font-semibold mb-4">About Us</h2>
              <p className="max-w-[700px] md:max-w-[750px] mx-auto">Founded in August 2024, our band is dedicated to preserving and promoting the rich traditions of qawwali and Najrul Geeti. Our mission goes beyond entertaining; we are committed to keeping these important musical forms alive and relevant for future generations.
                <br /><br />
                Our showcase showcase both classic and contemporary interpretations of qawwali and Najrul giti, reflecting our respect for the traditional roots while adapting to modern contexts. We aim to present these genres in a way that honors their heritage and ensures their continued presence in today’s world.
                <br /><br />
                By performing and sharing these traditions, we work to sustain and celebrate the cultural significance of qawwali and Najrul giti, making sure that their beauty and history endure.</p>
            </div>
            <img src="/images/45419.jpg" alt="Qaseeda Band" className="w-full rounded-lg max-w-[500px] max-h-[500px] lg:max-w-[400px] lg:max-h-[400px] mx-auto" />
          </div>
        </div>
      </div>
    </>
  )
}
