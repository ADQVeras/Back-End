// CSS
import styles from "./Financial.module.css";


// hooks
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../Financial/useAuthentication";

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



const Financeiro = () => {

  const { logout } = useAuthentication();

  const navigate = useNavigate();

  const [query, setQuery] = useState("");




  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };






  const [displayName, setDisplayName] = useState("");
  const [data, setDatadeNa] = useState("")
  const [cpf, setCPF] = useState("");
  const [telefone, setTele] = useState(""); const [email, setEmail] = useState("");
  const [error, setError] = useState("");



  return (

    <div className={styles.home}>




      <div className={styles.Saldo}> Saldo Disponível</div>


      <div className={styles.V1} ><i>R$</i>  1.000.00 </div>

      <div className={styles.per} > QUANDO VAI ESTAR NA MINHA CONTA? </div>


      <div className={styles.Bimg1}>


        <div className={styles.texto1}><i>Serviço nome tal </i>00/00 as 16:30</div>

        <div className={styles.V2}>R$ 500</div>

      </div>

     
      <div className={styles.Bimg1}>


        <div className={styles.texto1}><i>Serviço nome tal </i>00/00 as 16:30</div>

        <div className={styles.V2}>R$ 500</div>

      </div>

      <div className={styles.Prazo}> Saldo Disponível</div>

      <div className={styles.texto3}>Qual o melhor prazo para receber seus pagamentos na conta após contrato?</div>

      <div className={styles.texto4}>Taxa de transação - 00% </div>

      <label >
        <span className={styles.Dias}>Dias</span>
        <select className={styles.Dia} >
          <option selected disabled value=''>Dia</option>
          <option>D+1</option>
          <option>D+15</option>
          <option>D+20</option>
          <option>D+30</option>
        </select>
      </label>

      <div className={styles.Dados}>Dados bancários</div>

      <div className={styles.dtexto1}>AGÊNCIA</div>

      <div className={styles.dtexto2}>1234</div>

      <div className={styles.dtexto3}>CONTA COM DIGITO</div>

      <div className={styles.dtexto4}>000000000-0</div>

      <div className={styles.dtexto5}>TITULAR DA CONTA</div>

      <div className={styles.dtexto6}>Nome da pessoa</div>

      <div className={styles.dtexto7}>CPF</div>

      <div className={styles.dtexto8}>000.000.000-00</div>



      <div className={styles.Metodos}>Métodos de pagamento</div>

      <div className={styles.BMetodo}></div>

      <div className={styles.Mtexto1}>Nome do cartão </div>
      <div className={styles.Mtexto2}><i>NOME DA PESSOA</i>**** **** **** 0000</div>
      <div className={styles.BMetodo2}>ADICIONAR CARTÃO <AddIcon className={styles.icon1} /></div>





      <div className={styles.tela}>

        <Link to="/service" className={styles.icone1} ><BusinessCenterIcon /></Link>

        <Link to="/Cursos" className={styles.icone2} ><ComputerIcon /></Link>

        <Link to="/forum" className={styles.icone3} ><ShareIcon /></Link>

        <Link to="/posts/create" className={styles.icone4} ><AccountBalanceIcon /></Link>

        <Link to="/posts/create" className={styles.icone5} ><PhoneIphoneIcon /></Link>

        <Link to="/financeiro" className={styles.icone6} ><AccountBalanceWalletIcon /></Link>

        <Link to="/" className={styles.sair} onClick={logout} >SAIR</Link>

      </div>






    </div>
  )
}
  ;

export default Financeiro;
