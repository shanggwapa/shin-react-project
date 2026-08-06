import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import card1 from "../assets/card1.jpg";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="bg-gray-100 min-h-screen">

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>
              <h2 className="text-4xl font-bold mb-2">
                Hi There!
              </h2>

              <h1 className="text-5xl font-extrabold mb-4">
                I'm Shane Carey Gales
              </h1>

              <div className="inline-block bg-purple-700 text-white px-4 py-2 rounded">
                BSIT Student | Web Developer
              </div>

              <p className="text-gray-600 mt-6 leading-7 max-w-md">
                I build responsive websites and continuously improve my
                programming skills. I enjoy learning new technologies
                and creating modern web applications.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition">
                  Hire Me
                </button>

                <button className="border-2 border-purple-700 text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-700 hover:text-white transition">
                  View My Work
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center">
              <img
                src={card1}
                alt="Profile"
                className="w-80 h-80 object-cover rounded-xl shadow-lg"
              />
            </div>

          </div>
        </section>

        {/* What I Do */}
        <section className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-bold text-center">
            What I Do
          </h2>

          <div className="w-20 h-1 bg-purple-700 mx-auto mt-4 mb-14"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">

              <h3 className="text-xl font-bold mb-3">
                Web Development
              </h3>

              <p className="text-gray-600">
                Building responsive websites using React, Tailwind CSS,
                JavaScript, and modern web technologies.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">

              <h3 className="text-xl font-bold mb-3">
                Website Setup
              </h3>

              <p className="text-gray-600">
                Creating complete websites, organizing projects,
                configuring routing, and deploying applications.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">

              <h3 className="text-xl font-bold mb-3">
                UI Design
              </h3>

              <p className="text-gray-600">
                Designing clean, user-friendly interfaces with modern
                layouts and responsive designs.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}