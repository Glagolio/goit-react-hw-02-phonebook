import React from 'react';
import MainPage from './Main.styled';

const Main = ({ title, children }) => (
  <MainPage>
    <h2>{title}</h2>
    {children}
  </MainPage>
);

export default Main;
