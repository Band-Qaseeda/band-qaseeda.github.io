import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Qaseeda Band</title>
      </Helmet>
      <div className="w-full max-w-7xl mx-auto">
        <div className="p-8">
          <div className="w-auto text-primary lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl  font-bold mb-4">
              About Us
            </h2>
            <p className="pt-4 max-w-[700px] md:max-w-[750px] lg:max-w-5xl mx-auto md:text-lg">
              Qaseeda is a music band that has recently become highly discussed
              and incredibly popular in the country. After the student uprising,
              their Qawwali music spread nationwide and received significant
              praise from netizens. Following the attack on a Qawwali concert at
              Dhaka University’s TSC in 2022, Qawwali was unofficially banned.
              Recently, Qaseeda’s Qawwali performances at TSC have been embraced
              as symbols of student liberation.
              <br />
              <br />
              Qaseeda is fundamentally a platform that nurtures and embodies its
              roots, land, people, and traditions. The band aims to present to
              the world the essence of the region’s land, people, and heritage.
              To achieve this, Qaseeda showcases its expertise through folk
              songs, Puthi, Jari-Sari, Bhatiyali, Baul, Gaan, Ghazal, Qawwali,
              Hamd-Naat, and various aspects of the local lifestyle and culture.
              <br />
              <br />
              With their music, which carries the essence of their tradition,
              the band dreams of representing the region’s cultural roots on the
              global stage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
