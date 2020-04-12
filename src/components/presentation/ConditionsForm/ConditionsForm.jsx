/* eslint-disable consistent-return */
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { addConditionRequest } from 'store/ducks/conditionsReducer';

const ConditionsForm = () => {
  const [newCondition, setNewCondition] = useState('');
  const dispatch = useDispatch();
  const { isAddingCondition } = useSelector((state) => state.conditionsReducer);

  const onChangeInput = useCallback((e) => {
    setNewCondition(e.target.value);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!newCondition || !newCondition.trim()) {
      return setNewCondition('');
    }
    dispatch(addConditionRequest(newCondition));
  };
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
