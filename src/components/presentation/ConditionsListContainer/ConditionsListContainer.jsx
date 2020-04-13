import React from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import ConditionsList from 'components/presentation/ConditionsList';

const ConditionsListContainer = () => {
  const { conditions } = useSelector((state) => state.conditionsReducer);
  return (

    <List
      style={{ marginTop: '50px', width: '700px', marginLeft: '400px' }}
      header={<div>Condições Cadastradas</div>}
      bordered
      dataSource={conditions}
      renderItem={(conditions) => (
        <ConditionsList key={conditions.id} conditions={conditions} />
      )}
    />

  );
};


export default ConditionsListContainer;
