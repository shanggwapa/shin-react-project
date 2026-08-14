export default function ContactPage() {
    
  return (
    <>
      <main className="bg-gray-100 min-h-screen">

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">

          {/* Section Title */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold">
              Contact Me
            </h1>

            <div className="w-20 h-1 bg-purple-700 mx-auto mt-4"></div>
          </div>


          {/* Contact Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div className="bg-white rounded-xl shadow-md p-10">

              <h2 className="text-3xl font-bold mb-3">
                Shane Carey Gales
              </h2>

              <div className="inline-block bg-purple-700 text-white px-4 py-2 rounded">
                BSIT Student | Web Developer
              </div>

              <p className="text-gray-600 mt-6 leading-7">
                I'm always open to new opportunities, collaborations,
                and conversations. You can contact me through my email
                or social media accounts.
              </p>

              <p className="text-gray-600 mt-4">
                I would be happy to hear from you!
              </p>

            </div>


            {/* Right Side */}
            <div className="space-y-5">

              {/* Email */}
              <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-5 hover:shadow-xl transition">

                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">
                    ✉
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    bastyshane1325@gmail.com
                  </p>
                </div>

              </div>


              {/* Pinterest */}
              <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-5 hover:shadow-xl transition">

                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    ☏
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    0992 154 7712
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}