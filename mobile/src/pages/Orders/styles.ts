import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
`;

export const Header = styled.View`
  padding: 0 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  width: 310px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const textAreaHeader = styled.View`
  width: 100%;
`;

export const textIntro = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 24px;
  line-height: 36px;
`;

export const textDescriptIntro = styled.Text`
  font-family: 'Poppins-ExtraLight';
  font-size: 18px;
  font-weight: 200;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 16px;
`;

export const scrollContent = styled.View`
  width: 100%;
  height: 100%;
  padding: 16px 24px 0;
`;

export const ProductsContainer = styled.View`
  padding: 18px 0;
`;

export const ProducstList = styled.ScrollView``;

export const Product = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  padding: 8px;
  height: 160px;
  border-radius: 24px;
  margin-bottom: 18px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const ProductImageContainer = styled.Image`
  border-radius: 24px;
  width: 140px;
  height: 140px;
`;

export const ProductContent = styled.View`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

export const ProdtuctTitle = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 20px;
  line-height: 22px;
  color: #403C56;
`;

export const ProdtuctDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 10px;
  line-height: 16px;
  color: #403C56;
`;

export const priceCartContent = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProdtuctPrice = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 12px;
  color: #403C56;
`;

export const addToCartBtn = styled.TouchableOpacity`
  width: 64px;
  height: 28px;
  border-radius: 8px;
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #403C56;
`;

export const AddText = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 8px;
  color: #fff;
`;


export const CartImage = styled.Image`
  width: 16px;
  height: 16px;
`;
