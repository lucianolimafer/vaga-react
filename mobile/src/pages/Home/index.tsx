import React, { useCallback } from 'react';
import {useNavigation} from '@react-navigation/native';

import imgChair from '../../assets/images/chair.png';
import Arrow from '../../assets/icons/arrow-right.png';

import * as S from './styles';

const Home: React.FC = () => {
  const {navigate} = useNavigation();

  const navigateToStore = useCallback(() => {
    navigate('MainBottom', {
      screen: 'ListStore',
    });
  }, []);

  return (
    <S.Container>
      <S.bgChair source={imgChair}/>
      <S.textNameApp>forniturefer</S.textNameApp>
      <S.btnCircle onPress={navigateToStore}>
        <S.Arrow source={Arrow} />
      </S.btnCircle>
    </S.Container>
  );
};

export default Home;
