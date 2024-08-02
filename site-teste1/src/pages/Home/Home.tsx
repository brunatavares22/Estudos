import React from 'react';
import  Header  from "../../components/Header/Header";
import  Header2  from "../../components/Header/Header2";
import Banner1 from "../../assets/banner1.jpeg";
import Imperfeitos from "../../assets/imperfeitos.webp"
import "./Home.css"


const Home = () => {
  return (
    <>cla
   <Header/>
   <Header2/>
   <div className='banner'>
    <img src={Banner1} alt="imagem banner" className='banner1'/>
   </div>
    <div className='p-a'>
    <p className='p6'>MAIS VENDIDOS</p>
    <a href="https://www.youtube.com/watch?v=rYKOuKaWEjg&list=RD4FaHeREoRUc&index=20">Ver mais</a>
    </div>
    <div className='card-1'>
    <img src={Imperfeitos} alt="livro imperfeitos" className='imperfeitos' />
    <p className='p7'>Imperfeitos</p>
    </div>
   </>
  )
}

export default Home;
