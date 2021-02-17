import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import { useNavigation } from '@react-navigation/native';
import AvatarImg from '../../assets/images/avatar.png';
import CartIcon from '../../assets/icons/bag.png';

import * as S from './styles';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  tumbnail_url: string;
  formattedPrice: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    async function loadFavorites(): Promise<void> {
      const response = await api.get('/favorites');

      setFavorites(
        response.data.map((favorite: Product) => ({
          ...favorite,
          formattedPrice: formatValue(favorite.price),
        })),
      );
    }

    loadFavorites();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.textAreaHeader>
          <S.textIntro>Meus favoritos</S.textIntro>
        </S.textAreaHeader>
      </S.Header>
      <S.scrollContent>
        <S.ProductsContainer>
          <S.ProducstList
            showsVerticalScrollIndicator={false}
          >
            {favorites.map(favorite => (
              <S.Product
                key={favorite.id}
                testID={`product-${favorite.id}`}
              >
                <S.ProductImageContainer source={{ uri: favorite.image_url}} />
                <S.ProductContent>
                  <S.ProdtuctTitle>{favorite.name}</S.ProdtuctTitle>
                  <S.ProdtuctDescription>{favorite.description}</S.ProdtuctDescription>
                  <S.priceCartContent>
                    <S.ProdtuctPrice>{favorite.formattedPrice}</S.ProdtuctPrice>
                  </S.priceCartContent>
                </S.ProductContent>
              </S.Product>
            ))}
          </S.ProducstList>
        </S.ProductsContainer>
      </S.scrollContent>
    </S.Container>
  );
};

export default Favorites;
