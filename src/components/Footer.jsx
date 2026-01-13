import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-enhanced">
        {/* El enlace de correo usualmente no lleva target="_blank" porque abre la app de correo, 
            pero los de web sí lo necesitan. */}
        <p>Email: <a href="mailto:alejandroalmaguer2001@gmail.com">alejandroalmaguer2001@gmail.com</a></p>
        
        <p>LinkedIn: <a href="https://www.linkedin.com/in/alejandroalmaguer/" target="_blank" rel="noopener noreferrer">View LinkedIn Profile</a></p>
        
        <p>GitHub: <a href="https://github.com/Aalexalmaguer" target="_blank" rel="noopener noreferrer">Explore Github Projects</a></p>
    </footer>
  );
};

export default Footer;