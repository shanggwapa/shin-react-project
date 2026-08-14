import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";


export default function WorksPage() {
  return (
    <>
      <main className="bg-gray-100 min-h-screen">

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold">My Projects</h1>
            <div className="w-20 h-1 bg-purple-700 mx-auto mt-4"></div>
          </div>


          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            <a
              href="https://siapfinals.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group"
            >
              <div className="bg-gray-300 h-64 rounded-lg shadow-md">
                <img src={project1} alt="Project 1" className="w-full h-full object-cover" />
              </div>

              <h2 className="text-xl font-bold mt-5 group-hover:text-purple-700 transition">WEBSITE PROJECT 1</h2>
            </a>


            <a
              href="https://bebadobi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group"
            >
              <div className="bg-gray-300 h-64 rounded-lg shadow-md">
                <img src={project2} alt="Project 2" className="w-full h-full object-cover" />
              </div>

              <h2 className="text-xl font-bold mt-5 group-hover:text-purple-700 transition">WEBSITE PROJECT 2</h2>
            </a>


            <a
              href="https://totskiee.github.io/bm-pcshoppp/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group"
            >
              <div className="bg-gray-300 h-64 rounded-lg shadow-md">
                <img src={project3} alt="Project 3" className="w-full h-full object-cover" />
              </div>

              <h2 className="text-xl font-bold mt-5 group-hover:text-purple-700 transition">WEBSITE PROJECT 3</h2>
            </a>

            <a
              href="https://example-mockups.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group"><div className="bg-gray-300 h-64 shadow-md">
              </div>

              <h2 className="text-xl font-bold mt-5 group-hover:text-purple-700 transition">MORE TO MAKE</h2>
            </a>

          </div>

        </section>

      </main>
    </>
  );
}