import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const bgChair = styled.Image`
  width: 250px;
  margin-right: -100px;
`;

export const containerIntro = styled.View`
  height: 100%;
`;

export const textNameApp = styled.Text`
  font-size: 64px;
  transform: rotate(-90deg);
`;

export const btnCircle = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  background: #ff334a;
  position: absolute;
  bottom: 24px;
  right: 24px;
  border-radius: 50;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Arrow = styled.Image``;
