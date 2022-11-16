import { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [hoverModal1, setHoverModal1] = useState("hover_modal_none");
  const [hoverModal2, setHoverModal2] = useState("hover_modal_none");
  const [hoverModal3, setHoverModal3] = useState("hover_bag_none");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
  }
  return (
    <header>
      <div className="left_header">
        <Link to="/">
        {/*<img
          src="/img/logo_educa_2021.png"
          alt="educa logo"
          className="logo_educa"
  />*/} <h2>Seu Logo</h2>
        </Link>
        <Link to="*">
        {/*<div className="container_contact">
          <i className={`bi bi-telephone iconTop`}></i>
          <i className={`bi bi-envelope-paper iconTop`}></i>
          <i className={`bi bi-whatsapp iconTop`}></i>
</div>*/}
        </Link>
      </div>
      <div className="right_header">
        {/*<span onMouseEnter={() => setHoverModal1("hover_modal")} onMouseLeave={() => setHoverModal1("hover_modal_none")}>
          <i className="bi bi-info-circle iconTop" ></i>
          <p className="iconInfo">Como Funciona</p>
        </span>
        <div className={hoverModal1} onMouseEnter={() => setHoverModal1("hover_modal")} onMouseLeave={() => setHoverModal1("hover_modal_none")}>
          <div className="hover_top">
            <div className="info_container">
              <i className="bi bi-1-square"></i>
              <i className="bi bi-geo-alt"></i>
              <p>Escolha onde deseja estudar</p>
            </div>
            <div className="info_container">
              <i className="bi bi-2-square"></i>
              <i className="bi bi-pencil-square"></i>
              <p>Faça sua pré-matrícula</p>
            </div>
            <div className="info_container">
              <i className="bi bi-3-square"></i>
              <i className="bi bi-arrow-repeat"></i>
              <p>Comece a estudar com a bolsa de estudo</p>
            </div>
          </div>
          <div className="hover_bottom">
            <a href="https://www.educamaisbrasil.com.br/como-funciona">Principais Dúvidas</a>
          </div>
        </div>
        <span onMouseEnter={() => setHoverModal2("hover_cpf")} onMouseLeave={() => setHoverModal2("hover_modal_cpf")}>
          <i className="bi bi-person-circle iconTop"></i>
          <p className="iconInfo">Login</p>
        </span>
        <div className={hoverModal2} onMouseEnter={() => setHoverModal2("hover_cpf")} onMouseLeave={() => setHoverModal2("hover_modal_cpf")}>
          <div className="hover_top">
            <div className="container_cpf_ballon">
              
              <form onSubmit={handleSubmit}>
                <i className="bi bi-person-lines-fill"></i>
                <input type="number" placeholder="Insira seu CPF" ></input>
                <button type="submit"><i className="bi bi-box-arrow-right pointer" ></i></button>
              </form>
            </div>
          </div>
        </div>
        <span onMouseEnter={() => setHoverModal3("hover_bag")} onMouseLeave={() => setHoverModal3("hover_bag_none")}>
          <i className="bi bi-handbag iconTop"></i>
          <p className="iconInfo">Mochila</p>
        </span >
        <div className={hoverModal3} onMouseEnter={() => setHoverModal3("hover_bag")} onMouseLeave={() => setHoverModal3("hover_bag_none")}>
          <div className="hover_top">
            <div className="container_bag_ballon">
              <p>Sua mochila está vazia!</p>
            </div>
          </div>
        </div>
*/}
      </div>
    </header>
  );
};

export default Header;
