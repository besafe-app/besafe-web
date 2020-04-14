import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  List, Typography, Button, Input,
} from 'antd';
import { useDispatch } from 'react-redux';
import { deleteConditionRequest, upadteConditionRequest } from 'store/ducks/conditionsReducer';


const ConditionsList = ({ conditions }) => {
  const dispatch = useDispatch();
  const [canBeUpdated, setCanBeUpdated] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [name, setName] = useState(conditions.name);

  useEffect(() => {
    setIsDeleted(false);
    setIsUpdated(false);
  }, [conditions.id, conditions.isChange]);

  const updateOnclick = useCallback(() => {
    setCanBeUpdated(!canBeUpdated);
  }, [canBeUpdated]);

  const deleteOnClick = useCallback(() => {
    setIsDeleted(true);
    dispatch(deleteConditionRequest(conditions.id));
  }, [conditions, dispatch]);

  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const updateOkOnclick = useCallback(() => {
    dispatch(upadteConditionRequest({ conditionsId: conditions.id, name }));
    setCanBeUpdated(false);
    setIsUpdated(true);
  }, [name, conditions.id, dispatch]);

  const cancelOnClick = useCallback(() => {
    setCanBeUpdated(false);
  }, []);

  return (
    <List.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
      {!canBeUpdated ? <Typography.Text>{conditions.name}</Typography.Text>
        : <Input value={name} onChange={nameOnChange} />}
      <div style={{ display: 'flex' }}>
        {!canBeUpdated ? (
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
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ConditionsList;
