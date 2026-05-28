import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { ClipLoader } from 'react-spinners'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/contact/ContactExperience'
import AlertCard from '../components/AlertCard'


const Contact = () => {

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const alertRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!alertRef.current) return
    gsap.set(alertRef.current, { x: 80, opacity: 0, visibility: 'visible' })
  }, [])

  useEffect(() => {
    if (!alertRef.current) return

    if (success) {
      gsap.fromTo(
        alertRef.current,
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      )
    } else {
      gsap.to(alertRef.current, {
        x: 80,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
      })
    }
  }, [success])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: 'Andrés'
    };

    emailjs.send(
      serviceId,
      templateId,
      emailParams,
      { publicKey: userId }
    )
      .then(() => {
        setForm({ name: '', email: '', message: '' })
        setSuccess(true)
        setTimeout(() => setSuccess(false), 5000)
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
    <AlertCard
      ref={alertRef}
      text="Correo enviado exitosamente !"
      img="/images/logos/email_sender.png"
      position="top-right"
      modal={false}
    />
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Contáctame"
          sub="¿Tienes un proyecto? Hablemos 🚀"
        />

        <div className="grid grid-cols-12 gap-8 mt-16 items-stretch">

          {/* LEFT — form */}
          <div className="col-span-12 xl:col-span-5">
            <div className='flex-center card-border rounded-xl p-6 md:p-10'>

           

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <label className="text-white-50 text-sm">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="bg-black-100 border border-black-200 rounded-xl px-5 py-4 text-white placeholder:text-white-50 focus:outline-none focus:border-white-50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white-50 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="bg-black-100 border border-black-200 rounded-xl px-5 py-4 text-white placeholder:text-white-50 focus:outline-none focus:border-white-50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white-50 text-sm">Mensaje</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="bg-black-100 border border-black-200 rounded-xl px-5 py-4 text-white placeholder:text-white-50 focus:outline-none focus:border-white-50 transition-colors resize-none"
                />
              </div>

              <button type="submit" disabled={loading}>
                <div className='cta-button group'>
                  <div className='bg-circle' />
                  {loading ? (
                    <ClipLoader color="#61DAFB" size={20} />
                  ) : (
                    <>
                      <p className='text'>Enviar mensaje</p>
                      <div className='arrow-wrapper'>
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    </>
                  )}
                </div>
              </button>
            </form>
             </div>
          </div>

          {/* RIGHT — 3D experience */}
          <div className="col-span-12 xl:col-span-7 h-96 xl:h-full">
            <ContactExperience />
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
