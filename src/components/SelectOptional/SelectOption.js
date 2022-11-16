// Hooks
import { useState } from "react";

// CSS
import "./SelectOption.css";

// Components
import CursosTecnicos from "../Forms/CursosTecnicos";
import Escolas from "../Forms/Escolas";
import FaculdadesForm from "../Forms/FaculdadesForm";
import PosGraudacao from "../Forms/PosGraudacao";

const SelectOption = () => {
  const [componentsString, setComponentsString] = useState("instagram");

  const selectForm = (e) => {
    setComponentsString(e.target.value);

    const radios = document.querySelectorAll("input[name='formSelector']");
    radios.forEach((rad) => {
      const newClass = "." + rad.id;
      const label = document.querySelector(newClass);

      if (rad.checked) {
        label.classList.add("white");
      } else {
        label.classList.remove("white");
      }
    });
  };
  return (
    <main>
      <div className="option_Container">
        <div className="option_left">
          <h3 className="options_h3_mobile">Escolha um meio de contato:</h3>
          <div className="option_content">
            <h3 className="options_h3_desktop">Escolha um meio de contato:</h3>
            <i className="bi bi-file-arrow-up scroll_icon"></i>
            <label className="one white">
              <p><i className="bi bi-instagram">&nbsp;</i>Instagram</p>
              <input
                type="radio"
                id="one"
                name="formSelector"
                onClick={selectForm}
                defaultValue="instagram" 
                defaultChecked
              ></input>
            </label>

            <label className="two">
              <p><i className="bi bi-telegram">&nbsp;</i>Telegram</p>
              <input
                type="radio"
                id="two"
                name="formSelector"
                onClick={selectForm}
                defaultValue="telegram"
              ></input>
            </label>

            <label className="tree">
              <p><i className="bi bi-whatsapp">&nbsp;</i>Whatsapp</p>
              <input
                type="radio"
                id="tree"
                name="formSelector"
                onClick={selectForm}
                defaultValue="whatsapp"
              ></input>
            </label>

            <label className="four">
              <p><i className="bi bi-linkedin"> &nbsp;</i>LinkedIn</p>
              <input
                type="radio"
                id="four"
                name="formSelector"
                onClick={selectForm}
                defaultValue="linkedin"
              ></input>
            </label>

          </div>
          <div className="option_form">
            {componentsString === "instagram" && <FaculdadesForm />}
            {componentsString === "telegram" && <PosGraudacao />}
            {componentsString === "whatsapp" && <Escolas />}
            {componentsString === "linkedin" && <CursosTecnicos />}
          </div>
        </div>
        <div className="option_right">
          <div className="board">
            <p>Entre em contato conosco escolhendo as opções <i class="bi bi-arrow-down-short"></i></p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SelectOption;
