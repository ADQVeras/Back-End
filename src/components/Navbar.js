import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../contexts/AuthContext";

import styles from "./Navbar.module.css";


//icons
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Navbar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
       <i>Impulsione</i>  by Crefisa
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/service"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Serviços
          </NavLink>
        </li>

        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar 
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
          
          <li>
          <NavLink
          to="/forum"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Fórum
          </NavLink>
        </li>
            
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        
        
        <li>
          <NavLink
            to="/people1"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <PermIdentityIcon/>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/chat"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <ChatBubbleOutlineIcon/>
          </NavLink>
        </li>
        

      </ul>
    </nav>
  );
};

export default Navbar;
