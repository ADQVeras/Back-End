// CSS
import styles from "./Forum.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useAuthValue } from "../../contexts/AuthContext";


// react
import { useState } from "react";

// components
import PostDetail from "../../components/PostDetail";

// icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ComputerIcon from '@mui/icons-material/Computer';
import ShareIcon from '@mui/icons-material/Share';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';


const Forum = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const { logout } = useAuthentication();



  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if (formError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    const handleSubmit = (e) => {
      e.preventDefault();


      // redirect to home page
      navigate("/");
    };

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  console.log(loading);

  return (
    <div className={styles.home}>

      <h1 className={styles.titulo}>Networking</h1>

      <div className={styles.create_post}>
        <form onSubmit={handleSubmit}>
          <label>

            <div className={styles.novo_post} >
              Novo Post
            </div>

            <span>Título:</span>
            <input
              type="text"
              name="text"
              required
              placeholder="Pense num bom título..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span className={styles.img_post}>URL da imagem:</span>
            <input
              type="text"
              name="image"
              required
              placeholder="Insira uma imagem que representa seu post"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </label>
          <label>
            <span>Compartilhe suas experiências...</span>
            <textarea
              name="body"
              required
              placeholder="Insira o conteúdo do post"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            >

            </textarea>
          </label>
          <label>
            <span className={styles.tag_post}>Tags:</span>
            <input
              type="text"
              name="tags"
              required
              placeholder="Insira as tags separadas por vírgula"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </label>

          {!response.loading && <button Name="btn" className={styles.enviar_post} >< SendIcon  className={styles.icon_post}/></button>}
          {response.loading && (
            <button Name="btn" disabled>
              Aguarde.. .
            </button>
          )}
          {(response.error || formError) && (
            <p className="error">{response.error || formError}</p>
          )}
        </form>
      </div>

      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>

      <div className="post-list">
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        <div className={styles.post}>
          {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        </div>
      </div>


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

export default Forum;