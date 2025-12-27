const About = () => {
  return (
    <section id="about" className="bg-white scroll-mt-24">
      <div className="section-container">
        <div className="flex flex-col justify-center items-center">
          <h2 className="section-title">About Me</h2>
          <div className="flex flex-col justify-center items-center gap-2 text-center w-[300px] xs:w-[450px] md:w-[700px]">
            <p className="text-lg sm:text-xl font-semibold">
              Hi! I'm Kelly — a recent Computer Science graduate from{" "}
              <a
                href="https://engineering.nyu.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 cursor-pointer"
              >
                NYU
              </a>
              .
            </p>
            <p className="text-base sm:text-lg font-light">
              Over the past four years, I've built a strong foundation in both
              front-end and back-end development. I enjoy working across the
              full stack, where I get to craft intuitive user interfaces while
              also building reliable, well-structured server-side logic.
            </p>
            <p className="text-base sm:text-lg font-light">
              I'm driven by curiosity and a genuine love for learning, and I'm
              always excited to experiment with new tools, improve my skills,
              and grow as an engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
