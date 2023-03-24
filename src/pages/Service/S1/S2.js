// CSS
import styles from "./S.module.css";

// hooks
import { useFetchDocuments } from "../../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../S1/useAuthentication";

// react
import { useState } from "react";


// icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import ShareIcon from '@mui/icons-material/Share';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const S2 = () => {
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


<div className={styles.texto1}><i>NOME DA EMPRESA | 4,6</i><StarIcon/></div>

<div className={styles.texto2}>buffetmillennium</div>

<div className={styles.texto3}><LocationOnIcon/>online</div>

<img className={styles.img1} src="https://www.baressp.com.br/barreporter/imgs/famigliamanzoli.jpg"></img>
<img className={styles.img2} src="https://cdn0.casamentos.com.br/vendor/5919/3_2/960/jpg/img-20171105-wa0037_13_155919_v1.jpeg"></img>
<img className={styles.img3} src="https://www.baressp.com.br/images/conteudo/servico-de-buffet-para-evento-em-sao-paulo.jpg"></img>
    


<div className={styles.texto4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. </div>
    
<div className={styles.texto5}>O que está incluso</div>

<div className={styles.texto6}>
  — Briefing para entender as necessidades
— Entrega de projeto em PDF, Tanana e tal.
</div>

<div className={styles.texto7}>INVESTIMENTO | R$00</div>

<div className={styles.texto8}>Complementos</div>

<Link to="/service" className={styles.Voltar} > Voltar </Link>

<Link to="/service" className={styles.Enviar} >ENVIAR SOLICITAÇÃO</Link>


<button className={styles.Adicional1} > 
<div className={ styles.box1}></div>
<i>R$ 00</i>
<div className={styles.tb1}> ADICIONAL AQUI </div>
<div className={styles.tb2} > Descrição do adicional aqui </div>
</button>

<button className={styles.Adicional2} > 
<div className={ styles.box1}></div>
<i>R$ 00</i>
<div className={styles.tb1}> ADICIONAL AQUI </div>
<div className={styles.tb2} > Descrição do adicional aqui </div>
</button>

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



export default S2;
