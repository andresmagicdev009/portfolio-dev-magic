import React from 'react'

const FooterLogo = ({ href, label, icon, isText = false }) => {
  return (
    <a
      href={href}
      target={isText ? '_self' : '_blank'}
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-2 text-white-50 hover:text-white transition-colors duration-200"
    >
      {icon && (
        <img
          src={icon}
          alt={label}
          className="w-6 h-6 object-contain"
        />
      )}
      <span className="text-sm font-medium">{label}</span>
    </a>
  )
}

export default FooterLogo
