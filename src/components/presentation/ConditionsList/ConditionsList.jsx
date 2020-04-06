import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import TableHeader from 'components/core/TableHeader';
import { deleteConditionRequest, upadteConditionRequest } from 'store/ducks/conditionsReducer';


const headCells = [
  {
    id: 'name',
    label: 'Condição',
  },
  {
    id: 'action',
    label: 'Ação',
  },
];

const ConditionsList = (conditions) => {
  const classes = makeStyles({
    root: {
      width: '100%',
      '& .MuiTable-root': {
        marginLeft: 260,
        marginTop: 50,
      },
      '& .MuiButton-root': {
        marginRight: -100,
      },
    },
    paper: {
      width: '100%',
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  })();
  const styleRow = makeStyles({
    root: {
      cursor: 'pointer',
    },
  })();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [name, setName] = useState(conditions.name);
  const [isDid, setIsDid] = useState(false);
  const isSelected = (id) => selected.indexOf(id) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, conditions.length - page * rowsPerPage);

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setIsDeleted(false);
    setIsUpdated(false);
  }, [conditions.id, conditions.isChange]);

  const deleteOnClick = useCallback(() => {
    setIsDeleted(true);
    dispatch(deleteConditionRequest(conditions.id));
  }, [conditions]);

  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const updateOkOnclick = useCallback(() => {
    dispatch(upadteConditionRequest({ conditionsId: conditions.id, name }));
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
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            size="medium"
            aria-label="Condições Pré-Existentes Cadastradas"
          >
            <TableHeader headCells={headCells} />
            <TableBody>
              {conditions
                .map((condition) => {
                  const isItemSelected = isSelected(condition.id);
                  return (
                    <TableRow
                      classes={styleRow}
                      hover
                      onClick={(event) => handleClick(event, conditions.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={condition.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox" />
                      <TableCell align="left">{conditions.name}</TableCell>
                      <TableCell align="left">
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          startIcon={<DeleteIcon />}
                          size="small"
                        >
                          Remover
                        </Button>
                      </TableCell>

                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={5} />
              </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={conditions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>

  );
};
export default ConditionsList;
