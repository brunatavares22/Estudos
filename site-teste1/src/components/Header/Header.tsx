import React from 'react';
import "./Header.css";
import logo from "../../assets/saraiva-logo.svg";
import menu from "../../assets/menu.png";
import lupa from "../../assets/lupa2.png"
import coração from "../../assets/coração.png"
import usuario from"../../assets/perfil-de-usuario.png"
import cesta from"../../assets/cesta.png"
const Header = () => {
  return (
    
    <header className='header'>
      
      <img src={logo} alt="logo saraiva" className='logo' />
      <img src={menu} alt="icone menu" className='menu'/>
      <p className='p1'>Categorias</p>
      <input id= "placeholder-text" type="text" alt='entrada de texto' className='input1'placeholder='O que você está buscando?'/>
      <img src={lupa} alt="icone de busca" className='lupa'/>
      <div className='heart-text'>
        <button className='button1'>
        <img src={coração} alt="icone coração" className='coração'/>
         <p className='p2'>Favoritos</p>
         </button>
      </div>
      <div className='user-text'>
      <button className='button1'>
        <img src={usuario} alt="icone usuario" className='usuario'/>
         <p className='p3'>Entrar</p>
         </button>
      </div>
      <div className='cesta-text'>
      <button className='button1'>
        <img src={cesta} alt="icone cesta" className='cesta'/>
         <p className='p4'>Minha cesta</p>
         </button>
      </div>
      </header>
  )
}

export default Header;
