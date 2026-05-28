import React from 'react'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { div } from 'three/tsl'

const positionMap = {
  top: 'top-10 left-1/2 -translate-x-1/2',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  bottom: 'bottom-10 left-1/2 -translate-x-1/2',
  'top-right': 'top-20 right-6',
}

const AlertCard = React.forwardRef(({ text, img, styles, position = 'center', modal = false }, ref) => {
  const posClass = positionMap[position] ?? positionMap.center

  return (
    <>
      {modal && <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" />}

      <div
        ref={ref}
        className={`fixed ${posClass} z-50 w-[380px] max-w-[95vw]`}
        style={{ visibility: 'hidden' }}
      >
        <Alert className={`relative overflow-hidden border-[#61DAFB]/40 bg-black-200/95 px-6 py-5 shadow-[0_0_25px_rgba(97,218,251,0.15)] backdrop-blur-xl ${styles ?? ''}`}>

          <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#61DAFB]/10 blur-[40px] pointer-events-none" />

          <AlertTitle className="text-[10px] font-black tracking-[0.2em] text-[#61DAFB]/70 uppercase mb-2">
            Notificación del Sistema
          </AlertTitle>

          <AlertDescription className="flex items-center justify-between gap-2">
            <p className="text-base font-bold text-white leading-tight flex-1">
              {text}
            </p>

            {img && (
              <div className='shrink-0'>
                <img src={img} alt="alert icon" className="w-20 h-20 object-contain" />
              </div>

            )}
          </AlertDescription>

          <div className="absolute bottom-0 left-0 h-0.75 bg-[#61DAFB] w-full opacity-40 shadow-[0_0_10px_#61DAFB]" />
        </Alert>
      </div>
    </>
  )
})

AlertCard.displayName = 'AlertCard'

export default AlertCard
