import { HiDownload } from "react-icons/hi";
import ProfileImage from "../assets/profile.jpeg";

const Hero = () => {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1kBMuBXS_zk581bolu7TZ1E9wKheSNxJw/preview",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="hero" className="bg-milk scroll-mt-24">
      <div className="section-container">
        <div className="min-h-[calc(100vh-210px)] flex flex-col-reverse xs:flex-col-reverse md:flex-row justify-center items-center gap-4 xs:gap-6 md:gap-4 lg:gap-12">
          {/* Text Content */}
          <div className="flex flex-col gap-4 items-center xs:items-center md:items-start text-center xs:text-center md:text-left">
            <p className="text-lg xs:text-lg lg:text-xl">Hi there! 👋 I'm</p>
            <h1 className="text-5xl xs:text-5xl lg:text-6xl font-bold">
              Kelly Wu
            </h1>
            <p className="text-xl xs:text-xl lg:text-2xl font-semibold text-orange-500">
              Software Engineer
            </p>
            <p className="text-sm xs:text-base max-w-[350px] xs:max-w-[450px]">
              I'm an early-career full-stack developer based in NYC who enjoys
              building user-focused web applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-4 xs:mt-2 justify-center md:justify-start">
              <button
                className="border-gray-blue border-2 rounded-full px-6 py-2 hover:scale-105 ease-in duration-200 hover:shadow-md cursor-pointer bg-milk flex gap-2 justify-center items-center"
                onClick={handleResumeClick}
              >
                <HiDownload size={20} />
                <span className="font-semibold">Resume</span>
              </button>

              <a href="#contact">
                <button className="border-gray-blue border-2 rounded-full px-6 py-2 hover:scale-105 ease-in duration-200 hover:shadow-md cursor-pointer bg-gray-blue text-milk flex gap-2 justify-center items-center">
                  <span className="font-semibold">Contact Me</span>
                </button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative w-64 xs:w-72 md:w-80 lg:w-100 aspect-square rounded-full overflow-hidden flex-shrink-0">
            <img
              alt="Picture of Kelly Wu"
              src={ProfileImage}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
