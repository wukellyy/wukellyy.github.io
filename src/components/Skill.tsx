interface SkillProps {
  key: string;
  name: string;
}

const Skill = ({ key, name }: SkillProps) => {
  return (
    <div
      key={key}
      className="px-4 py-2 bg-gray-blue border border-gray-blue text-milk rounded-md hover:scale-105 hover:border-orange-500 hover:bg-orange-500 transition-transform duration-200"
    >
      {name}
    </div>
  );
};

export default Skill;
