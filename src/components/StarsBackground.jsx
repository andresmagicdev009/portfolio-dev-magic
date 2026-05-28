import { useEffect, useRef } from 'react'

const StarsBackground = ({ starCount = 180 }) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationId

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const stars = Array.from({ length: starCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.4 + 0.2,
            opacity: Math.random(),
            speed: Math.random() * 0.015 + 0.004,
            dir: Math.random() > 0.5 ? 1 : -1,
        }))

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (const star of stars) {
                star.opacity += star.speed * star.dir
                if (star.opacity >= 1)  { star.opacity = 1;   star.dir = -1 }
                if (star.opacity <= 0.1) { star.opacity = 0.1; star.dir =  1 }

                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
                ctx.fill()
            }
            animationId = requestAnimationFrame(draw)
        }
        draw()

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
        }
    }, [starCount])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    )
}

export default StarsBackground
