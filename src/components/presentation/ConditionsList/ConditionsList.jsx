import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  List, Typography, Button, Input,
} from 'antd';
import { useDispatch } from 'react-redux';
import { Creators as ConditionActions } from 'store/ducks/conditionsReducer';


const ConditionsList = ({ conditions }) => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [name, setName] = useState(conditions.name);

  useEffect(() => {
    setIsDeleted(false);
    setIsUpdated(false);
  }, [conditions.id, conditions.isChange]);

  const updateOnclick = useCallback(() => {
    setIsUpdate(!isUpdate);
  }, [isUpdate]);

  const deleteOnClick = useCallback(() => {
    setIsDeleted(true);
    dispatch(ConditionActions.deleteConditionRequest(conditions.id));
  }, [conditions, dispatch]);

  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const updateOkOnclick = useCallback(() => {
    dispatch(ConditionActions.updateConditionRequest({ conditionId: conditions.id, name }));
    setIsUpdate(false);
    setIsUpdated(true);
  }, [name, conditions.id, dispatch]);

  const cancelOnClick = useCallback(() => {
    setIsUpdate(false);
  }, []);

  return (
    <List.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
      {!isUpdate ? <><Typography.Text>{conditions.name}</Typography.Text></>
        : <Input value={name} onChange={nameOnChange} />}
      <div style={{ display: 'flex' }}>
        {!isUpdate ? (
          <>
            <Button
              style={{ background: 'green', color: 'white' }}
              onClick={updateOnclick}
              loading={isUpdated}
            >
              Editar
            </Button>
            <Button type="danger" onClick={deleteOnClick} loading={isDeleted}>Remover</Button>
          </>
        )
          : (
            <>
              <Button
                type="primary"
                onClick={updateOkOnclick}
              >
                Salvar
              </Button>
              <Button type="danger" onClick={cancelOnClick}>Cancelar</Button>

            </>
          )}

      </div>
    </List.Item>
  );
};

ConditionsList.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ConditionsList;
