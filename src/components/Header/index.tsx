import Logo from '../../assets/logo.svg';

import { Container, Content } from "./styles";

import { NewTransactioButton } from '../NewTransactionButton';

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