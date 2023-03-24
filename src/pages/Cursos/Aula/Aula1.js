// CSS
import styles from "../Aula/Aula1.module.css"

// hooks
import { useFetchDocuments } from "../../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../useAuthentication";

// react
import React, { useState } from "react";


// icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import ShareIcon from '@mui/icons-material/Share';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



/* rederização */


const Aula1 = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");


  const { logout } = useAuthentication();

  const navigate = useNavigate();

  const [query, setQuery] = useState("");


  const [top, setTop] = useState(0);

  const [position, setPosition] = useState(0);

  const [rating, setRating] = useState(0)



  return (

    <div className={styles.home}>


      <div className={styles.modura1}><video controls autoplay name="media" src="https://s3-figma-videos-production-sig.figma.com/video/1143856007252296256/TEAM/6813/653e/-8926-4bd3-a9dd-962b2a157499?Expires=1679875200&Signature=JrmEOwlozjwqZw-LzK2wDKCP09aK4IKAbVauMNUiTExiyk~aDhAHC5LEjUiPTJcuqebOzu~kwNt-V97UG8MENONIsXjY1erAjztXQwOBw8uFLn6T6sS~ko3tMCJwv0AawR7PyXK~Pu~8my9h8hgMnA-GM5KSs7BucH7tf02vJK3R9b3Q4LUTM0aOM1b-75gCGbEijiIewpiddQJBMLPQfIz0FaomnyrMzkTxF9kUgbr-iztGAoKPEyHyquCtXZVma0-ecHmgvuqvTuoiTIWldejp3SFV-2F6-N44Pf779I5pqZfA-8GEKmNe2zf2JF30LwLcaVVQpxvqhfBYLzUyuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></video></div>


      <div className={styles.nome}>Nome da aula</div>

      <div className={styles.descricao}>Descrição da aula aqui</div>

      <button className={styles.Arquivostar1} ><StarIcon /></button>
      <button className={styles.Arquivostar2} ><StarIcon /></button>
      <button className={styles.Arquivostar3} ><StarIcon /></button>
      <button className={styles.Arquivostar4} ><StarIcon /></button>
      <button className={styles.Arquivostar5} ><StarIcon /></button>

      <div className={styles.proximaa}>Próxima aula</div>

      <div className={styles.materia}>MATERIAIS</div>

      <div className={styles.Arquivo}>Arquivo.pdf</div>

      <div className={styles.comentario}>Comentários</div>


      <div className={styles.comentariou}>
        <div className={styles.box}></div>
        <div className={styles.usuario}>Usuário</div>
        <div className={styles.responder}>RESPONDER</div>
        <div className={styles.comentario1}>Este é um exemplo de comentário</div>

      </div>

      <textarea className={styles.textoc3} placeholder="Escreva sua mensagem aqui.... ">

      </textarea>


      <div className={styles.categoria}>categoria | 4,6 <StarIcon /></div>

      <div className={styles.nomec}>Nome do curso</div>

      <div className={styles.texroc}>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut et massa mi. Aliquam in hendrerit u rna. </div>

      <div className={styles.temblema1}>
        
      <div className={styles.modulo1}>MÓDULO | Nome módulo</div>

      <div className={styles.apresentacao}>APRESENTAÇÃO <i> 10:00 <CheckCircleIcon/></i></div>

      <div className={styles.naula}>NOME AULA<i> 10:00 <CheckCircleIcon/></i></div>

      <div className={styles.naula2}>NOME AULA<i> 10:00 <CheckCircleIcon/></i></div>

         </div>


      <Swiper

        direction="Vertical"
        className={styles.slide3}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",

        }}>


      
        <SwiperSlide>
          <div className={styles.temblema2} >
            <div className={styles.emblema1}><i>Módulo 2 | Nome módulo</i>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.temblema3} >
            <div className={styles.emblema1}><i>Módulo 3 | Nome módulo</i>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>

      </Swiper>

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



export default Aula1;
