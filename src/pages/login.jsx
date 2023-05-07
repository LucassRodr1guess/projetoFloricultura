import Menu from "./menu"
import "../App.css"


function Login(){
    return <div className="container">
    <header className="header">
    <img src={'https://media.discordapp.net/attachments/960884773725831228/1104895841417826324/WhatsApp_Image_2023-05-07_at_19.10.20-removebg-preview.png'} alt="Workflow" />
      <h1>Faça seu login na Sunset - Floricultura </h1>
    </header>

    <form action="">
      <div className="inputContainer">
        <label htmlFor="usuario">Usuario:   </label>
        <input 
        type="text"
        name="usuario" 
        id="usuario" 
        placeholder="Insira o seu Usuário"/>
      </div>

      <div className="inputContainer">
        <label htmlFor="senha">Senha:   </label>
        <input 
        type="text"
        name="senha" 
        id="senha" 
        placeholder="Insira sua senha"/>
      </div>

    <button className="Button">
      Login
    </button>

    <div className="footer">
      <p>Ainda não tem uma conta ?</p>
      <a href="#">Crie uma Conta</a>
    </div>

    <div>
    <a href="/sobre">Clique para ver nossos Produtos</a>&nbsp;&nbsp;&nbsp;
    </div>

    </form>
    </div>
    
}
export default Login