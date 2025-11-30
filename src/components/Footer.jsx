import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (location.pathname !== path) {
      navigate(path);
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFaqClick = (e, href) => {
    e.preventDefault();
    const [path, hash] = href.split('#');

    const scrollToElement = () => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    if (location.pathname !== path) {
      navigate(path);
      // Small delay to allow page to load/render
      setTimeout(scrollToElement, 100);
    } else {
      scrollToElement();
    }
  };

  return (
    <footer id="footer-section" className="bg-[#5d4e37] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  onClick={(e) => handleNavClick(e, '/')} 
                  className="text-white/80 hover:text-chiamo-green transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/quienes-somos" 
                  onClick={(e) => handleNavClick(e, '/quienes-somos')} 
                  className="text-white/80 hover:text-chiamo-green transition-colors"
                >
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link 
                  to="/sustentabilidad" 
                  onClick={(e) => handleNavClick(e, '/sustentabilidad')} 
                  className="text-white/80 hover:text-chiamo-green transition-colors"
                >
                  Sustentabilidad
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  onClick={(e) => handleNavClick(e, '/contacto')} 
                  className="text-white/80 hover:text-chiamo-green transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">
              <a 
                href="/preguntas-frecuentes" 
                onClick={(e) => handleFaqClick(e, '/preguntas-frecuentes')} 
                className="hover:text-chiamo-green transition-colors"
              >
                Preguntas Frecuentes
              </a>
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/preguntas-frecuentes#pregunta3" 
                  onClick={(e) => handleFaqClick(e, '/preguntas-frecuentes#pregunta3')} 
                  className="text-white/80 hover:text-chiamo-green transition-colors"
                >
                  ¿Hacen presupuestos sin cargo?
                </a>
              </li>
              <li>
                <a 
                  href="/preguntas-frecuentes#pregunta6" 
                  onClick={(e) => handleFaqClick(e, '/preguntas-frecuentes#pregunta6')} 
                  className="text-white/80 hover:text-chiamo-green transition-colors"
                >
                  ¿Qué significa obra llave en mano?
                </a>
              </li>
              <li>
                <a 
                  href="/preguntas-frecuentes#pregunta9" 
                  onClick={(e) => handleFaqClick(e, '/preguntas-frecuentes#pregunta9')} 
                  className="text-white/80 hover:text-chiamo-green transition-colors"
                >
                  ¿Cómo solicito una visita o presupuesto?
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Escobar, Buenos Aires, Argentina</li>
              <li>+54 9 11 6307-2324</li>
              <li>info@chiamo.com.ar</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://wa.me/5491163072324" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" aria-label="Contactar a CHIAMO Construcciones por WhatsApp">
                <img src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/0f4b2f41ab161b19cbd6b0dedca7408f.png" alt="WhatsApp" className="w-8 h-8" />
              </a>
              <a href="mailto:info@chiamo.com.ar?subject=Presupuesto" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" aria-label="Contactar a CHIAMO Construcciones por Mail" title="Enviar Mail">
                <img src="https://sorteomix.com.ar/assets/image/gmail.png" alt="Mail" className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/chiamo_construcciones?utm_source=qr&igsh=OGw2MGt3ZnB1aXV0" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" aria-label="Seguir a CHIAMO Construcciones en Instagram">
                <img src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/b7a574201022323bcdc5f91b976eae58.png" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://www.facebook.com/share/17fbgjG9SR/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" aria-label="Seguir a CHIAMO Construcciones en Facebook">
                <img src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/087fba7899f48f4e4c30d992abd9464f.png" alt="Facebook" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2025 CHIAMO Construcciones. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;