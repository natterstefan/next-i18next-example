import pkg from 'next-i18next/package.json'

export const Footer = () => {

  return (
    <footer className="text-sm pt-16">
      <p>
        next-i18next v
        {pkg.version}
      </p>
    </footer>
  )
}
