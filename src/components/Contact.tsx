import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Instagram, Facebook, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-purple-600" />
                  <span>shanmukendar906@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-purple-600" />
                  <span>+91 9515350861</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-purple-600" />
                  <span>Hyderabad, Telangana, India.</span>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/Shanmukendar1234" className="text-gray-600 hover:text-purple-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/shanmukendar/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/shanmukendar_reddy/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/shanmukendharreddy.vennapusa" className="text-gray-600 hover:text-purple-600 transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;