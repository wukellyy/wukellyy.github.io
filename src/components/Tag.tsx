interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps) => {
  return (
    <span className="text-sm text-orange-500 border border-orange-500 px-2 py-1 rounded-md">
      {label}
    </span>
  );
};

export default Tag;
