import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Disease Prediction Using Genetic Mutation Through Big Data",
    description: "This gene mapping project visualizes the process of decoding genetic structures using advanced tools. It features a high-tech laboratory environment with holographic screens displaying genome data and DNA helix models. Scientists collaborate in the process of mapping genes and analyzing genetic information. The project emphasizes precision, innovation, and the use of cutting-edge bioinformatics techniques to advance genetic research.",
    image: "https://images.unsplash.com/photo-1733662535716-3cb3f4d38d3a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/Shanmukendar1234/Gene-Mapping-code",
    live: "#"
  },
  {
    title: "REAL ESTATE WEBSITE CREATOR",
    description: "This project is a modern, responsive real estate website built using HTML, CSS, Bootstrap, and MySQL. It showcases property listings with details like price, location, and features. The design is user-friendly, featuring an intuitive navigation bar, a search filter, and easy-to-read contact information. The website offers a seamless browsing experience, focusing on performance and usability, allowing users to find properties based on their preferences.",
    image: "https://images.unsplash.com/photo-1733662515281-e07b97287c64?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/Shanmukendar1234/HCL-REAL-ESTATE-WEBSITE-CREATOR",
    live: "#"
  },
  {
    title: "Dry Beans Dataset Prediction",
    description: "This project uses machine learning algorithms like Random Forest and Support Vector Machine to predict dry bean species from a dataset of features. The process involves data preprocessing, model training, and testing phases to evaluate the accuracy of predictions. The goal is to build a model that accurately classifies dry beans based on their characteristics, providing valuable insights for agricultural data analysis.",
    image: "https://images.unsplash.com/photo-1733662525499-0cb83ee14b37?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/Shanmukendar1234/DRY-BEANS-DATASET",
    live: "#"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;