import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';
import { useInView } from '@/hooks/useInView';
import { CheckCircle, Award, Users, HeartHandshake as Handshake, Heart } from 'lucide-react';
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/875d2b4db81b58384b38714247f69c74.jpg', 'https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/8d0549673d53b9ea9902e2bbe68edabf.jpg'];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  const [introRef, introInView] = useInView({
    threshold: 0.1,
    once: true
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.1,
    once: true
  });
  const [whyChooseRef, whyChooseInView] = useInView({
    threshold: 0.1,
    once: true
  });
  const [empresaRef, empresaInView] = useInView({
    threshold: 0.1,
    once: true
  });
  const whyChooseItems = [{
    icon: Users,
    title: "Experiencia personalizada",
    description: "Adaptamos cada proyecto a las necesidades y preferencias de nuestros clientes."
  }, {
    icon: Award,
    title: "Calidad garantizada",
    description: "Utilizamos materiales de primera calidad y contamos con un equipo altamente capacitado."
  }, {
    icon: Handshake,
    title: "Transparencia y comunicación",
    description: "Mantenemos a nuestros clientes informados en todo momento."
  }, {
    icon: CheckCircle,
    title: "Precio justo",
    description: "Márgenes claros sobre costos reales. “La verdad es la medida de todas las cosas”."
  }, {
    icon: Heart,
    title: "Compromiso con la satisfacción",
    description: "Nuestro objetivo es superar las expectativas de nuestros clientes."
  }];
  const StaggeredFadeIn = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };
  return <PageTransition>
    <Helmet>
      <title>Inicio | CHIAMO Construcciones</title>
      <meta name="description" content="Transformamos el proceso de construcción en una experiencia excepcional y transparente. Conozca nuestros proyectos y pida su presupuesto." />
    </Helmet>
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={currentSlide} initial={{
          opacity: 0,
          scale: 1.1
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 1.05
        }} transition={{
          duration: 1.5,
          ease: 'easeInOut'
        }} className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${slides[currentSlide]})`
        }}>
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: 'easeOut'
        }} className="font-logo text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
          <span className="block text-5xl md:text-7xl font-bold">CHIAMO</span>
          <span className="block text-2xl md:text-3xl font-medium tracking-widest">Construcciones</span>
        </motion.h1>
        <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4,
          ease: 'easeOut'
        }} className="text-xl md:text-2xl text-white mb-12 max-w-xl md:max-w-4xl text-shadow">Construimos tu confianza a través de la transparencia y la calidad que necesitas</motion.p>
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6,
          ease: 'easeOut'
        }} className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-chiamo-green hover:bg-chiamo-dark text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Link to="/contacto">Pedir Presupuesto</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-chiamo-dark font-bold px-8 py-6 text-lg rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Link to="/quienes-somos">Conócenos</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    <section ref={introRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.div initial="initial" animate={introInView ? "animate" : "initial"} custom={0} variants={StaggeredFadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-chiamo-dark mb-8">La mejor construcción la hace CHIAMO</h2>
        </motion.div>
        <motion.div initial="initial" animate={introInView ? "animate" : "initial"} custom={1} variants={StaggeredFadeIn}>
          <p className="text-lg md:text-xl text-chiamo-text leading-relaxed mb-6 text-justify"><span className="font-bold">Somos una empresa constructora que realiza sus obras con honestidad y transparencia</span> porque creemos en una forma de trabajar cercana al cliente, donde cada obra refleje sus sueños y sus deseos.</p>
        </motion.div>
        <motion.div initial="initial" animate={introInView ? "animate" : "initial"} custom={2} variants={StaggeredFadeIn}>
          <p className="text-lg md:text-xl text-chiamo-text leading-relaxed mb-8 text-justify">Transformamos los proyectos en una experiencia <span className="font-bold">placentera y sin dolores de cabeza</span> porque garantizamos la <span className="font-bold">máxima calidad</span> con la misma responsabilidad que cumplimos con los plazos de trabajo acordados, ofreciendo <span className="font-bold">precios justos y transparencia total</span> en cada presupuesto.</p>
        </motion.div>
        <motion.div initial="initial" animate={introInView ? "animate" : "initial"} custom={3} variants={StaggeredFadeIn}>
          <p className="text-xl md:text-2xl font-semibold text-chiamo-green leading-relaxed text-center">Tu obra está respaldada por nuestra probada trayectoria porque para nosotros, construir es dejar una huella positiva en las personas y en el mundo.</p>
        </motion.div>
      </div>
    </section>

    <section ref={servicesRef} className="py-20 bg-chiamo-light">
      <div className="container mx-auto px-4">
        <motion.div initial="initial" animate={servicesInView ? "animate" : "initial"} custom={0} variants={StaggeredFadeIn} className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-chiamo-dark mb-6">Nuestros Servicios y Diferencial</h2>
          <div className="w-24 h-1 bg-chiamo-green mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="initial" animate={servicesInView ? "animate" : "initial"} custom={1} variants={StaggeredFadeIn} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-chiamo-dark">Nuestro Diferencial</h3>
            <p className="text-chiamo-text leading-relaxed text-justify">Nos diferenciamos por ofrecer obras de calidad con valor agregado, impulsadas por la transparencia y la satisfacción del cliente. Nuestra estrategia se basa en un trato empático y personalizado para identificar las necesidades de quiénes deciden confiar en nosotros, además ofrecemos claridad financiera en cada presupuesto e invertimos constantemente en nuevas tecnologías para optimizar tiempos y costos, garantizando así un servicio integral.</p>
          </motion.div>
          <motion.div initial="initial" animate={servicesInView ? "animate" : "initial"} custom={2} variants={StaggeredFadeIn} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-chiamo-dark">El Ciclo de la Satisfacción</h3>
            <p className="text-chiamo-text leading-relaxed text-justify">Consideramos que nuestro trabajo está completo cuando el cliente vuelve a confiar en nosotros para nuevos proyectos. Este ciclo de satisfacción es el motor que impulsa nuestro crecimiento y consolida nuestra posición como líderes en el mercado.</p>
          </motion.div>
        </div>
      </div>
    </section>

    <section id="empresa" ref={empresaRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={empresaInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-chiamo-dark mb-4">Nuestra Empresa</h2>
          <div className="w-24 h-1 bg-chiamo-green mx-auto rounded-full" />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={empresaInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.9,
            delay: 0.4,
            ease: "easeOut"
          }} className="space-y-6">
            <p className="text-chiamo-text leading-relaxed text-justify">Somos una empresa dedicada a la construcción, centrándonos en la edificación, reparación o mejora de propiedades, como casas, edificios, o infraestructuras, a las que abordamos desde la planificación hasta la finalización. Estas obras pueden ser de diferentes tipos, como la construcción residencial, comercial o industrial, y pueden variar desde la construcción de una vivienda desde cero hasta reformas específicas para mejorar su habitabilidad.</p>
            <p className="text-chiamo-text leading-relaxed text-justify"><span className="font-bold">Chiamo</span> nace en el partido de Escobar, lugar en donde se ubica nuestra oficina comercial destacada. Nuestra identidad nos pone en línea con nuestro territorio porque creemos profundamente en la sustentabilidad. Sabemos de las preocupaciones que provoca este rubro por eso trabajamos arduamente para ofrecer honestidad en los presupuestos y la mejor calidad de obra en cada ladrillo para edificar nuestra promesa de transparencia y alta calidad.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={empresaInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.9,
              delay: 0.6,
              ease: "easeOut"
            }}>
              <img alt="Casa moderna Image A" src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/whatsapp-image-2025-10-14-at-21.03.06-zmPSU.jpeg" />
            </motion.div>
            <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={empresaInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.9,
              delay: 0.8,
              ease: "easeOut"
            }} className="mt-0 md:mt-8">
              <img alt="Casa moderna Image B" src="https://horizons-cdn.hostinger.com/8ea8417c-7e84-4d95-89a7-af96163fff02/whatsapp-image-2025-10-14-at-21.03.07-z66eh.jpeg" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section ref={whyChooseRef} className="py-20 bg-chiamo-light">
      <div className="container mx-auto px-4">
        <motion.div initial="initial" animate={whyChooseInView ? "animate" : "initial"} custom={0} variants={StaggeredFadeIn} className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-chiamo-dark mb-4">¿Por qué elegir Chiamo Construcciones?</h2>
          <div className="w-24 h-1 bg-chiamo-green mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseItems.map((item, index) => <motion.div key={item.title} initial="initial" animate={whyChooseInView ? "animate" : "initial"} custom={index + 1} variants={StaggeredFadeIn} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-start space-x-4">
            <div className="flex-shrink-0 bg-chiamo-green text-white rounded-full p-3 mt-1">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-chiamo-dark mb-2">{item.title}</h3>
              <p className="text-chiamo-text text-sm leading-relaxed text-justify">{item.description}</p>
            </div>
          </motion.div>)}
        </div>

        <motion.div initial="initial" animate={whyChooseInView ? "animate" : "initial"} custom={whyChooseItems.length + 1} variants={StaggeredFadeIn} className="text-center mt-20">
          <Button asChild size="lg" className="bg-chiamo-green hover:bg-chiamo-dark text-white font-bold px-10 py-7 text-xl rounded-full shadow-lg transition-transform transform hover:scale-105">
            <Link to="/contacto">¡Construyamos juntos tu proyecto ideal!</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </PageTransition>;
};
export default HomePage;