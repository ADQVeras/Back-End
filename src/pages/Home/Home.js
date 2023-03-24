// CSS
import styles from "./Home.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../Home/useAuthentication";

// react
import { useState } from "react";



// components

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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { style } from "@mui/system";



const Home = () => {
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



  return (
    <div className={styles.home}>

      <div className={styles.navbar}>
        <i>Impulsione</i>  by Crefisa
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

        <Swiper className={styles.slide}
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          navigation>


          <SwiperSlide >
            <div className={styles.tela1}>


              <div className={styles.explorebutton}><a href="">EXPLORE O CURSO</a></div>
              <div><h8 className={styles.h2}>Novidade em cursos</h8></div>
              <div><h6 className={styles.h1}>Gestão de projetos para aumentar a produtividade na sua empresa</h6></div>

            </div>
          </SwiperSlide>




          <SwiperSlide>
            <div className={styles.tela2}>

              <Link to="/posts/create" className={styles.explorebutton}><a href="">EXPLORE O CURSO</a></Link>
              <div><h8 className={styles.h2}>Novidade em cursos</h8></div>
              <div><h6 className={styles.h1}>Gestão de projetos para aumentar a produtividade na sua empresa</h6></div>

            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className={styles.tela3}>

              <div className={styles.explorebutton}><a href="">EXPLORE O CURSO</a></div>
              <div><h8 className={styles.h2}>Novidade em cursos</h8></div>
              <div><h6 className={styles.h1}>Gestão de projetos para aumentar a produtividade na sua empresa</h6></div>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.tela4}>

              <div className={styles.explorebutton}><a href="">EXPLORE O CURSO</a></div>
              <div><h8 className={styles.h2}>Novidade em cursos</h8></div>
              <div><h6 className={styles.h1}>Gestão de projetos para aumentar a produtividade na sua empresa</h6></div>

            </div>
          </SwiperSlide>



        </Swiper>

        <button className={styles.bt1}><box className={styles.box1}></box><nobr>NOME SERVIÇO AQUI</nobr></button>

        <button className={styles.bt2}><box className={styles.box1}></box><nobr>NOME SERVIÇO AQUI</nobr></button>

        <button className={styles.bt3}><box className={styles.box1}></box><nobr>NOME SERVIÇO AQUI</nobr></button>

      


      <div className={styles.tela}></div>





      <Link to="/service" className={styles.icone1} ><img src="img/icones/serviços.png"></img> </Link>

      <Link to="/Cursos" className={styles.icone2} ><img src="img/icones/Vector.png"></img></Link>

      <Link to="/forum" className={styles.icone3} ><img src="img/icones/akar-icons_network.png"></img></Link>

      <Link to="/posts/create" className={styles.icone4} ><img src="img/icones/Group.png"></img></Link>

      <Link to="/posts/create" className={styles.icone5} ><img src="img/icones/Cel.png"></img></Link>

      <Link to="/financeiro" className={styles.icone6} ><img src="img/icones/money.png"></img></Link>

      <Link to="/" className={styles.sair} onClick={logout} >SAIR</Link>





      <Link to="/posts/create" className={styles.b1}>Que tal mais capital para investir no seu negócio?</Link>

      <Link to="/posts/create" className={styles.b2}>Como seria um lugar para gerenciar seu financeiro com condições exclusivas?</Link>

      <Link to="/posts/create" className={styles.b3}>Qual o melhor dia para seus pagamentos cairem na conta? Por aqui, é quando você preferir</Link>





    </div>

  );
};

export default Home;


