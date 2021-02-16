import React, { useEffect, useState } from 'react';
import SearchInput from '../../components/SearchInput';

import AvatarImg from '../../assets/images/avatar.png';
import CartIcon from '../../assets/icons/bag.png';

import * as S from './styles';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import { useNavigation } from '@react-navigation/native';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  tumbnail_url: string;
  formattedPrice: string;
}

interface Category {
  id: number;
  title: string;
  image_url: string;
}

const ListStore: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>();
  const [searchValue, setSearchValue] = useState('');

  const {navigate} = useNavigation();

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products', {
        params: {
          category_like: selectedCategory,
          name_like: searchValue,
        }
      });

      setProducts(
        response.data.map((product: Product) => ({
          ...product,
          formattedPrice: formatValue(product.price),
        })),
      );
    }

    loadProducts();
  }, [selectedCategory, searchValue]);

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      const response = await api.get('/categories');

      setCategories(response.data);
    }

    loadCategories();
  }, []);

  function handleSelectCategory(id: number): void {
    if (selectedCategory === id) {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(id);
    }
  }

  async function handleNavigate(id: number): Promise<void> {
    navigate('ProducDetails', {
      id,
    });
  }

  return (
    <S.Container>
      <S.Header>
        <S.textAreaHeader>
          <S.textIntro>Melhores móveis</S.textIntro>
          <S.textDescriptIntro>Escolha perfeita</S.textDescriptIntro>
        </S.textAreaHeader>
        <S.Avatar source={AvatarImg} />
      </S.Header>
      <S.scrollContent>
        <SearchInput value={searchValue} onChangeText={setSearchValue} placeholder="Qual mobília você procura?" />
        <S.categoryContainer>
          <S.categorySlider
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map(category => (
              <S.categoryItem
                key={category.id}
                isSelected={category.id === selectedCategory}
                onPress={() => handleSelectCategory(category.id)}
                activeOpacity={0.6}
                testID={`category-${category.id}`}
              >
                <S.categoryItemTitle
                  isSelected={category.id === selectedCategory}
                >
                    {category.title}
                </S.categoryItemTitle>
              </S.categoryItem>
            ))}
          </S.categorySlider>
        </S.categoryContainer>
        <S.ProductsContainer>
          <S.ProducstList
            showsVerticalScrollIndicator={false}
          >
            {products.map(product => (
              <S.Product
                key={product.id}
                testID={`product-${product.id}`}
              >
                <S.ProductImageContainer source={{ uri: product.image_url}} />
                <S.ProductContent>
                  <S.ProdtuctTitle>{product.name}</S.ProdtuctTitle>
                  <S.ProdtuctDescription>{product.description}</S.ProdtuctDescription>
                  <S.priceCartContent>
                    <S.ProdtuctPrice>{product.formattedPrice}</S.ProdtuctPrice>
                    <S.addToCartBtn onPress={() => handleNavigate(product.id)}>
                      <S.AddText>comprar</S.AddText>
                      <S.CartImage source={CartIcon} />
                    </S.addToCartBtn>
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

export default ListStore;
