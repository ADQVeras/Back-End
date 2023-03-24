// CSS
import styles from "./Edit.module.css";


// hooks
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../Edit/useAuthentication";
import { useFetchDocuments } from "../../../hooks/useFetchDocuments";

// react
import { useState } from "react";


// icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import ShareIcon from '@mui/icons-material/Share';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

//Paginas

//DropZOne

import React from 'react'
import Dropzone from 'react-dropzone'
import { style } from "@mui/system";







//edit


const Edit = () => {
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



/* components */

const [dado, setDas ] = useState('aberta')
const [cont, setCont] = useState(null)
const [ima, setIma ] = useState(null)
  
function Dados(){
  setDas("abrir")
  setCont(null)
  setIma(null)
} 

function Contato(){
  setDas(null)
  setCont("abrir")
  setIma(null)
}

function Imagens(){
  setDas(null)
  setCont(null)
  setIma("abrir")
}


console.log(loading);


const [displayName, setDisplayName] = useState("");
const [data, setDatadeNa] = useState("")
const [cpf, setCPF] = useState("");
const [telefone, setTele] = useState("");const [email, setEmail] = useState("");
const [error, setError] = useState("");



return (

    <div className={styles.home}>
     
    

     <div className={styles.tela}>

 
<Link to="/posts/create" className={styles.icone1} ><BusinessCenterIcon/></Link>

<Link to="/Cursos" className={styles.icone2} ><ComputerIcon /></Link>

<Link to="/forum" className={styles.icone3} ><ShareIcon/></Link>

<Link to="/posts/create" className={styles.icone4} ><AccountBalanceIcon/></Link>

<Link to="/posts/create" className={styles.icone5} ><PhoneIphoneIcon/></Link>

<Link to="/financeiro" className={styles.icone6} ><AccountBalanceWalletIcon/></Link>

<Link to="/" className={styles.sair} onClick={logout} >SAIR</Link>


<button onClick={Dados} style={{color:cont ? '#000814' : '#858181', borderRadius:cont ? '10px' : '0px'}}  
  className={styles.voltar2} >DADOS  >
</button>


</div>
  

<button onClick={Dados} style={{color:dado ? '#000814' : '#858181', borderRadius:dado ? '10px' : '0px'}}  
  className={styles.text1} >DADOS  >
</button>

<button onClick={Contato} style={{color:cont ? '#000814' : '#858181', borderRadius:cont ? '10px' : '0px'}} 
  className={styles.text2} >CONTATO >
</button>

<button onClick={Imagens} style={{color:ima ? '#000814' : '#858181', borderRadius:ima ? '10px' : '0px'}} 
  className={styles.text3} >IMAGENS >
</button>


{ dado &&
      <form onSubmit={handleSubmit}>
        <label >
          <span className={styles.nome}>CATEGORIA</span>
          <select className={styles.nome1} >
            <option selected disabled value=''>Selecione</option>
            <option>Aquitetrura</option>
            <option>Finanças</option>
            <option>Administração</option>
            <option>Prefiro não dizer</option>
          </select>
        </label>

        <label >
          <span className={styles.cpf}>NOME</span>
          <input className={styles.cpf1}
            type="cpf"
            name="cpf"
            required
            placeholder="The office"
            onChange={(e) => setCPF(e.target.value)}
            value={cpf}
          />
        </label>

        <label >
          <span className={styles.data}>DESCRIÇÃO</span>
          <input className={styles.data1}
            type="data"
            name="data"
            required
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. "
            onChange={(e) => setDatadeNa(e.target.value)}
            value={data}
          />
        </label>
     
     <button onClick={Contato}  className={styles.continuar} >continuar</button>
     <Link to="/people1" className={styles.voltar1} >voltar</Link>
    </form>


}


{ cont &&
  <form onSubmit={handleSubmit}>

<label>
          <span className={styles.telefone}>TELEFONE::</span>
          <input className={styles.telefone1}
            type="text"
            name="telefone"
            required
            placeholder="(+055) 0 0000-0000"
            onChange={(e) => setTele(e.target.value)}
            value={telefone}
          />
        </label>

        <label>
          <span className={styles.email}>E-MAIL:</span>
          <input className={styles.email1}
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

  <button onClick={Dados} className={styles.voltar1} >voltar</button>
  <button onClick={Imagens}  className={styles.continuar} >continuar</button>

</form>


}




{ ima &&
 <div>
   
   
<div className={styles.texImg}>
— Tamanho recomedado: 360x460
— Insira 3 fotos da sua marca
</div>

<img className={styles.img1} src="https://raw.githubusercontent.com/BielXGabriel/web/master/public/imagens/1234.png"></img>

<div className={styles.texImg2}>FOTOFACHADA.JPG </div>
<AutorenewIcon className={styles.icon2}/>

<DeleteOutlineIcon className={styles.icon3}/>


 <div className={styles.Baixar}> 

  <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
 {({getRootProps, getInputProps}) => (
   <section>
     <div {...getRootProps()}>
       <input {...getInputProps()} />

  <div className={styles.Bimg}>ADICIONAR IMAGEM</div>

  <AddIcon className={styles.icon4}/>
        </div>
   </section>
 )}
</Dropzone>
</div>
   


  </div>
  }
</div>
  );
};



export default Edit;
