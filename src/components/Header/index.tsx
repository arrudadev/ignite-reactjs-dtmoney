import Logo from '../../assets/logo.svg';

import { NewTransactioButton } from '../NewTransactionButton';

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />        

        <NewTransactioButton />
      </Content>
    </Container>
  )
}