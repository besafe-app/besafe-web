/* eslint-disable consistent-return */
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { Creators as ConditionActions } from 'store/ducks/conditionsReducer';

const ConditionsForm = () => {
  const [newCondition, setNewCondition] = useState('');
  const dispatch = useDispatch();
  const { isAddingCondition } = useSelector((state) => state.conditionsReducer);
  console.log(isAddingCondition);
  const onChangeInput = useCallback((e) => {
    setNewCondition(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!newCondition || !newCondition.trim()) {
        return alert('Editar Condição.');
      }
      dispatch(ConditionActions.addConditionRequest(newCondition));
      setNewCondition('');
    },
    [newCondition, dispatch],
  );
  return (
    <>
      <Form
        style={{
          display: 'flex', marginTop: '60px', marginLeft: '400px', width: '700px',
        }}
        onSubmit={onSubmit}
      >
        <Input placeholder="Adicione uma condição pré-existente" onChange={onChangeInput} value={newCondition} />
        <Button type="primary" htmlType="submit" loading={isAddingCondition}>
          Adicionar
        </Button>
      </Form>
    </>
  );
};
export default ConditionsForm;
