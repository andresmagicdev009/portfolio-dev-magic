import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useSkillAnimations = (sectionRef) => {
  useGSAP(() => {
    gsap.from('.left-col', {
      opacity: 0,
      x: -60,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 78%',
        invalidateOnRefresh: true,
      },
    })

    gsap.fromTo('.tech-card',
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.left-col',
          start: 'top 80%',
          once: true,
        },
      }
    )

    const bars = gsap.utils.toArray('.skill-bar-fill', sectionRef.current)
    bars.forEach((bar) => {
      const level = Number(bar.dataset.level)
      const percentEl = bar.closest('.tech-card')?.querySelector('.skill-percent')
      const barColor = bar.style.backgroundColor
      const counter = { val: 0 }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(bar,
        { width: '0%' },
        { width: `${level}%`, duration: 1.6, ease: 'power3.out' }
      ).to(counter, {
        val: level,
        duration: 1.6,
        ease: 'power3.out',
        onUpdate: () => {
          if (percentEl) percentEl.textContent = `${Math.round(counter.val)}%`
        },
      }, '<').to(bar, {
        boxShadow: `0 0 18px ${barColor}, 0 0 35px ${barColor}70`,
        duration: 0.9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }, '>')
    })
  }, { scope: sectionRef })
}

export default useSkillAnimations
