import { login } from "./utils";
import "./index.css";
import { useState } from "react";

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs

/*
 Tarefas:
 [x] todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.

 [x] todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
 [x] todo - Desabilite o botão de Login equanto você está executando o login.
 [x] todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
 
 [] todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.
*/

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loging, setLogging] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleClickLogin() {
    setErrorMessage("");
    setLogging(true);
    try {
      await login({
        email,
        password,
      });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLogging(false);
    }
  }

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {errorMessage.length !== 0 && (
          <div className="errorMessage">{errorMessage}</div>
        )}
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id={"email"}
            type={"email"}
            autoComplete="off"
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id={"password"}
            type={"password"}
          />
        </div>

        <div className="button">
          <button
            disabled={email.length === 0 || password.length < 6 || loging}
            onClick={handleClickLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
