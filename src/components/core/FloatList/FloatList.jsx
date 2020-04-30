import React from 'react';

import Collapse from 'components/core/Collapse';

import * as S from './FloatListStyle';

const FloatList = () => (
  <S.Teste>
    <span>1039</span>
    <Collapse title="Sexo">
      <span>Todos</span>
      <span>Masculino</span>
      <span>Feminino</span>
    </Collapse>
    <span>Faixa etária</span>
    <span>Condições</span>
    <span>Outros dados</span>
  </S.Teste>
);

export default FloatList;
