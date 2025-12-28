import { SKILLS } from "../constants";
import Skill from "./Skill";

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-milk">
      <div className="section-container">
        <div className="flex flex-col justify-center items-center">
          <h2 className="section-title mb-8">Skills &amp; Tools</h2>

          <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
            {SKILLS.map((name) => (
              <Skill key={name} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
