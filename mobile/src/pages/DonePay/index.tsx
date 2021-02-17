import React, { useCallback } from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

import {PaySuccess} from '../../assets/animations';
import ArrowToBack from '../../assets/icons/arrow-left.png';

import * as S from './styles';


const DonePay: React.FC = () => {
  const {navigate} = useNavigation();

  const backToHomeStore = useCallback(() => {
    navigate('ListStore');
  }, []);

  return (
    <S.Container>
      <S.AnimationContainer>
        <LottieView
          style={{width: 200, height: 200}}
          autoPlay
          loop={false}
          source={PaySuccess}
        />
        <S.TextInfoPaymentDone>Pagamento Concluído</S.TextInfoPaymentDone>
      </S.AnimationContainer>
      <S.BackToStore
        activeOpacity={0.6}
        onPress={backToHomeStore}
      >
        <S.ArrowIcon source={ArrowToBack} />
        <S.TextBack>Voltar para loja</S.TextBack>
      </S.BackToStore>
    </S.Container>
  );
};

export default DonePay;
