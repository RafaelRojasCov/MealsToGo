import React from 'react';
import styled, { useTheme } from 'styled-components/native';

const positionVariant = {
  top: 'margin-top',
  left: 'margin-left',
  right: 'margin-right',
  bottom: 'margin-bottom',
};

const StyledView = styled.View`
  ${({ customStyle }) => customStyle};
`;

export const Spacer = ({ position = 'left', size = 'md' }) => {
  const theme = useTheme();
  const customStyle = `${positionVariant[position]}:${theme.spacing[size]}`;

  return <StyledView customStyle={customStyle} />;
};
