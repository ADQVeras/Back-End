// CSS
import styles from "./chat.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../Chat/useAuthentication";
import { useFetchDocuments } from "../../../src/hooks/useFetchDocuments";


// react
import React, { useState } from "react";

// icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import ShareIcon from '@mui/icons-material/Share';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SearchIcon from '@mui/icons-material/Search';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


const Chat = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");


  const { logout } = useAuthentication();

  const navigate = useNavigate();

  const [query, setQuery] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  console.log(loading);

  const observer = new IntersectionObserver(entries => {
    console.log(entries)
    entries[0].target.classList.add(".Nomedos-off")
  })

  Array.from(document.querySelectorAll('.Nomedos')).forEach(element => {
    observer.observe(element)
  })



  return (

    <div className={styles.home}>


      <div className={styles.servico}>COTAÇÕES </div>

      <div className={styles.cotacao2}>
        <div className={styles.pedido} >Pedido #002</div>
        <div className={styles.money} >R$ 00</div>
        <div className={styles.nome} >Nome do serviço tal</div>
        <div className={styles.data} >dd/mm/yyyy - dd/mm/yyyy</div>
        <div className={styles.vcotacao} >VER COTAÇÃO</div>
      </div>

      <div className={styles.cotacao2}>
        <div className={styles.pedido} > Pedido #002</div>
        <div className={styles.money} > R$ 00</div>
        <div className={styles.nome} > Nome do serviço tal</div>
        <div className={styles.data} > dd/mm/yyyy - dd/mm/yyyy</div>
        <div className={styles.vcotacao}  >VER COTAÇÃO</div>
      </div>


      <form onSubmit={handleSubmit}>
        <input
          className={styles.pesquisa2}
          type="text"
          placeholder="Pesquisa..."
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className={styles.pesquisa}><SearchIcon /></button>


      </form>
      <button className={styles.todos}>TODOS</button>
      <button className={styles.cliente}>CLIENTE</button>
      <button className={styles.contratação}>CONTRATAÇÃO</button>


      <button className={styles.botão1} >

        <div className={styles.box1} ></div>
        <div className={styles.bt1} >  Nome pessoa </div>
        <div className={styles.bt2} > Cliente </div>
        <div className={styles.bt3} > Lorem ipsum dolor sit amet, consectetu... </div>
        <div className={styles.bt4} > +2 </div>

      </button>

      <button className={styles.botão1} >

        <div className={styles.box1} ></div>
        <div className={styles.bt1} >  Nome pessoa </div>
        <div className={styles.bt2} > Negociação </div>
        <div className={styles.bt3} > Lorem ipsum dolor sit amet, consectetu... </div>
        <div className={styles.bt4} > +2 </div>

      </button>


      <button className={styles.botão1} >

        <div className={styles.box1} ></div>
        <div className={styles.bt1} >  Nome pessoa </div>
        <div className={styles.bt2} > Cotação </div>
        <div className={styles.bt3} > Lorem ipsum dolor sit amet, consectetu... </div>
        <div className={styles.bt4} > +2 </div>

      </button>



      <div class="Nomedos" className={styles.Nomedos}>NOME DO SERVIÇO AQUI</div>

      <div className={styles.Nomedos2}>Nome da pessoa</div>
      <Swiper
        direction="Vertical"
        className={styles.slide2}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",

        }}>

        <SwiperSlide>

          <div className={styles.cotacao4}>
            <div className={styles.pedido2} > Pedido #002 <i> R$00</i></div>
            <div className={styles.investimento} > INVESTIMENTO BASE <i> R$00</i></div>
            <div className={styles.adicional} > Adicional <i> R$00</i></div>
            <div className={styles.adicional2} > Adicional AQUI <i> R$00</i></div>

            <div className={styles.prazo} > Prazo </div>
            <div className={styles.data1} > dd/mm/yyyy - dd/mm/yyyy</div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.impulsione} > Impulsione - 11:11 </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.cotacaoaceita} > Você aceita a cotação?</div>
        </SwiperSlide>
        <SwiperSlide>
          <button className={styles.bsim} > SIM</button>
          <button className={styles.brenego} > RENEGOCIAR</button>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.linktexto} >O serviço foi aprovado e está tudo certo! Agora é só aceitar o contrato gerado para ambas as partes!</div>
        </SwiperSlide>

        <SwiperSlide>
          <button className={styles.bacesse} > Acesse os termos </button>
        </SwiperSlide>

        <SwiperSlide>1</SwiperSlide>

        <SwiperSlide>2</SwiperSlide>

        <SwiperSlide>3</SwiperSlide>
      </Swiper>
      <textarea className={styles.textoc3} placeholder="Escreva sua mensagem aqui.... ">

      </textarea>


      <div className={styles.tela}></div>




      <Link to="/service" className={styles.icone1} ><BusinessCenterIcon /></Link>

      <Link to="/Cursos" className={styles.icone2} ><ComputerIcon /></Link>

      <Link to="/forum" className={styles.icone3} ><ShareIcon /></Link>

      <Link to="/posts/create" className={styles.icone4} ><AccountBalanceIcon /></Link>

      <Link to="/posts/create" className={styles.icone5} ><PhoneIphoneIcon /></Link>

      <Link to="/financeiro" className={styles.icone6} ><AccountBalanceWalletIcon /></Link>

      <Link to="/" className={styles.sair} onClick={logout} >SAIR</Link>



    </div>

  );
};



export default Chat;
