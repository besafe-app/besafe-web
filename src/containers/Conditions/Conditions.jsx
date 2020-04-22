import React from 'react';
import Menu from 'components/presentation/Menu';
import PageHeader from 'components/core/PageHeader';
import ConditionsForm from 'components/presentation/ConditionsForm';
import ConditionsListContainer from 'components/presentation/ConditionsListContainer';

const Conditions = () => (
  <>
    <Menu />
    <PageHeader title="Condições Preexistentes Cadastradas" />
    <ConditionsForm />
    <ConditionsListContainer />
  </>
);

export default Conditions;
