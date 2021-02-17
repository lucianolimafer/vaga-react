import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const SwitchContainer = styled.Switch`
  margin: 20px 0;
`;

export const Header = styled.View`
  padding: 0 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackBtn = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ArrowBack = styled.Image`
  width: 8px;
  height: 18px;
`;

export const SendInfos = styled.View`
  align-self: center;
  width: 90%;
  height: 160px;
  border: 1px solid #fff;
  border-radius: 24px;
  padding: 8px;
`;

export const StreetContainer = styled.View`
  width: 100%;
  height: 48px;
  background: #fff;
  border-radius: 12px;
  padding: 8px;
  margin-bottom: 8px;
`;

export const StreetTitle = styled.Text``;

export const sendContainer = styled.View`
  width: 100%;
  height: 48px;
  background: #fff;
  border-radius: 12px;
  padding: 8px;
  margin-top: 16px;
`;

export const totoValueTitle = styled.Text``;

export const totalValue = styled.Text`
  color: #FF4644;
`;

export const payButton = styled.TouchableOpacity`
  background: #FF4644;
  width: 90%;
  height: 64px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  margin-top: 16px;
  align-self: center;
`;

export const payText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: 'Poppins-Medium';
`;
