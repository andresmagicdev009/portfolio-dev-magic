import React from 'react'
import FooterLogo from '../components/FooterLogo'

const socialLinks = [
  {
    id: 'name',
    label: 'Andres magic',
    href: '#hero',
    icon: null,
    isText: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/AndresR0910x',
    icon: null,
    isText: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    icon: '/images/linkedin.png',
    isText: false,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/',
    icon: '/images/x.svg',
    isText: false,
  },
]

const Footer = () => {
  return (
    <footer className="w-full bg-black-100 border-t border-black-200 py-10 px-5 md:px-20">
      <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">

        {/* Brand col */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
          <FooterLogo
            href={socialLinks[0].href}
            label={socialLinks[0].label}
            icon={socialLinks[0].icon}
            isText={socialLinks[0].isText}
          />
          <p className="text-xs text-blue-50">
            Full-stack developer. Building cool stuff.
          </p>
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:col-span-4" />

        {/* Social links col */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-50">
            Connect
          </p>
          <div className="flex flex-col gap-3">
            {socialLinks.slice(1).map((link) => (
              <FooterLogo
                key={link.id}
                href={link.href}
                label={link.label}
                icon={link.icon}
                isText={link.isText}
              />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="col-span-12 border-t border-black-200 pt-6 flex items-center justify-between flex-wrap gap-3">
          <p className="text-xs text-blue-50">
            © {new Date().getFullYear()} Andres magic. All rights reserved.
          </p>
          <p className="text-xs text-blue-50">Built with React + Three.js</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
