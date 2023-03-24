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

const S1 = () => {
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

<div className={styles.texto2}>NOME DO SERVIÇO AQUI</div>

<div className={styles.texto3}><LocationOnIcon/>online</div>

<img className={styles.img1} src="https://s3-alpha-sig.figma.com/img/2bb2/6143/9ffc32005800db18c2ddcfc45adb3b48?Expires=1675036800&Signature=AHFb8~zv0PrzK8PNi-VxNuM5KrTDLXCNnMtcvsdWwp6YPgCu~ihVcWV~dx69FzV7AqQHRFhiD9W9RITH2De9R0vRESwNsAFxiFEuNpwWEzzIAHco679qj4sYDBI1ye-yu6-~yKrV-26odSihShE7x8FSfIoLN1iYNRLcq5~qpAUEtZCOL-vYVemtykeHRe4RHOPjsYiB6mQ2rLOL-n1G5wxvF7bro-iFxydkrefVU~AVJdzq~rbH8iIogeeP3k5a1vGtHe8VrKifBox1er8U3ab2UBq0MFWVmDUto2zWN52zV1o05pbNotT4rITl-3dcn4QuMIqaVU6PL7srz0KwGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
<img className={styles.img2} src="https://s3-alpha-sig.figma.com/img/aa0a/0545/8d4d10220e1942eff24b38d7eb35b459?Expires=1675036800&Signature=A4X3MDEpaEDasRoRMzIYcxPRvKWzX6w3HcJsl9Q8tt0yPM4NFNv~cjuo0fip4Q9Vw1gYQK-wDXQ-S6-COXvB1IdcUMK6PSEaHxQUK4qs5WYMs7VharGdhTJOXmgD02rsQaVcME6Y~U5PccbG1iAUhGJuC~RnvkAEm7xtGUiLkif6KjEgHbbLu9Z4heaJEz1N~ycgARy5dPSEXAm55htRc~C2Uz-FawyMSAeP7hBktBk0wif2K6ySli3X4ga1E0EsWJ4iWr2U5hJw85209TMNiRL0PrpMNOb8YU4n3G1vlXTfJkHAF12TrUIkl9ntSLxN7di6koEdxpxFhT6okzwMRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
<img className={styles.img3} src="https://s3-alpha-sig.figma.com/img/213f/d55a/ea6f7bd626555e8003212ceaf77c83ac?Expires=1675036800&Signature=Qw0mjUG5qMFtnQrjHm7qYeq9j~PazRAaQRSt7nLy8CcaN8hT9OxVcKlI-KCTLXB~FRuU79BUT~EfrSDHfFVnPyErnKthKr9Fh5hsOR-tBnRJvqU8G8LxrrAFC8jbXZ1ukNaYHTh9bRu8VfxbmwuyrmKLoNqNwGQ0Sktwt6h3AcDplwkXl5gpc7gGsm4VnQ6Am~B~pj1JcbCm5OjAgOyUctdpNKLLdm5xE538KhJCuljMwDgazstpeHohMMWLvdATQHnRyktt3NAwO6qZL-H1fa1PyYYZ~A2beyErO-Ggpd9sYLgWNs54r390LjE4NlAyil1kSkuDNIHfQYIc2enYyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
    


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



export default S1;
