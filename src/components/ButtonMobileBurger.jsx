const ButtonMobileBurger = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <button
      id='button-mobile-burger'
      className={`${
        modalIsOpen ? 'toggle-mobile-btn' : ''
      } relative right-0 ms-4 h-8 w-8 rounded-2xl text-3xl`}
      onClick={() => setModalIsOpen((prev) => !prev)}
    >
      <div
        className={`absolute top-3.5 h-1 w-4 ${
          !modalIsOpen ? 'animate-pulse' : ''
        } rounded bg-ternary transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-cf-dark before:transition-all before:duration-500 before:content-[""] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-cf-dark after:transition-all after:duration-500 after:content-[""] before:dark:bg-cf-white after:dark:bg-cf-white`}
      ></div>
    </button>
  )
}

export default ButtonMobileBurger
