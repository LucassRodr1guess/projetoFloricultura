import Menu from "./menu"

function Home(){
    return(
        <div>
        <h1>Home</h1>
        
        <img src={'https://media.discordapp.net/attachments/960884773725831228/1104895841417826324/WhatsApp_Image_2023-05-07_at_19.10.20-removebg-preview.png'} alt="Workflow" />
        <div className="link">
        <a href="/login">Clique aqui para realizar seu login</a>&nbsp;&nbsp;&nbsp;
        </div>
        <div className="Produtos">

        </div>
        <a href="/sobre">Clique aqui caso queira ver nossos produtos</a>&nbsp;&nbsp;&nbsp;
        </div>
    )
}
export default Home