import { Github, Linkedin, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-1xl font-bold mb-3">VENNAPUSA SHANMUKNEDAR REDDY</h3>
            <p className="text-gray-400">
              A passionate Full Stack Developer focused on creating beautiful and functional web applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-purple-400" />
                <span className="text-gray-400">shanmukendar906@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-purple-400" />
                <span className="text-gray-400">+91 9515350861</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-purple-400" />
                <span className="text-gray-400">Hyderabad, TG.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VENNAPUSA SHANMUKENDAR REDDY. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
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
      </div>
    </footer>
  );
};

export default Footer;