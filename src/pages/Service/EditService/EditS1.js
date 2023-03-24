// CSS
import styles from "./ES1.module.css";

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
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BackupIcon from '@mui/icons-material/Backup';
import QueueIcon from '@mui/icons-material/Queue';


const EditS1 = () => {
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


<div className={styles.texto1}>Editar serviço</div>

<div className={styles.servico}>
    Serviço 
<i>CATEGORIA</i>
</div>

<select className={styles.servico2}>Clique e selecione
  <option selected value="select">Clique e selecione</option>
  <option value="serviço1">serviço1</option>
  <option value="serviço2">serviço1</option>
  <option value="serviço3">serviço1</option>
  <option value="serviço4">serviço1</option>
</select>


<div className={styles.titulo1}>TÍTULO</div>
<input className={styles.texto5}
            type="text"
            name="tirulo"
            required
            placeholder="Insira o nome do serviço"
/>

<div className={styles.texto6}><CheckBoxIcon/> online</div>
<div className={styles.texto7}><CheckBoxIcon/> presencial</div>

<div className={styles.texto8}><BackupIcon className={styles.icon1}/></div>
<div className={styles.texto9}>selecione 3 fotos para fazer upload</div>

<div className={styles.texto10}>Tamanhos recomedados: 190x175, 190x115 e 300x300</div>

<img className={styles.foto} src="https://s3-alpha-sig.figma.com/img/2bb2/6143/9ffc32005800db18c2ddcfc45adb3b48?Expires=1675036800&Signature=AHFb8~zv0PrzK8PNi-VxNuM5KrTDLXCNnMtcvsdWwp6YPgCu~ihVcWV~dx69FzV7AqQHRFhiD9W9RITH2De9R0vRESwNsAFxiFEuNpwWEzzIAHco679qj4sYDBI1ye-yu6-~yKrV-26odSihShE7x8FSfIoLN1iYNRLcq5~qpAUEtZCOL-vYVemtykeHRe4RHOPjsYiB6mQ2rLOL-n1G5wxvF7bro-iFxydkrefVU~AVJdzq~rbH8iIogeeP3k5a1vGtHe8VrKifBox1er8U3ab2UBq0MFWVmDUto2zWN52zV1o05pbNotT4rITl-3dcn4QuMIqaVU6PL7srz0KwGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>

<div className={styles.texto12}>FOTOCOZINHA.JPG</div>
<div className={styles.texto13}>icons</div>


<div className={styles.texto14}>Detalhes</div>

<div className={styles.texto15}>DESCRIÇÃO</div>
<div className={styles.texto16}>120 caracteres</div>
<textarea className={styles.texto17} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. ">
  
</textarea>

<div className={styles.texto18}>O QUE ESTÁ INCLUSO</div>

<div className={styles.texto19}><CheckBoxIcon/> briefing</div>
<div className={styles.texto20}><CheckBoxIcon/> etapa noe aqui </div>
<div className={styles.texto21}><CheckBoxIcon/> entrega de projeto em pdf.</div>

<div className={styles.texto22}>escreva aqui</div>
<div className={styles.texto23}>certo </div>


<div className={styles.texto24}>TÍTULO</div>

<input className={styles.texto25}
            type="text"
            name="tirulo"
            required
            placeholder="Insira o nome do serviço"
/>



<div className={styles.texto26}>Complementos</div>

<Link to="/service" className={styles.Voltar} > Voltar </Link>

<Link to="/service" className={styles.Enviar} >ENVIAR SOLICITAÇÃO</Link>

<button className={styles.Adicional1} > 
<i>R$ 00</i>
<div className={styles.tb1}> <QueueIcon className={styles.icon2} /> ADICIONAL AQUI </div>
<div className={styles.tb2} > Descrição do adicional aqui </div>
</button>

<button className={styles.Adicional2} > 
<i>R$ 00</i>
<div className={styles.tb1}> <QueueIcon className={styles.icon2} /> ADICIONAL AQUI </div>
<div className={styles.tb2} > Descrição do adicional aqui </div>
</button>


<div className={styles.tela}></div>
    
 
<Link to="/posts/create" className={styles.icone1} ><BusinessCenterIcon/></Link>

<Link to="/posts/create" className={styles.icone2} ><ComputerIcon/></Link>

<Link to="/forum" className={styles.icone3} ><ShareIcon/></Link>

<Link to="/posts/create" className={styles.icone4} ><AccountBalanceIcon/></Link>

<Link to="/posts/create" className={styles.icone5} ><PhoneIphoneIcon/></Link>

<Link to="/financeiro" className={styles.icone6} ><AccountBalanceWalletIcon/></Link>

<Link to="/" className={styles.sair} onClick={logout} >SAIR</Link>

    </div>

  );
};



export default EditS1;
