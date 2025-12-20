import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "Java", level: 90 },
  { name: "JavaScript", level: 60 },
  { name: "HTML & CSS", level: 95 },
  { name: "Data Structure", level: 40 },
  { name: "Python", level: 85 },
  { name: "SQL", level: 70 },
];

const frameworks: Skill[] = [
  { name: "Spring Boot", level: 40 },
  { name: "React.js", level: 60 },
  { name: "Node.js", level: 50 },
];

const tools: Skill[] = [
  { name: "Git", level: 85 },
  { name: "VS Code", level: 100 },
  { name: "Github", level: 100 },
  { name: "Jupyter", level: 70 },
];

const renderSection = (title: string, data: Skill[], inView: boolean) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
  >
    <h3 className="text-3xl font-bold text-center mb-8">{title}</h3>
    <div className="max-w-3xl mx-auto">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium">{item.name}</span>
            <span className="text-lg font-medium">{item.level}%</span>
          </div>
          <div className="h-4 bg-purple-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ width: 0 }}
              animate={inView ? { width: `${item.level}%` } : {}}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        </motion.div>
        {renderSection("Core Skills", skills, inView)}
        {renderSection("Frameworks", frameworks, inView)}
        {renderSection("Tools", tools, inView)}
      </div>
    </section>
  );
};

export default Skills;
