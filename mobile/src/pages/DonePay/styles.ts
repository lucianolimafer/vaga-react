import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
`;

export const AnimationContainer = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 24px;
  margin-top: 32px;
`;

export const TextInfoPaymentDone = styled.Text`
 color: #403d54;
 font-size: 48px;
 text-align: center;
 font-family: 'Poppins-Medium';
`;

export const BackToStore = styled.TouchableOpacity`
  width: 260px;
  height: 48px;
  border-radius: 24px;
  background: #403d54;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 18px;
  align-self: center;
  padding: 16px;
`;

export const TextBack = styled.Text`
  font-size: 24px;
  color: #f5f5f5;
  font-family: 'Poppins-Medium';
`;

export const ArrowIcon = styled.Image`
  width: 32px;
  height: 18px;
`;
