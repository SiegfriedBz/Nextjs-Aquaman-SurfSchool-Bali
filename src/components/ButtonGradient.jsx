const ButtonGradient = ({
  btnVariant = 'btn-gradient',
  padding = 'px-8 py-4',
  extraClasses = '',
  children,
}) => {
  return (
    <button className={`btn ${btnVariant} ${padding} ${extraClasses}`}>
      {children}
    </button>
  )
}

export default ButtonGradient
