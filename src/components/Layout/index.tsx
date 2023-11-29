import React from 'react';
import { Container } from './Layout.styled';
import { useAppSelector } from '../../redux/hooks';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const backgroundColor = useAppSelector(state => state.appManageSlice.screenBackgroundColor)

  return <Container color={backgroundColor}>{children}</Container>;
};
export default Layout;
