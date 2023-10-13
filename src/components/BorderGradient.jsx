export const BorderFullGradient = ({
  padding = 'p-[0.2em]',
  rounded = 'rounded-[0.5em]',
  className = '',
  childrenWrapperColor = 'bg-cf-white dark:bg-cf-dark text-cf-dark dark:text-cf-white',
  childrenWrapperSize = 'h-full w-full',
  childrenWrapperExtraClasses = '',
  children,
}) => {
  return (
    <BorderBaseGradient
      padding={padding}
      rounded={rounded}
      className={className}
      childrenWrapperColor={childrenWrapperColor}
      childrenWrapperSize={childrenWrapperSize}
      childrenWrapperExtraClasses={childrenWrapperExtraClasses}
    >
      {children}
    </BorderBaseGradient>
  )
}

export const BorderBottomGradient = ({
  padding = 'p-0 pb-[0.1em] ',
  className = '',
  children,
}) => {
  return (
    <BorderBaseGradient padding={padding} className={className}>
      {children}
    </BorderBaseGradient>
  )
}

export const BorderTopGradient = ({
  padding = 'p-0 pt-[0.1em] ',
  className = '',
  children,
}) => {
  return (
    <BorderBaseGradient padding={padding} className={className}>
      {children}
    </BorderBaseGradient>
  )
}

const BorderBaseGradient = ({
  padding = '',
  rounded = '',
  className = '',
  childrenWrapperColor = 'bg-cf-white dark:bg-cf-dark text-cf-dark dark:text-cf-white',
  childrenWrapperSize = 'h-full w-full',
  childrenWrapperExtraClasses = '',
  children,
}) => {
  return (
    <div
      className={`border-gradient h-full w-full ${rounded} ${padding} ${className}`}
    >
      <div
        className={`h-full w-full overflow-hidden ${rounded} ${childrenWrapperSize} ${childrenWrapperColor} ${childrenWrapperExtraClasses} `}
      >
        {children}
      </div>
    </div>
  )
}
