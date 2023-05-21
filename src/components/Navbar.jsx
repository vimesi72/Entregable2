import { useState } from "react";

const Navbar = ({valueOut}) => {

  const [value, setValue] = useState("")

  function handleKeyEnter(e) {
    if(e.key === "Enter") valueOut(value)
  }

  function handleClickDark(){
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
        Aplicación del Tiempo
        </a>
        <div className="nav__menu">
          <input type="text" onKeyDown={handleKeyEnter} onChange={ (e) => setValue(e.target.value) } placeholder="Ingrese una ciudad y pulse ENTER" />
        </div>
        <div className="nav__buttons">
          <button type="button" onClick={handleClickDark} className="nav__btn btn--dark">
            <i id="i--dark" className="bx bxs-sun"></i> O
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;