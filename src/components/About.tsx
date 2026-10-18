const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="flex flex-col justify-center items-center">
          <h2 className="section-title">About Me</h2>
          <div className="flex flex-col justify-center items-center gap-6 text-center w-[300px] xs:w-[450px] md:w-[700px]">
            <p className="text-lg sm:text-xl font-semibold">
              Hi! I'm Kelly — a Master's student in Software Engineering Systems
              at{" "}
              <a
                href="https://coe.northeastern.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 cursor-pointer"
              >
                Northeastern
              </a>{" "}
              who loves building full-stack web applications with clean code and
              thoughtful user experience..
            </p>
            <p className="text-base sm:text-lg font-light">
              I graduated from{" "}
              <a
                href="https://engineering.nyu.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 cursor-pointer"
              >
                NYU
              </a>{" "}
              with a degree in Computer Science and a minor in Integrated Design
              & Media, which shaped how I approach interfaces: I care as much
              about how something feels to use as how it works under the hood.
              I've applied what I learned through team projects and a software
              developer internship at CherryOnTech, building responsive front
              ends and back-end APIs.
            </p>
            <p className="text-base sm:text-lg font-light">
              Right now, I'm focused on system design, cloud computing, and
              AI/ML, digging into how software scales and stays reliable in
              production.
            </p>
            <p className="text-base sm:text-lg font-light">
              When I'm not coding, you'll probably find me watching soccer,
              playing video games, or contemplating what to cook for dinner.
              Take a look at my projects below, and feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
