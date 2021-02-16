import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
`;

export const ImageFeature = styled.ImageBackground`
  width: 100%;
  height: 400px;
`

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

export const LikeBtn = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LikeIcon = styled.Image`
  width: 17px;
  height: 15px;
`;

export const Card = styled.View`
  width: 100%;
  height: 364px;
  background: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  position: absolute;
  bottom: 0%;
  padding: 24px 24px;
`;

export const TitleRatingContainer = styled.View`
  width: 100%;
  display: flex;
  height: 28px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleProduct = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 24px;
  color: #403C56;
`
export const RatingCard = styled.View`
  width: 64px;
  height: 28px;
  border: 1px solid #AAA6A6;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`;

export const RatingStar = styled.Image`
  width: 18px;
  height: 18px;
`;

export const RatingCounter = styled.Text`
  color: #AAA6A6;
`;

export const textDescription = styled.Text`
  font-family: 'Poppins-ExtraLight';
  font-size: 18px;
  color: #AAA6A6;
  margin: 16px 0;
`;

export const ModelSelect = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  margin-bottom: 16px;
`;

export const ImageSelect = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  margin-right: 8px;
`;

export const PriceIncrementContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ProductPrice = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 24px;
  color: #403C56;
`
export const CardIncrement = styled.View`
  width: 92px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  background: #FF4644;
  border-radius: 8px;
`;

export const IncOrDecrementBtn = styled.TouchableOpacity``

export const ImageIncOrDecrement = styled.Image`
  width: 24px;
  height: 24px;
`;

export const QuantityProduct = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: 'Poppins-Medium';
`;

export const payButton = styled.TouchableOpacity`
  background: #FF4644;
  width: 100%;
  height: 64px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  margin-top: 16px;
`;

export const payText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: 'Poppins-Medium';
`;

export const payImage = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 16px;
`;
