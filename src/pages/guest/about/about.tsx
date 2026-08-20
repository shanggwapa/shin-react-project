import card1 from "@/assets/card1.jpg";

export default function AboutPage() {
  return (
    <>

      <main className="max-w-7xl mx-auto px-6 py-20">

        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">

            <img
              src={card1}
              alt="Profile"
              className="relative w-80 h-[420px] object-cover shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold uppercase">About Me</h1>
            <div className="w-20 h-1 bg-black mt-4 mb-8"></div>

            <p className="text-gray-600 leading-8 mb-8">
              Hello! I'm Shane, though feel free to call me Shang. 
              I am a college student passionately focused on mastering design and coding. 
              I am dedicated to continuously learning and building upon these skills.
            </p>

            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Responsive Website Development</li>
              <li>React & TypeScript Applications</li>
              <li>Landing Pages and Portfolio Websites</li>
              <li>UI/UX Design and Graphic Design</li>
              <li>Website Maintenance and Optimization</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Tools I Use</h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>VS Code</li>
              <li>Figma</li>
              <li>GitHub</li>
              <li>Photoshop</li>
              <li>Canva</li>
            </ul>

          </div>

        </section>

      </main>
    </>
  );
}