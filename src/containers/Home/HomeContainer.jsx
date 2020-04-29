import React from 'react';

import Menu from 'components/presentation/Menu';
import ContainerDefault from 'components/core/ContainerDefault';
import FloatList from 'components/core/FloatList';

const Home = () => (
  <ContainerDefault>
    <Menu />
    <div style={{ backgroundColor: 'aquamarine' }}>
      map
    </div>
    <FloatList />
  </ContainerDefault>
);

export default Home;
