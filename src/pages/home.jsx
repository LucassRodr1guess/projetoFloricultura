import Menu from "./menu"
import "../App"


function Home(){
    return(
        <div class="HomeFundo">    
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
    <div class="carousel-item active">
        
    <img src={'https://media.discordapp.net/attachments/1044250932692647976/1105133354187239615/SUNSET_-_FLORICULTURA_1.png'} alt="Workflow"     />

        
    
    </div>
    <div class="carousel-item">
    <img src={'https://media.discordapp.net/attachments/1044250932692647976/1105132537325559818/SUNSET_-_FLORICULTURA.png'} alt="Workflow"     />
    </div>
    <div class="carousel-item">
    <img src={'https://media.discordapp.net/attachments/1044250932692647976/1105137270740242502/SUNSET_-_FLORICULTURA_2.png'} alt="Workflow" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
        
        
        <div className="SobreNos">
            <h2>Sobre Nós</h2>
            <p>Somos a floricultura Sunset, estamos presentes no mercado já faz mais de 1 década. Com excelência em questão a qualidade de produtos e atendimento, sendo assim sempre uma referência no mercado de flores, com nosso número fixo de atendimento via WhatsApp, você pode entrar em contato conosco para esclarecermos quaisqueres tipos de dúvidas quando necessário. </p>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        <div className="espacoB1">

        
        <div className="link">
        <a href="/login" class="btn btn-primary">Clique aqui para realizar seu login</a>&nbsp;&nbsp;&nbsp;
        </div>
        </div>

        <div className="espacoB2">

       
        
        
        <a href="/sobre" class="btn btn-primary">Clique aqui caso queira ver nossos produtos</a>&nbsp;&nbsp;&nbsp;
        </div>


        <div className="Rodape">
        <footer>
         <h5 class="T1">Contato</h5>  
         <p>11 99999-9999</p>
         <h5 className="T2">Redes sociais</h5> 
         <p>Instagram: sunsetfloresofc</p>    
        </footer> 
        </div>
      
        </div>

        

    )
}
export default Home