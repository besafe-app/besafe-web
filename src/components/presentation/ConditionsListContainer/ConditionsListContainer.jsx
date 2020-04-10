import React from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import ConditionsList from 'components/presentation/ConditionsList';

const ConditionsListContainer = () => {
  const { conditions } = useSelector((state) => state.conditionsReducer);
  return (
    <List
      style={{ marginTop: '50px', marginLeft: '400px', width: '700px' }}
      header={<div>Condições cadastradas</div>}
      bordered
      dataSource={conditions}
      // eslint-disable-next-line no-shadow
      renderItem={(conditions) => (
        <ConditionsList key={conditions.id} conditions={conditions} />
      )}
    />
  );
};

export default ConditionsListContainer;
