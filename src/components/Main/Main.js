import React from 'react';
import MainPage from './Main.styled';

const Main = ({ title, children }) => (
  <MainPage>
    <h1>{title}</h1>
    {children}
  </MainPage>
);

export default Main;
