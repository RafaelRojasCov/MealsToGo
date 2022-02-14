import styled from 'styled-components/native';

const defaultTextStyles = theme => `
  font-family: ${theme.fontFamily.body};
  font-weight: ${theme.fontWeight.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: ${theme.spacing.none};
  margin-bottom: ${theme.spacing.none};
`;

const body = theme => `
  font-size: ${theme.fontSize.body};
`;

const hint = theme => `
  font-size: ${theme.fontSize.body};
`;

const error = theme => `
  color: ${theme.colors.text.error};
`;

const caption = theme => `
  font-size: ${theme.fontSize.caption};
  font-weight: ${theme.fontWeight.bold};
`;

const label = theme => `
  font-family: ${theme.fontFamily.heading};
  font-size: ${theme.fontSize.body};
  font-weight: ${theme.fontWeight.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = 'body', theme }) => variants[variant](theme)}
`;
