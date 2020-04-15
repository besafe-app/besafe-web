import React from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import ConditionsList from 'components/presentation/ConditionsList';
import { CondListContainer } from './CondListContainerStyle';

const ConditionsListContainer = () => {
  const { conditions } = useSelector((state) => state.conditionsReducer);
  return (
    <CondListContainer>
      <List
        header={<div>Condições Cadastradas</div>}
        bordered
        dataSource={conditions}
        renderItem={(conditions) => (
          <ConditionsList key={conditions.id} conditions={conditions} />
        )}
      />
    </CondListContainer>
  );
};


export default ConditionsListContainer;
