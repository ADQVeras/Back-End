// CSS
import styles from "./Interests.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../Home/useAuthentication";

// react
import { useState } from "react";



// icons

const Interests = () => {
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
    
   
   <div className={styles.tela}></div>

   <div className={styles.texto1}>Quais assuntos você tem interesse em?</div>
    
    <div className={styles.texto2}>FINANÇAS</div>
    
    <div className={styles.texto3}>PUBLICIDADE</div>

    <div className={styles.texto4}>JURÍDICO</div>


      <button className={styles.b1}>+ Assunto Aqui</button>
        
      <button className={styles.b2}>+ SubAssunto aqui </button>
        
      <button className={styles.b3}>+ Assunto aqui </button>
        
      <button className={styles.b4}>+ SubAssunto aqui </button>
        
      <button className={styles.b5}>✓ Assunto</button>

      <button className={styles.b6}>✓</button>
        
      <Link to="/" className={styles.pularbutton}>PULAR</Link>
    
    


    

    </div>

  );
};

export default Interests;
