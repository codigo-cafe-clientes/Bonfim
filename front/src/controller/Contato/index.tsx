import { ContatoSection } from "./style";

import hero from 'assets/images/banner-top.png';

import { theme } from 'components/Layout/theme';


export default function Contato() {
  return (
    <>
      <ContatoSection theme= {theme} >
       <section>
          <img src={hero} alt="" />
          <span>contato</span>
        </section> 

      <section>        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.061071936897!2d-47.05724308448316!3d-22.911118143786926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf344675cabd%3A0x699d8062b0136101!2sR.%20Dr.%20Quirino%2C%20399%20-%20Centro%2C%20Campinas%20-%20SP%2C%2013015-081!5e0!3m2!1spt-BR!2sbr!4v1671763854206!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
        <form name="" method="post" action="" id="#">
          <div>            
            <label>Nome</label>              
            <input type="text" placeholder="Nome" name="nome" id="#"/>            

            <label>Email</label>
            <input type="text" placeholder="Seu melhor e-mail" name="email" id="#"/>            

            <label htmlFor="contato-assunto">Assunto</label>              
            <select name="assunto" id="select-assunto">
              <option value="">Escolha o assunto</option>
              <option value="orçamento">Orçamento</option>
              <option value="rh">RH</option>
              <option value="financeiro">Financeiro</option>                
            </select>            

            <label>Mensagem</label>              
            <textarea name="mensagem" placeholder="Deixe aqui sua mensagem" id="#"></textarea>
            <button value="enviar">enviar</button>
            <button value="limpar">limpar formulário</button>
            

          </div>
        </form>

      </section>


      </ContatoSection>
    </>
  );
}