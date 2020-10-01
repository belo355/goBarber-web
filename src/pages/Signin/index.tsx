import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="goBarber" />

      <form>
        <h1> Faça seu login</h1>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password " placeholder="Senha" />
        <Button type="submit"> Entrar </Button>

        <a href="forgot"> Esqueci minha senha</a>
      </form>

      <a href="">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
