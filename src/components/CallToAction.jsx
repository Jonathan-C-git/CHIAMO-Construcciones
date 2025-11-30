
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contacto');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-chiamo-green via-chiamo-base to-chiamo-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-logo">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Construyamos juntos el espacio que siempre soñaste. Nuestro equipo está listo para hacer realidad tu visión.
          </p>
          <Button 
            onClick={handleContactClick}
            size="lg" 
            className="bg-white text-chiamo-dark hover:bg-chiamo-light transition-all duration-300 transform hover:scale-105 shadow-xl group"
          >
            Construyamos juntos tu proyecto ideal
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
