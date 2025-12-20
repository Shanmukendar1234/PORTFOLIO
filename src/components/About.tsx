import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <p className="text-lg=center; text-gray-600 mb-6">
            I am a passionate Java Full Stack Developer with a keen interest in building intuitive and responsive web applications. Skilled in HTML, CSS, and Java-based frameworks, I have worked on real-time projects that demonstrate my problem-solving abilities and attention to detail. As a fresher, I bring enthusiasm, adaptability, and a commitment to delivering high-quality solutions. My goal is to leverage my skills to create impactful applications that meet user and business needs. I am eager to grow and contribute to innovative teams.
            </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-bold text-xl mb-2">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-bold text-xl mb-2">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-bold text-xl mb-2">30+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;