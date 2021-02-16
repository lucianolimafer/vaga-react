import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  background: #fff;
  border-radius: 16px;
  border-width: 2px;
  border-color: #f0f0f5;
  flex-direction: row;
  align-items: center;
  ${props =>
    props.isFocused &&
    css`
      border-color: #403d54;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #403d54;
  font-size: 16px;
  font-family: 'Poppins-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
