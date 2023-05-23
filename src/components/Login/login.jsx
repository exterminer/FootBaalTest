import { useState } from "react";
import { LoginPage,LoginForm,Boximagem,LoginInputs} from "./styledLogin";
// import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const [apikey, setApikey] = useState("");

  function handleLogin() {}

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
            value={apikey}
            onChange={(event) => setApikey(event.target.value)}
          />

          <button>Enviar</button>
        </LoginForm>
      </LoginInputs>
    </LoginPage>
  );
}
