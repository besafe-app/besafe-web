import React from 'react';
import TextFieldInput from 'components/core/TextFieldInput';
import ButtonDefault from 'components/core/ButtonDefault';
import BeSafeImg from 'assets/img/logo.png';
import {
  Container, Body, SubmitRow, ImgLogo,
} from './SignUpPresentationStyle';

export default function SignUp() {
  return (
    <Body>
      <Container>
        <ImgLogo src={BeSafeImg} />
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
