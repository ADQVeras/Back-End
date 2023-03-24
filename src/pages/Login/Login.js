import styles from "./Login.module.css";

import { Component, useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";




const Login = () => {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    
    <div  >
      

      <form onSubmit={handleSubmit}>
        <label className={styles.login1}>
          <span>E-mail:</span>
          <input
            className={styles.login11}
            type="email"
            name="email"
            required
            placeholder="SEU ACESSO DE E-MAIL"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className={styles.login2}>
          <span>Senha:</span>
          <input
          className={styles.login22}
            type="password"
            name="password"
            required
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!loading && <button className={styles.btn}>ENTRAR</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        { error && <p className={styles.btn2}>{error} </p>}

        {!loading && <button className={styles.btn1}>esqueci minha senha</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {Component}

      </form>
    


    </div>

    
    
  );
};

export default Login ;
