import Link from 'next/link'

export const ButtonAsGradient = ({
  As = 'button',
  variant = 'btn-as-gradient',
  padding = 'px-8 py-4',
  extraClasses = '',
  children,
  ...rest
}) => {
  const RenderAs = As === 'button' ? 'button' : Link

  return (
    <RenderAs
      {...rest}
      className={`btn-as ${variant} ${padding} ${extraClasses}`}
    >
      {children}
    </RenderAs>
  )
}
