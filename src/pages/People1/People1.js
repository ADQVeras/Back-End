// CSS
import styles from "./People1.module.css";


// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../Home/useAuthentication";

// react
import { useState } from "react";


// icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import ShareIcon from '@mui/icons-material/Share';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import CreateIcon from '@mui/icons-material/Create';



const People1 = () => {
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

      <img className={styles.img1} src="https://raw.githubusercontent.com/BielXGabriel/web/master/public/imagens/1234.png"></img>

      <div className={styles.texto1}>ARQUITETURA</div>

      <div className={styles.texto2}><i>The Office</i> </div>

      <div className={styles.texto3}><LocationOnIcon />São Paulo</div>

      <div className={styles.nivel}>GOLD</div>

      <div className={styles.avaliar}><i>4,5</i><StarIcon /></div>


      <Link to="/edit" className={styles.coração}> <h2> <CreateIcon /> </h2> </Link>

      <div className={styles.texto4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</div>

      <div className={styles.Serviço}>Serviços</div>

      <div className={styles.Emblema}>Emblema</div>


      <div className={styles.box1}></div>

      <div className={styles.box2}></div>

      <div className={styles.box3}></div>

      <div className={styles.box4}></div>

      <div className={styles.box1}></div>

      <div className={styles.box2}></div>

      <div className={styles.box3}></div>

      <div className={styles.box4}></div>






      <Link to="/editservice" className={styles.bt1}><nobr>NOME SERVIÇO AQUI</nobr></Link>

      <Link to="/editservice" className={styles.bt2}><nobr>NOME SERVIÇO AQUI</nobr></Link>

      <Link to="/editservice" className={styles.bt3}><nobr>NOME SERVIÇO AQUI</nobr></Link>

      <button className={styles.bt4}><nobr>ADICIONAR SERVIÇO </nobr></button>



      <div className={styles.tela}></div>





      <Link to="/service" className={styles.icone1} ><img src="img/icones/serviços.png"></img> </Link>

      <Link to="/Cursos" className={styles.icone2} ><img src="img/icones/Vector.png"></img></Link>

      <Link to="/forum" className={styles.icone3} ><img src="img/icones/akar-icons_network.png"></img></Link>

      <Link to="/posts/create" className={styles.icone4} ><img src="img/icones/Group.png"></img></Link>

      <Link to="/posts/create" className={styles.icone5} ><img src="img/icones/Cel.png"></img></Link>

      <Link to="/financeiro" className={styles.icone6} ><img src="img/icones/money.png"></img></Link>

      <Link to="/" className={styles.sair} onClick={logout} >SAIR</Link>





    </div>

  );
};



export default People1;
