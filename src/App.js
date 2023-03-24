import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// pages
import Forum1 from "./pages/Forum/Forum";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service"
import EditService from "./pages/Service/EditService/EditService";
import EditS1 from "./pages/Service/EditService/EditS1";
import Post from "./pages/Post/Post";
import Edit from "./pages/People1/Edit/Edit"
import Chat from "./pages/Chat/chat"
import Cursos from "./pages/Cursos/Cursos"

// components
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost/CreatePost";
import People1 from "./pages/People1/People1";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditPost from "./pages/EditPost/EditPost";
import Financeiro from "./pages/Financial/Financial";
import Aula1 from "./pages/Cursos/Aula/Aula1"
import S1 from "./pages/Service/S1/S1"
import S2 from "./pages/Service/S1/S2"
import S3 from "./pages/Service/S1/S3"
import S4 from "./pages/Service/S1/S4"


// context
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  if(user === null ){
    return(
      
   <div>
      <Register/>
    </div>
    )
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/financeiro" element={<Financeiro />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/forum" element={<Forum1 />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/Cursos" element={<Cursos />} />
              <Route path="/service" element={<Service />} />
              <Route path="/editservice" element={<EditService />} /><Route path="/editservice" element={<EditService />} />
              <Route path="/edits" element={<EditS1 />} />
              <Route path="/editservice" element={<EditService />} />
              <Route path="/aula1" element={<Aula1 />} />
              <Route path="/s1" element={<S1 />} /><Route path="/s2" element={<S2 />} /><Route path="/s3" element={<S3 />} /><Route path="/s4" element={<S4 />} />
              
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
            

            <Route
                path="/people1"
                element={user ? <People1 /> : <Navigate to="/people1" />}
              />
            </Routes>

           
            
          </div>

          
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
