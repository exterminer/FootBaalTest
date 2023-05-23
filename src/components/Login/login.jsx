import { useState } from "react";
import { LoginPage, LoginForm, Boximagem, LoginInputs } from "./styledLogin";
import { api } from "../../service";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const [apikey, setApikey] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    const apiKey = {
      apikey,
    };

    api
      .get("status", {
        headers: {
          "x-rapidapi-key": apiKey.apikey,
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.errors.length == 0) {
          localStorage.setItem(
            "authorization",
            JSON.stringify(apiKey.apikey)
          )
          navigate("/dashboard");
        } else {
          toast.error("Chave incorreta");
        }
      }) 
  }
  return (
    <LoginPage>
      <Boximagem>
        <h2>IMAGEM AQUI</h2>
      </Boximagem>

      <LoginInputs>
        <h2>Login</h2>
        <h3>Digite a apikey para ter acesso as estatitiscas</h3>

        <LoginForm onSubmit={handleLogin}>
          <input
            type="text"
            name="apikey"
            id="apikeyinput"
            placeholder="Digite sua apikey"
            required
            value={apikey}
            onChange={(event) => setApikey(event.target.value)}
          />

          <button>Enviar</button>
        </LoginForm>
      </LoginInputs>
      <ToastContainer />
    </LoginPage>
  );
}
