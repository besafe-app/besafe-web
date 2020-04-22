import React from 'react';
import TextFieldInput from 'components/core/TextFieldInput';
import ButtonDefault from 'components/core/ButtonDefault';
import CoronaImg from 'assets/img/corona.png';
import {
  Container, Body, SubmitRow, ImgLogo,
} from './SignUpPresentationStyle';

export default function SignUp() {
  return (
    <Body>
      <Container>
        <ImgLogo src={CoronaImg} />
        <TextFieldInput label="Nome Completo" fullWidth />
        <TextFieldInput label="Email" fullWidth />
        <TextFieldInput label="Telefone" fullWidth />
        <SubmitRow>
          <ButtonDefault value="SignUp" size="large" />
        </SubmitRow>
      </Container>
    </Body>
  );
}
