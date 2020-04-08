import React, { useState, useCallback, useEffect } from 'react';
import {
  List, Typography, Button, Input,
} from 'antd';
import { useDispatch } from 'react-redux';
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete' ;

// import TableHeader from 'components/core/TableHeader';
import { Creators as ConditionActions } from 'store/ducks/conditionsReducer';


const ConditionsList = (conditions) => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [name, setName] = useState(conditions.name);
  const [isDid, setIsDid] = useState(false);


  useEffect(() => {
    setIsDeleted(false);
    setIsUpdated(false);
  }, [conditions.id, conditions.isChange]);

  const updateOnclick = useCallback(() => {
    if (isDid) {
      alert('Você não pode editar uma lista que já foi concluída.');
      return;
    }
    setIsUpdate(true);
  }, [isDid]);

  const deleteOnClick = useCallback(() => {
    setIsDeleted(true);
    dispatch(ConditionActions.deleteConditiont(conditions.id));
  }, [conditions]);

  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const updateOkOnclick = useCallback(() => {
    dispatch(ConditionActions.upadteCondition({ conditionsId: conditions.id, name }));
    setIsUpdate(false);
    setIsUpdated(true);
  }, [name]);

  const cancelOnClick = useCallback(() => {
    setIsUpdate(false);
  }, []);

  const doOnClick = useCallback(() => {
    setIsDid(!isDid);
  }, [isDid]);

  return (
    <List.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
      {!isUpdate ? <><Typography.Text style={{ textDecoration: isDid ? 'line-through' : null }} mark onClick={doOnClick}>{conditions.name}</Typography.Text></>
        : <Input value={name} onChange={nameOnChange} />}
      <div style={{ display: 'flex' }}>
        {!isUpdate ? (
          <>
            <Button
              style={{ background: 'yellowgreen', color: 'white' }}
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
export default ConditionsList;
