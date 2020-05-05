/* eslint-disable consistent-return */
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addConditionRequest } from 'store/ducks/conditionsReducer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ContainerForm, SpanContent } from './CondFormStyle';

const ConditionsForm = () => {
  const useStyles = makeStyles({
    root: {
      '& .MuiButton-root': {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '-29px',
        marginLeft: '550px',
        cursor: 'pointer',
      },
    },
  })();
  const [newCondition, setNewCondition] = useState('');
  const dispatch = useDispatch();

  const { isAddingCondition } = useSelector((state) => state.conditionsReducer);

  const onChangeInput = useCallback((e) => {
    setNewCondition(e.target.value);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addConditionRequest(newCondition));
    setNewCondition('');
  };
  return (
    <>
      <ContainerForm>
        <SpanContent>
          <span>Adicione uma condição preexistente:</span>
        </SpanContent>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Nome da condição preexistente"
            onChange={onChangeInput}
            value={newCondition}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={useStyles.button}
            size="small"
            loading={isAddingCondition ? isAddingCondition.toString() : 'false'}
          >
            Adicionar
          </Button>
        </form>
      </ContainerForm>
    </>
  );
};
export default ConditionsForm;
