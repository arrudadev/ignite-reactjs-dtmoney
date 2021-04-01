import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import totalSVG from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSVG} alt="Entradas"/>
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeSVG} alt="Saidas"/>
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalSVG} alt="Total"/>
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}