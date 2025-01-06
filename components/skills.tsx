const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Motion",
      "Material UI",
      "Ant Design",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "GitLab", "VSCode", "Figma", "Photoshop"],
  },
];

export const Skills = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6">
        {skills.map((skill) => (
          <div key={skill.title}>
            <p className="text-center text-sm font-bold">{skill.title}</p>
            <ul className="mt-2 flex flex-wrap justify-center gap-2 text-xs">
              {skill.items.map((item) => (
                <li key={item} className="rounded-lg bg-yellow p-1 text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
