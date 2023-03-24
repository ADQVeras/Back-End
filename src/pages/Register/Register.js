import styles from "./Register.module.css";
import Entrar from "./components/Entrar/Entrar";
import CadPF from "./components/CadPF/CadPF";
import CadPJ from "./components/CadPJ/CadPJ";

import { useState } from "react";


const Register = () => {
  const [entrar, setEntrar ] = useState('aberta')
  const [cadPFs, setCadPFs ] = useState(null)
  const [cadPJs, setCadPJs ] = useState(null)

  function Entrarr(){
    setEntrar("abrir")
    setCadPFs(null)
    setCadPJs(null)
  } 

  function CadPJJ(){
    setEntrar(null)
    setCadPFs(null)
    setCadPJs("abrir")
  }

  function CadPFF(){
    setEntrar(null)
    setCadPFs("abrir")
    setCadPJs(null)
  }


  return (
    <div>
    <div className={styles.tela}>
      <div className={styles.tela1}></div>

      <h2 className={styles.explorar}>explorar -></h2>
                

      <div className={styles.text}>

        <h2>Desenvolver pessoas <br/>Impulsionar negócios <br/>Conectar pessoas</h2>
      
      </div>
 

      <div className={styles.botoes}>


      <div>
        { entrar && 
          <Entrar/>
        }

        { cadPFs &&
          <CadPF/>
        }
        
        {cadPJs &&
          <CadPJ/>
        }
      </div>
        

      
      <div class="trigger-wrapper">

      <button onClick={Entrarr} style={{backgroundColor: entrar ? '#000814' : 'white', color:entrar ? 'white' : '#000814', borderRadius:entrar ? '10px' : '0px' }} 
      className={styles.bt1} >
        <nobr>ENTRAR NA MINHA CONTA</nobr>
      </button>
        
      <button onClick={CadPFF} style={{backgroundColor: cadPFs ? '#000814' : 'white', color:cadPFs ? 'white' : '#000814', borderRadius:cadPFs ? '10px' : '0px'}} 
      className={styles.bt2}>
        <nobr>ME CADASTRAR COMO PF</nobr>
      </button>
      
      <button onClick={CadPJJ} style={{backgroundColor: cadPJs ? '#000814' : 'white', color:cadPJs ? 'white' : '#000814', borderRadius:cadPJs ? '10px' : '0px'}} 
      className={styles.bt3}>
        <nobr>CADASTRAR MEU NEGÓCIO</nobr>
      </button>
      
      </div>
      </div>
    
      </div>

        
      </div>
  );
};

export default Register;
