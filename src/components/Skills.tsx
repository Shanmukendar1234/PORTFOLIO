import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: "Java", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "HTML & CSS", level: 95 },
  { name: "Data Structure", level: 60 },
  { name: "Python", level: 85 },
  { name: "SQL", level: 80 }
];

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
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-lg font-medium">{skill.level}%</span>
                </div>
                <div className="h-4 bg-purple-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;