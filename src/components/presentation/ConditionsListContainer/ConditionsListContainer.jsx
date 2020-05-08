import React, { useEffect } from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import ConditionsList from 'components/presentation/ConditionsList';
import { requestCondition } from 'store/ducks/conditions';
import { CondListContainer, SpanContent } from './CondListContainerStyle';


const ConditionsListContainer = () => {
  const dispatch = useDispatch();
  const { conditions } = useSelector((state) => state.conditions);

  useEffect(() => {
    dispatch(requestCondition());
  }, [dispatch]);

  return (
    <>
      <SpanContent>
        <span>Lista de condições cadastradas</span>
      </SpanContent>
      <CondListContainer>
        <List
          bordered
          dataSource={conditions}
          renderItem={(condition) => (
            <ConditionsList key={condition.id} conditions={condition} />
          )}
        />
      </CondListContainer>
    </>
  );
};

export default ConditionsListContainer;
