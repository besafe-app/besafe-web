import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import ContainerDefault from 'components/core/ContainerDefault';
import Menu from 'components/presentation/Menu';
import TableToolbar from 'components/core/TableToolbar';
import TableHeader from 'components/core/TableHeader';

const users = [
  {
    id: 1,
    name: 'Paloma',
    birthDate: '19931016',
    gender: 'femele',
    conditions: ['Tosse seca', 'febre'],
  },
  {
    id: 2,
    name: 'Daniel',
    birthDate: '19931016',
    gender: 'male',
    conditions: ['Tosse seca', 'febre'],
  },
  {
    id: 3,
    name: 'Ermelinda',
    birthDate: '19931016',
    gender: 'femele',
    conditions: ['Tosse seca', 'febre'],
  },
  {
    id: 4,
    name: 'John',
    birthDate: '19931016',
    gender: 'male',
    conditions: ['Tosse seca', 'febre'],
  },
];

const headCells = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'name',
    label: 'Nome Completo',
  },
  {
    id: 'birthDate',
    label: 'Data de Nascimento',
  },
  {
    id: 'gender',
    label: 'Gênero',
  },
  {
    id: 'conditions',
    label: 'Condições',
  },
];

const Profile = () => {
  const classes = makeStyles({
    root: {
      width: '100%',
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <ContainerDefault>
      <Menu />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableToolbar count={users.length} title="Cidadãos" />
          <TableContainer>
            <Table
              className={classes.table}
              size="medium"
              aria-label="Cidadãos Cadastrados"
            >
              <TableHeader headCells={headCells} />
              <TableBody >
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((users) => {
                    return (
                      <TableRow
                        classes={styleRow}
                        hover
                        key={users.id}
                      >
                        <TableCell>
                        </TableCell>
                        <TableCell align="left">{users.id}</TableCell>
                        <TableCell align="left">{users.name}</TableCell>
                        <TableCell align="left">{users.birthDate}</TableCell>
                        <TableCell align="left">{users.gender}</TableCell>
                        <TableCell align="left">
                          {users.conditions.map((condition) => (`${condition}, `))}
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
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </ContainerDefault>
  );
};

export default Profile;
