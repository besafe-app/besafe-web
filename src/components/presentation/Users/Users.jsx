import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import urls from 'utils/constants/urls';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Checkbox,
} from '@material-ui/core';
import ContainerDefault from 'components/core/ContainerDefault';
import Menu from 'components/presentation/Menu';
import TableToolbar from 'components/core/TableToolbar';
import TableHeader from 'components/core/TableHeader';
import ButtonDefault from 'components/core/ButtonDefault';
import { ButtonContainer } from './UsersStyle';


const users = [
  {
    id: 1,
    name: 'Maria Lima',
    email: 'marialima@ioasys.com.br',
    phone: '(31)98666-6666',

  },
  {
    id: 2,
    name: 'Daniel Vieira',
    email: 'danielvieira@ioasys.com.br',
    phone: '(31)99666-6666',

  },
  {
    id: 3,
    name: 'João da Silva',
    email: 'joaosilva@ioasys.com.br',
    phone: '(31)99666-6666',
  },
  {
    id: 4,
    name: 'Ana Furtado',
    email: 'anafurtado@ioasys.com.br',
    phone: '(31)98666-6666',
  },
  {
    id: 5,
    name: 'Maria Lima',
    email: 'marialima@ioasys.com.br',
    phone: '(31)98666-6666',

  },
  {
    id: 6,
    name: 'Daniel Vieira',
    email: 'danielvieira@ioasys.com.br',
    phone: '(31)99666-6666',

  },
  {
    id: 7,
    name: 'João da Silva',
    email: 'joaosilva@ioasys.com.br',
    phone: '(31)99666-6666',
  },
  {
    id: 8,
    name: 'Ana Furtado',
    email: 'anafurtado@ioasys.com.br',
    phone: '(31)98666-6666',
  },
  {
    id: 9,
    name: 'João da Silva',
    email: 'joaosilva@ioasys.com.br',
    phone: '(31)99666-6666',
  },
  {
    id: 10,
    name: 'Ana Furtado',
    email: 'anafurtado@ioasys.com.br',
    phone: '(31)98666-6666',
  },
  {
    id: 11,
    name: 'Ana Furtado',
    email: 'anafurtado@ioasys.com.br',
    phone: '(31)98666-6666',
  },
];

const headCells = [
  {
    id: 'name',
    label: 'Nome Completo',
  },
  {
    id: 'email',
    label: 'E-mail',
  },
  {
    id: 'phone',
    label: 'Telefone',
  },
];

const Users = () => {
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
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const isSelected = (id) => selected.indexOf(id) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

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

  return (
    <ContainerDefault>
      <Menu />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableToolbar numSelected={selected.length} title="Administradores" />
          <TableContainer>
            <Table
              className={classes.table}
              size="medium"
              aria-label="Usuários"
            >
              <TableHeader headCells={headCells} />
              <TableBody>
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => {
                    const isItemSelected = isSelected(user.id);
                    return (
                      <TableRow
                        classes={styleRow}
                        hover
                        onClick={(event) => handleClick(event, user.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={user.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} />
                        </TableCell>
                        <TableCell align="left">{user.name}</TableCell>
                        <TableCell align="left">{user.email}</TableCell>
                        <TableCell align="left">{user.phone}</TableCell>
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
            <ButtonContainer>
              <Link to={urls.ROUTES.SIGNUP}>
                <ButtonDefault
                  variant="contained"
                  backgrounColor="#DA1F26"
                  value="Novo Usuário"
                  size="small"
                />
              </Link>
            </ButtonContainer>
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

export default Users;
