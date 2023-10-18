import Link from 'next/link'

export const ButtonAsGradient = ({
  As = 'Link',
  variant = 'btn-as-gradient',
  padding = 'px-8 py-2',
  extraClasses = '',
  children,
  ...rest
}) => {
  const RenderAs = As === 'Link' ? Link : 'button'

  return (
    <RenderAs
      {...rest}
      className={`btn-as w-1/2 text-center ${variant} ${padding} ${extraClasses}`}
    >
      {children}
    </RenderAs>
  )
}
