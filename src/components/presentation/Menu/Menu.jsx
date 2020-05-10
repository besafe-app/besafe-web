import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as AuthActions } from 'store/ducks/authReducer';
import urls from 'utils/constants/urls';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider, Drawer, MenuList, MenuItem,
} from '@material-ui/core';
import ListTitle from 'components/core/ListTitle';
import LogoutLink from 'components/presentation/LogoutLink';
import ImgIcon from 'assets/img/logo.png';
import {
  TitleContainer,
  LogoIcon,
  UserNameContainer,
  Container, StyledLink,
} from './MenuStyle';


const Menu = () => {
  const [userName, setUsername] = useState({ userName: '' });
  const dispatch = useDispatch();
  const materialStyles = makeStyles({
    root: {
      display: 'flex',
      width: '100%',
      '& .MuiListItem-gutters': {
        fontSize: 14,
        paddingLeft: 0,
        paddingRight: 0,
        fontWeight: 500,
        lineHeight: '30px',
        '&:hover': {
          backgroundColor: 'transparent',
          color: 'transparent',
        },
      },
      '& .MuiDrawer-docked': {
        width: '100%',
        backgroundColor: 'red',
      },
      '& .MuiDrawer-paper': {
        width: '260px',
      },
    },
  })();

  const logoutUser = (payload) => {
    dispatch(AuthActions.authLogOut(payload));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUsername({ userName: user.fullName });
    }
  }, []);


  return (
    <nav className={materialStyles.root}>
      <Drawer classes={materialStyles.drawerPaper} variant="permanent" open>
        <LogoIcon src={ImgIcon} />
        <Container>
          <UserNameContainer>
            <span>{userName.userName}</span>
          </UserNameContainer>
          <LogoutLink logoutUser={logoutUser} />
        </Container>
        <Divider />
        <MenuList>
          <MenuItem>
            <StyledLink exact to={urls.ROUTES.HOME}>
              Inicial
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to={urls.ROUTES.PROFILE}>
              Cidadãos
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to={urls.ROUTES.DOCTORS}>
              Médicos
            </StyledLink>
          </MenuItem>
        </MenuList>
        <Divider />
        <MenuList>
          <TitleContainer>
            <ListTitle title="Saúde" />
          </TitleContainer>
          <MenuItem>
            <StyledLink exact to={urls.ROUTES.CONDITIONS}>
              Condições Preexistentes
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to={urls.ROUTES.SYMPTOMS}>
              Sintomas
            </StyledLink>
          </MenuItem>
        </MenuList>
        <Divider />
        <MenuList>
          <TitleContainer>
            <ListTitle title="Usuários" />
          </TitleContainer>
          <MenuItem>
            <StyledLink exact to={urls.ROUTES.ADMINS}>
              Administradores
            </StyledLink>
          </MenuItem>
        </MenuList>
      </Drawer>
    </nav>
  );
};

export default Menu;
