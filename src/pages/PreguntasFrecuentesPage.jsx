
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PreguntasFrecuentesPage = () => {

  const faqs = [
    {
      id: "pregunta1",
      question: "1. ¿Qué servicios ofrecen?",
      answer: "Realizamos obras de remodelación, refacción y obras llave en mano, tanto para viviendas, oficinas como locales comerciales o de infraestructura.",
    },
    {
      id: "pregunta2",
      question: "2. ¿Trabajan con planos propios o del cliente?",
      answer: "Podemos trabajar con planos ya existentes o diseñarlos junto a vos, según tus necesidades.",
    },
    {
      id: "pregunta3",
      question: "3. ¿Hacen presupuestos sin cargo?",
      answer: "Sí, realizamos presupuestos sin costo. Para ello te solicitaremos fotos, medidas o coordinar una visita para mayor precisión.",
    },
    {
      id: "pregunta4",
      question: "4. ¿En qué zonas trabajan?",
      answer: "Operamos principalmente en Zona Norte y AMBA, aunque podemos evaluar proyectos en otras localidades.",
    },
    {
      id: "pregunta5",
      question: "5. ¿Cuánto tarda una obra en promedio?",
      answer: "Depende del tipo y tamaño de la obra. Una remodelación pequeña puede demorar semanas, mientras que una obra llave en mano lleva varios meses. Siempre te informamos los plazos antes de comenzar.",
    },
    {
      id: "pregunta6",
      question: "6. ¿Qué significa obra llave en mano?",
      answer: "Significa que nos encargamos de todo el proceso: diseño, materiales, ejecución y terminaciones. Te entregamos la obra lista para usar.",
    },
    {
      id: "pregunta7",
      question: "7. ¿Puedo elegir los materiales?",
      answer: "Sí, podés elegirlos vos o podés delegar en nosotros según el presupuesto acordado.",
    },
    {
      id: "pregunta8",
      question: "8. ¿Qué formas de pago aceptan?",
      answer: "Trabajamos con depósitos, transferencias bancarias, débitos, y efectivo.",
    },
    {
      id: "pregunta9",
      question: "9. ¿Cómo solicito una visita o presupuesto?",
      answer: "Simplemente escribinos por este medio con tus datos de contacto y la descripción de la obra, y coordinamos una visita.",
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Preguntas Frecuentes | CHIAMO Construcciones</title>
        <meta name="description" content="Encuentre respuestas a las preguntas más comunes sobre nuestros servicios de construcción, presupuestos y garantías." />
      </Helmet>
      <div className="bg-chiamo-light pt-40 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-chiamo-dark mb-4">
              Preguntas Frecuentes
            </h1>
            <p className="text-lg text-chiamo-text max-w-2xl mx-auto">
              Aquí encontrarás respuestas a las dudas más habituales. Si no encuentras lo que buscas, no dudes en <Link to="/contacto" className="text-chiamo-green font-semibold hover:underline">contactarnos</Link>.
            </p>
            <div className="w-24 h-1 bg-chiamo-green mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                id={faq.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                  <h2 className="text-2xl font-semibold text-chiamo-dark mb-3">{faq.question}</h2>
                  <p className="text-chiamo-text leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PreguntasFrecuentesPage;
