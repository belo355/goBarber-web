import styled from 'styled-components';
import {shade} from 'polished';

import SignInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`

  display: flex;
  flex-direction: column;

  place-content: center;

  width: 100%;
  max-width: 700px;
  align-items: center;

  form {
    margin: 90px 0px 60px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-weight: 500;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #F4EDE8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #FF9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      margin-bottom: 16px;
      transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2,'#FF9000')}

        }
    }

    a {
      color: #F4EDE8;
      display: block;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    color: #FF9000;
    display: block;

    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
        color: ${shade(0.2,'#FF9000')}

      }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex:1;
  background: url(${SignInBackground}) no-repeat center;
  background-size:cover;


`;
