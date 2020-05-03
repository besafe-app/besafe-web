import React, { useEffect } from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import ConditionsList from 'components/presentation/ConditionsList';
import { requestCondition } from 'store/ducks/conditionsReducer';
import { CondListContainer, SpanContent } from './CondListContainerStyle';


const ConditionsListContainer = () => {
  const dispatch = useDispatch();
  const { conditions } = useSelector((state) => state.conditionsReducer);

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
        // header={<div>Condições Cadastradas</div>}
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
