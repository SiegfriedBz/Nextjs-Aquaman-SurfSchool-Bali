import Link from 'next/link'

export const ButtonGradient = ({
  variant = 'btn-gradient',
  padding = 'px-8 py-4',
  extraClasses = '',
  onClick = () => {},
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${variant} ${padding} ${extraClasses}`}
    >
      {children}
    </button>
  )
}

export const LinkGradient = ({
  variant = 'btn-gradient-link',
  padding = 'px-8 py-4',
  extraClasses = '',
  href = process.env.NEXT_PUBLIC_WHATSAPP_LINK || '/',
  target = '_blank',
  children,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`base-link btn-link ${variant} ${padding} ${extraClasses}`}
    >
      {children}
    </Link>
  )
}
