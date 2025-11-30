import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { Target, Eye, Heart, TreePine, PawPrint } from 'lucide-react';

const TeamMember = ({ name, role, description, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden my-4"
  >
    <div className="md:w-1/3 p-4">
      <img
        src={image}
        alt={`Foto de ${name}`}
        className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover object-center mx-auto shadow-lg border-4 border-chiamo-base"
      />
    </div>
    <div className="md:w-2/3 p-6">
      <h3 className="text-2xl font-bold text-chiamo-dark font-logo">{name}</h3>
      <p className="text-chiamo-green font-semibold mb-3">{role}</p>
      <p className="text-chiamo-text leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const ObraCard = ({ title, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="bg-white rounded-lg shadow-lg overflow-hidden group"
  >
    <div className="relative h-60">
      <img
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{title}</h3>
    </div>
  </motion.div>
);

const QuienesSomosPage = () => {
  const team = [
    {
      name: 'Damián',
      role: 'Licenciado en Administración de Empresas con Diplomatura Superior en Dirección de Proyectos',
      description: 'Aporta la mirada estratégica, la planificación y la gestión eficiente que sostienen cada proyecto.',
      image: 'https://sorteomix.com.ar/assets/image/Dami.jpeg'
    },
    {
      name: 'Paola',
      role: 'Técnica en Recursos Humanos',
      description: 'Es el corazón humano del equipo, quien cuida el vínculo con las personas, el bienestar del equipo y la relación cercana con cada cliente.',
      image: 'https://sorteomix.com.ar/assets/image/Pao.jpeg'
    },
    {
      name: 'Matías',
      role: 'Arquitecto',
      description: 'Es el creador de las formas, el responsable de convertir las ideas en espacios reales, funcionales y llenos de identidad.',
      image: 'https://sorteomix.com.ar/assets/image/Mati.jpeg'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Nuestra Misión (Es lo que hacemos)',
      content: 'Tenemos la misión de transformar el proceso de construcción en una experiencia excepcional y transparente para nuestros clientes, garantizando excelencia en cada obra. Logramos esto mediante la aplicación de métodos, herramientas, e insumos de última generación, el estricto cumplimiento de las normativas de calidad y de seguridad, así como la creación de vínculos de confianza duraderos con el cliente basándonos en el respeto y la transparencia, asegurando que cada proyecto refleje sus sueños y necesidades.'
    },
    {
      icon: Eye,
      title: 'Nuestra Visión (Es la meta)',
      content: 'Nuestra Visión es ser referentes en la industria de la construcción en el partido de Escobar. Buscamos liderar proyectos de envergadura que redefinan los estándares de calidad, materializando visiones audaces y dejando un legado de excelencia en cada obra. Nos comprometemos a transformar positivamente el entorno a través de la arquitectura sostenible, utilizando tecnologías y prácticas ecológicas. Queremos que los clientes nos perciban como una empresa honesta, transparente y comprometida con el futuro del planeta, construyendo un patrimonio que perdure y enriquezca a la comunidad y al medio ambiente.'
    },
    {
      icon: Heart,
      title: 'Nuestros Valores',
      content: 'Creemos en el trabajo en equipo y la transparencia para impulsar la innovación. Nos comprometemos con el medio ambiente y la sostenibilidad del planeta aplicando la mejora continua en cada proyecto para buscar un impacto ambiental mínimo en nuestras obras. Tomamos decisiones basadas en nuestro código de ética, para asegurar un crecimiento rentable siempre alineado con nuestra misión de calidad y precio justo.'
    }
  ];

  const obras = [
    {
      title: "Construcción de Viviendas",
      image: "https://sorteomix.com.ar/assets/image/construccion_vivienda.JPG"
    },
    {
      title: "Refacciones",
      image: "https://sorteomix.com.ar/assets/image/refaccion.jpeg"
    },
    {
      title: "Obras comerciales",
      image: "https://sorteomix.com.ar/assets/image/comerciales.jpeg"
    },
    {
      title: "Obras industriales",
      image: "https://sorteomix.com.ar/assets/image/industrial.jpeg"
    },
    {
      title: "Obras de infraestructura",
      image: "https://sorteomix.com.ar/assets/image/infaestructura.jpeg"
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Quiénes Somos | CHIAMO Construcciones</title>
        <meta name="description" content="Nuestra historia, nuestro equipo y nuestro compromiso con un futuro más humano, verde y solidario." />
      </Helmet>
      <div className="bg-chiamo-light pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-chiamo-dark mb-4 font-logo">Quiénes somos</h1>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <motion.img
                src="https://sorteomix.com.ar/assets/image/grupo_1.jpeg"
                alt="Equipo de CHIAMO Construcciones con cascos de seguridad en obra"
                className="w-full h-64 md:h-64 rounded-lg shadow-lg object-cover object-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.img
                src="https://sorteomix.com.ar/assets/image/grupo_2.jpg"
                alt="Equipo de CHIAMO Construcciones en reunión de trabajo"
                className="w-full h-64 md:h-64 rounded-lg shadow-lg object-cover object-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>

            <p className="text-lg text-chiamo-text leading-relaxed mt-4 text-justify">Chiamo es un proyecto que nació de la amistad y del deseo compartido de construir algo más que obras: construir confianza, vínculos y sueños. Somos tres amigos que decidimos unir nuestras experiencias, nuestras profesiones y, sobre todo, nuestros valores para transformar la forma en que se vive cada obra.</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center text-chiamo-dark mb-10">Un Equipo, Una Vocación</h2>
            {team.map((member, index) => (
              <TeamMember key={member.name} {...member} delay={index * 0.2} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <p className="text-lg text-chiamo-text leading-relaxed text-justify">Cada uno de nosotros cuenta con más de 20 años de experiencia en su área por lo que encontramos en este proyecto el punto común entre la profesión y los afectos, por ello estamos convencidos de hacer las cosas con pasión, con ética y con un profundo respeto por quienes confían en nosotros.</p>
          </motion.div>

          <section className="py-20 bg-white rounded-xl shadow-lg">
            <div className="container mx-auto px-4">
              <div className="space-y-12">
                {values.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="flex flex-col md:flex-row items-center gap-8"
                  >
                    <div className="bg-chiamo-green w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white" size={40} />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-chiamo-dark mb-3">{item.title}</h3>
                      <p className="text-chiamo-text leading-relaxed">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="bg-white rounded-xl shadow-lg p-10 max-w-5xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center text-chiamo-dark mb-10">Nuestro Compromiso Social</h2>
            <div className="grid md:grid-cols-2 gap-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-chiamo-green w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <TreePine className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-bold text-chiamo-dark mb-2">Huella Verde</h3>
                <p className="text-chiamo-text text-justify">Colaboramos activamente en la plantación de árboles contribuyendo a generar más espacios verdes y aire puro.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-chiamo-green w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <PawPrint className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-bold text-chiamo-dark mb-2">Corazón Solidario</h3>
                <p className="text-chiamo-text text-justify">Apoyamos a refugios de perros y gatos mediante la donación de cuchas fabricadas por nosotros.</p>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center text-xl font-semibold text-chiamo-green mt-12 text-center"
            >
              Porque para nosotros construir es dejar una huella que hable de lo que somos: amigos, profesionales y soñadores comprometidos con un futuro más humano, más verde y solidario.
            </motion.p>
          </div>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-chiamo-dark mb-4">Nuestras obras</h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-chiamo-dark mb-4">Fases de las obras</h3>
                  <ul className="space-y-4 text-chiamo-text">
                    <li><strong className="text-chiamo-dark">Planificación y diseño:</strong> Se elabora el proyecto, incluyendo la obtención de permisos y la coordinación de nuestros profesionales.</li>
                    <li><strong className="text-chiamo-dark">Ejecución de la obra:</strong> Se llevan a cabo los trabajos en el terreno, como la cimentación, la estructura y las instalaciones.</li>
                    <li><strong className="text-chiamo-dark">Acabados:</strong> Se finalizan los detalles estéticos y de funcionamiento, incluyendo la instalación de servicios básicos.</li>
                    <li><strong className="text-chiamo-dark">Entrega:</strong> El inmueble queda limpio y listo para ser habitado o utilizado.</li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-chiamo-dark mb-4">Tipos de trabajos que realizamos</h3>
                  <ul className="space-y-4 text-chiamo-text">
                    <li><strong className="text-chiamo-dark">Obra nueva:</strong> Desarrollamos construcciones desde cero, acompañando al cliente en todo el proceso: planificación, dirección técnica, ejecución y entrega final, asegurando calidad, cumplimiento de plazos y eficiencia en cada etapa.</li>
                    <li><strong className="text-chiamo-dark">Reformas y remodelaciones:</strong> Intervenimos en inmuebles existentes para mejorar su habitabilidad, confort y calidad, abordando desde pequeñas renovaciones hasta remodelaciones completas, siempre con un enfoque profesional y funcional.</li>
                    <li><strong className="text-chiamo-dark">Mantenimiento y reparación:</strong> Llevamos a cabo tareas de conservación, reparación y sustitución de instalaciones para asegurar el correcto funcionamiento y la durabilidad del inmueble. Ofrecemos servicio garantizado y descuentos exclusivos para clientes recurrentes.</li>
                  </ul>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {obras.map((obra, index) => (
                  <ObraCard key={obra.title} title={obra.title} image={obra.image} delay={index * 0.2} />
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
};

export default QuienesSomosPage;