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

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/orders');

      setOrders(
        response.data.map((order: Product) => ({
          ...order,
          formattedPrice: formatValue(order.price),
        })),
      );
    }

    loadProducts();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.textAreaHeader>
          <S.textIntro>Meus pedidos</S.textIntro>
        </S.textAreaHeader>
      </S.Header>
      <S.scrollContent>
        <S.ProductsContainer>
          <S.ProducstList
            showsVerticalScrollIndicator={false}
          >
            {orders.map(order => (
              <S.Product
                key={order.id}
                testID={`product-${order.id}`}
              >
                <S.ProductImageContainer source={{ uri: order.image_url}} />
                <S.ProductContent>
                  <S.ProdtuctTitle>{order.name}</S.ProdtuctTitle>
                  <S.ProdtuctDescription>{order.description}</S.ProdtuctDescription>
                  <S.priceCartContent>
                    <S.ProdtuctPrice>{order.formattedPrice}</S.ProdtuctPrice>
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

export default Orders;
