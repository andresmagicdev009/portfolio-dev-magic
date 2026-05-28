import React, { useRef, useState, useCallback } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import epagalApi from '../assets/images-exp/epagal-routing-app/api.png';
import epagalApi1 from '../assets/images-exp/epagal-routing-app/api1.png';
import epagalLogin from '../assets/images-exp/epagal-routing-app/login.jpg';
import epagalLogin1 from '../assets/images-exp/epagal-routing-app/login1.jpg';

import fisioLabLogin from '../assets/images-exp/fisiolab-system/login.png';
import fisioLabPacientes from '../assets/images-exp/fisiolab-system/pacientes-view.png';
import fisioLabFicha from '../assets/images-exp/fisiolab-system/ficha paciente.png';
import fisioLabFicha1 from '../assets/images-exp/fisiolab-system/ficha paciente 1.png';

import lenaHeader from '../assets/images-exp/leña-quiteña/header.png';
import lenaGallery from '../assets/images-exp/leña-quiteña/gallery.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'ePagal Routing App',
    description:
      'Aplicación móvil diseñada para la gestión de recolección de basura en la ciudad de Latacunga. Permite el enrutamiento de vehículos, gestión de pagos y autenticación segura con panel de API REST.',
    images: [epagalLogin, epagalLogin1, epagalApi, epagalApi1],
  },
  {
    id: 2,
    title: 'Fisiolab System',
    description: 'Sistema de gestión de historias clínicas y agendamiento de citas para clínicas de fisioterapia. Incluye fichas de pacientes y seguimiento de tratamientos.',
    images: [fisioLabLogin, fisioLabPacientes, fisioLabFicha, fisioLabFicha1],
  },
  {
    id: 3,
    title: 'Leña Quiteña',
    description: 'Sitio web corporativo para empresa de distribución de leña con galería y secciones de presentación.',
    images: [lenaHeader, lenaGallery],
  },
];

const ProjectCarousel = ({ images, alt, objectFit = 'cover' }) => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent(i => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent(i => (i + 1) % images.length),
    [images.length]
  );

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${alt} ${idx + 1}`}
            className={`w-full h-full shrink-0 ${objectFit === 'contain' ? 'object-contain' : 'object-cover object-top'}`}
            style={{ minWidth: '100%' }}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="siguiente"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === current ? 'bg-white scale-125' : 'bg-white/40'
                }`}
                aria-label={`ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
        },
      }
    );
  }, []);

  const [p1, p2, p3] = projects;

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT — proyecto principal */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper bg-[#f0f2f8]">
              <ProjectCarousel images={p1.images} alt={p1.title} objectFit="contain" />
            </div>
            <div className="text-content">
              <h2>{p1.title}</h2>
              <p className="text-white md:text-xl">{p1.description}</p>
            </div>
          </div>

          {/* RIGHT — dos proyectos apilados */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#f0f2f8]">
                <ProjectCarousel images={p2.images} alt={p2.title} objectFit="contain" />
              </div>
              <h2>{p2.title}</h2>
              <p className="text-white-50 text-sm mt-2">{p2.description}</p>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#1a1a2e]">
                <ProjectCarousel images={p3.images} alt={p3.title} />
              </div>
              <h2>{p3.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
