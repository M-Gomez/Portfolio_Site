// src/components/ThemeToggle.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  cursor: pointer;
`;

const ThemeToggle = ({ toggleTheme }) => {
    return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default ThemeToggle;
