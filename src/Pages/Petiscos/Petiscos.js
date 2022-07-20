import './stylePetiscos.css';
import Bife from '../../assets/pratos/BifeArroz.jpg';
import Frango from '../../assets/pratos/Frango-Procolies.jpg';
import Salmao from '../../assets/pratos/Salmon-Salad.jpg';
import Picanha from '../../assets/pratos/Picanha.png';

function Petiscos() {
  return (
    <div id="petiscos">
    <div className="Petiscos">
      <h4 className="petiscos">Petiscos</h4>
      <div className="cardapioCard">
        <div className="Card">
          <h4>Bife e Arroz</h4>
          <img src={Bife} alt="Bife"></img>
          <span>Bife grelhado acompanhando arroz, feijão e uma salada mista.</span>
          <p>Valor $ 23,00</p>
        </div>
        <div className="Card">
          <h4>Frango grelhado</h4>
          <img src={Frango} alt="Frango"></img>
          <span>Frang grelhado acompanhando arroz, feijão e uma salada mista.</span>
          <p>Valor $ 25,00</p>
        </div>
        <div className="Card">
          <h4>Salmon Salad</h4>
          <img src={Salmao} alt="Salmon"></img>
          <span>Salmão gelhado, white dressing, acompanhando uma salada mista.</span>
          <p>Valor $ 53,00</p>
        </div>
        <div className="Card">
          <h4>Picanha no Speto</h4>
          <img src={Picanha} alt="card1"></img>
          <span>Picanha grelhado no speto, acompanhando arroz, feijão e uma salada mista.</span>
          <p>Valor $ 73,00</p>
        </div>
      </div>
     
    </div>
    </div>
  );
}

export default Petiscos;
