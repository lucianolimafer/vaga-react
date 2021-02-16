import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import * as S from './styles';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import ArrowToBack from '../../assets/icons/arrow-back.png';
import LikeRed from '../../assets/icons/like-red.png';
import LikeGray from '../../assets/icons/like-gray.png';
import StartRating from '../../assets/icons/star.png';
import PlusIcon from '../../assets/icons/plusWhite.png';
import MinusIcon from '../../assets/icons/minusWhite.png';
import BagIcon from '../../assets/icons/bagpay.png';

interface Params {
  id: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  formattedPrice: string;
}

const ProducDetails: React.FC = () => {
  const [product, setProduct] = useState({} as Product);
  const [isFavorite, setIsFavorite] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);

  const {goBack} = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get(`/products/${routeParams.id}`);

      setProduct({
        ...response.data,
        formattedPrice: formatValue(response.data.price),
      });
    }

    loadProduct();
  }, [routeParams]);

  const handleToBackScreen = useCallback(() => {
    goBack();
  }, []);

  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      api.delete(`/favorites/${product.id}`);
    } else {
      api.post(`favorites`, product)
    }

    setIsFavorite(!isFavorite);
  }, [isFavorite, product]);

  const favoriteIconName = useMemo(() => (isFavorite ? LikeRed : LikeGray),
    [isFavorite]
  );

  function handleIncrement(): void {
    setProductQuantity(productQuantity + 1);
  }

  function handleDecrement(): void {
    if (productQuantity === 1) {
      return
    }
    setProductQuantity(productQuantity - 1);
  }

  const consumeTotal = useMemo(() => {
    const total = productQuantity * product.price;

    return formatValue(total)
  }, [productQuantity, product.price]);

  return (
    <S.Container>
      <S.ImageFeature source={{uri: product.image_url}}>
        <S.Header>
          <S.BackBtn activeOpacity={0.6} onPress={handleToBackScreen}>
            <S.ArrowBack source={ArrowToBack} />
          </S.BackBtn>
          <S.LikeBtn activeOpacity={0.6} onPress={toggleFavorite}>
            <S.LikeIcon source={favoriteIconName} />
          </S.LikeBtn>
        </S.Header>
      </S.ImageFeature>
      <S.Card>
        <S.TitleRatingContainer>
          <S.TitleProduct>{product.name}</S.TitleProduct>
          <S.RatingCard>
            <S.RatingStar source={StartRating} />
            <S.RatingCounter>4,7</S.RatingCounter>
          </S.RatingCard>
        </S.TitleRatingContainer>
        <S.textDescription>{product.description}</S.textDescription>
        <S.ModelSelect>
          <S.ImageSelect source={{ uri: product.image_url }} />
          <S.ImageSelect source={{ uri: product.image_url }} />
        </S.ModelSelect>
        <S.PriceIncrementContainer>
          <S.ProductPrice>{consumeTotal}</S.ProductPrice>
          <S.CardIncrement>
            <S.IncOrDecrementBtn onPress={handleDecrement}>
              <S.ImageIncOrDecrement source={MinusIcon} />
            </S.IncOrDecrementBtn>
            <S.QuantityProduct>{productQuantity}</S.QuantityProduct>
            <S.IncOrDecrementBtn onPress={handleIncrement}>
              <S.ImageIncOrDecrement source={PlusIcon} />
            </S.IncOrDecrementBtn>
          </S.CardIncrement>
        </S.PriceIncrementContainer>
        <S.payButton>
          <S.payText>comprar</S.payText>
          <S.payImage source={BagIcon} />
        </S.payButton>
      </S.Card>
    </S.Container>
  );
};

export default ProducDetails;
