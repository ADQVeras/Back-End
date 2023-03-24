//CSS
import styles from "./CadPF.module.css";



import { useState } from "react";
import { useAuthentication } from "../CadPF/useAuthentication";

const CadPF = () => {



const [displayName, setDisplayName] = useState("");
const [data, setDatadeNa] = useState("")
const [cpf, setCPF] = useState("");
const [cidade, setCidade] = useState("");
const [cep, setCep] = useState("");
const [rua, setRua] = useState("");
const [numero, setNumero] = useState("");
const [complemento, setComp] = useState("");
const [telefone, setTele] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [email, setEmail] = useState("");
const [error, setError] = useState("");

const { createUser, error: authError, loading } = useAuthentication();

const handleSubmit = async (e) => {
e.preventDefault();

setError("");

const user = {
displayName,cpf,data,

cidade,cep,rua,numero,complemento,

telefone,password,email,
};

if (password !== confirmPassword) {
setError("As senhas precisam ser iguais.");


return;
    }

    const res = await createUser(user);

    console.log(res);
};


/* botoes superior */

const [pess, setPes ] = useState('aberta')
const [end, setEnd ] = useState(null)
const [cads, setCads ] = useState(null)
  
function Pessoa(){
  setPes("abrir")
  setEnd(null)
  setCads(null)
} 

function Endereço(){
  setPes(null)
  setEnd("abrir")
  setCads(null)
}

function Cadastro(){
  setPes(null)
  setEnd(null)
  setCads("abrir")
}


return (

<div >

<div className={styles.tela} ></div>

<button onClick={Pessoa} style={{color:pess ? '#000814' : '#858181', borderRadius:pess ? '10px' : '0px'}}  
  className={styles.text1} >PESSOAL  >
</button>

<button onClick={Endereço} style={{color:end ? '#000814' : '#858181', borderRadius:end ? '10px' : '0px'}} 
  className={styles.text2} >ENDEREÇO >
</button>

<button onClick={Cadastro} style={{color:cads ? '#000814' : '#858181', borderRadius:cads ? '10px' : '0px'}} 
  className={styles.text3} >CADASTRO >
</button>


{ pess &&
      <form onSubmit={handleSubmit}>
        <label >
          <span className={styles.nome}>Nome :</span>
          <input className={styles.nome1}
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>

        <label >
          <span className={styles.cpf}>CPF</span>
          <input className={styles.cpf1}
            type="cpf"
            name="cpf"
            required
            placeholder="000.000.000-00"
            onChange={(e) => setCPF(e.target.value)}
            value={cpf}
          />
        </label>

        <label >
          <span className={styles.data}>DATA DE NACIMENTO</span>
          <input className={styles.data1}
            type="data"
            name="data"
            required
            placeholder="dd/mm/yyyy"
            onChange={(e) => setDatadeNa(e.target.value)}
            value={data}
          />
        </label>

      <label >
          <span className={styles.genero}>GÊNERO</span>
          <select className={styles.genero1} >
            <option selected disabled value=''>Selecione</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outro </option>
            <option>Prefiro não dizer</option>
          </select>
               
      </label>
     
     <button onClick={Endereço}  className={styles.continuar} >continuar</button>


    </form>


}


{ end &&
  <form onSubmit={handleSubmit}>
<label >
    <span className={styles.uf}>ESTADO</span>
<select className={styles.uf1} >
<option selected disabled value="" >UF</option>
<option>AC</option>
<option>AL</option>
<option>AP</option>
<option>AM</option>
<option>BA</option>
<option>CE</option>
<option>DF</option>
<option>ES</option>
<option>GO</option>
<option>MA</option>
<option>MT</option>
<option>MS</option>
<option>MG</option>
<option>PA</option>
<option>PB</option>
<option>PR</option>
<option>PE</option>
<option>PI</option>
<option>RJ</option>
<option>RN</option>
<option>RS</option>
<option>RO</option>
<option>RR</option>
<option>SC</option>
<option>SP</option>
<option>SE</option>
<option>TO</option>
</select>
</label>

<label > 
  <span className={styles.cidade}>CIDADE</span>
    <input className={styles.cidade1}
      type="cidade"
      name="cidade"
      required
      placeholder="nome da cidade"
      onChange={(e) => setCidade(e.target.value)}
      value={cidade}
    />
  </label>

  <label >
    <span className={styles.cep}>CEP</span>
    <input className={styles.cep1}
      type="cep"
      name="cep"
      required
      placeholder="000.00-000"
      onChange={(e) => setCep(e.target.value)}
      value={cep}
    />
  </label>

  <label > 
  <span className={styles.rua}>RUA</span>
    <input className={styles.rua1}
      type="rua"
      name="rua"
      required
      placeholder=" nome da rua "
      onChange={(e) => setRua(e.target.value)}
      value={rua}
    />
  </label>

  <label >
    <span className={styles.numero}>NÚMERO</span>
    <input className={styles.numero1}
      type="numero"
      name="numero"
      required
      placeholder="0000"
      onChange={(e) => setNumero(e.target.value)}
      value={numero}
    />
  </label>

  <label >
    <span className={styles.complemento}>COMPLEMENTO</span>
    <input className={styles.complemento1}
      type="complemento"
      name="complemento"
      required
      placeholder="bloco, apartamento ou casa"
      onChange={(e) => setComp(e.target.value)}
      value={complemento}
    />
  </label>

  <button onClick={Pessoa} className={styles.voltar1} >voltar</button>
  <button onClick={Cadastro}  className={styles.continuar} >continuar</button>

</form>


}




{ cads &&
   <form onSubmit={handleSubmit}>
   
        <label>
          <span className={styles.telefone}>Telefone:</span>
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
          <span className={styles.email}>E-mail:</span>
          <input className={styles.email1}
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <span className={styles.senha}>Senha:</span>
          <input className={styles.senha1}
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <label>
          <span className={styles.senha2}>Confirmação de senha:</span>
          <input className={styles.senha3}
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </label>

        {!loading && <button className={styles.continuar}>continuar</button>}
        {loading && (
          <button className={styles.aguarde} disabled>
            Aguarde...
          </button>
        )}
        {error && <p className={styles.error}>{error}</p>}
        
        
        <button onClick={Endereço}  className={styles.voltar1} >voltar</button>
        
      </form>
  }

    
    
</div>
  );
};

export default CadPF;