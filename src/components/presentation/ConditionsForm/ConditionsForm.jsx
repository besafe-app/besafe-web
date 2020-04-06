import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { addConditionRequest } from 'store/ducks/conditionsReducer';
import { ContainerForm } from './CondFormStyle';


const ConditionsForm = () => {
  const useStyles = makeStyles({
    root: {
      '& .MuiButton-root': {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: -29,
        marginLeft: 500,
        cursor: 'pointer',
      },
      '& .MuiButton-containedSecondary': {
        backgroundColor: '#DA1F26',
      },
    },
  })();
  const [newCondition, setNewCondition] = useState('');
  const dispatch = useDispatch();
  const { isAddingCondition } = useSelector((state) => state.conditionsReducer);
  const onChangeInput = useCallback((e) => {
    setNewCondition(e.target.value);
  }, []);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (!newCondition || !newCondition.trim()) {
      return alert('Adicionar uma Condição Pré-Existente.');
    }
    dispatch(addConditionRequest(newCondition));
    setNewCondition('');
  },
  [newCondition]);
  return (
    <>
      <ContainerForm>
        <form onSubmit={onSubmit}>
          <input placeholder="Adicione uma condição pré-existente" onChange={onChangeInput} value={newCondition} />
          <div className={useStyles.root}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={useStyles.button}
              startIcon={<AddCircleOutlineIcon />}
              size="small"
              onClick={isAddingCondition}
            >
              Adicionar
            </Button>
          </div>
        </form>
      </ContainerForm>

    </>
  );
};
export default ConditionsForm;
