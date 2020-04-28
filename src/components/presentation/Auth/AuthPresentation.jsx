import React from 'react';
import TextFieldInput from 'components/core/TextFieldInput';
import ButtonDefault from 'components/core/ButtonDefault';
import LogoBeSafe from 'components/core/LogoBeSafe';
import {
  Container, Body, SubmitRow, ImgLogo,
} from './AuthPresentationStyle';

export default function Auth({ requestAuthAuthentication }) {
  return (
    <Body>
      <Container>
        <LogoBeSafe />
        <TextFieldInput label="Email" fullWidth />
        <TextFieldInput label="Senha" fullWidth />
        <SubmitRow>
          <ButtonDefault onClick={requestAuthAuthentication} value="Entrar" size="large" />
        </SubmitRow>
      </Container>
    </Body>
  );
}
