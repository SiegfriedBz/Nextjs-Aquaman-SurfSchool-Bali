import Link from 'next/link'

export const ButtonAsGradient = ({
  As = 'Link',
  variant = 'btn-as-gradient',
  padding = 'py-2 md:py-4',
  extraClasses = '',
  children,
  ...rest
}) => {
  const RenderAs = As === 'Link' ? Link : 'button'

  return (
    <RenderAs
      {...rest}
      className={`btn-as w-1/2 whitespace-nowrap text-center ${variant} ${padding} ${extraClasses}`}
    >
      {children}
    </RenderAs>
  )
}
