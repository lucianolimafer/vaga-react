import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {CreditCardInput} from 'react-native-input-credit-card';
import ArrowToBack from '../../assets/icons/arrow-back.png';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import * as S from './styles';

interface Params {
  consumeTotal: string;
}

const Payment: React.FC = () => {
  const {goBack, navigate} = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  const handleToBackScreen = useCallback(() => {
    goBack();
  }, []);

  return (
    <S.Container>
      <S.Header>
          <S.BackBtn activeOpacity={0.6} onPress={handleToBackScreen}>
            <S.ArrowBack source={ArrowToBack} />
          </S.BackBtn>
        </S.Header>
      <CreditCardInput
        requiresName
        requiresCVC
        labels={{
          name: 'NOME',
          number: 'NUMERO DO CARTÃO',
          expiry: 'VALIDADE',
          cvc: 'CVC',
          postalCode: '3211'
        }}
        placeholders={{
          name: 'NOME',
          number: 'NUMERO DO CARTÃO',
          expiry: 'VALIDADE',
          cvc: 'CVC',
          postalCode: '3211'
        }}
        labelStyle={{
          color: 'black',
          fontSize: 12,
        }}
        inputStyle={{color: 'black', fontSize: 16}}
        validColor='black'
        invalidColor='red'
        placeholderColor='darkgray'
        allowScroll
        onFocus={() => {}}
        onChange={() => {}}
      />
      <S.SendInfos>
        <S.StreetContainer>
          <S.StreetTitle>Entrega: Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200</S.StreetTitle>
          <S.sendContainer>
            <S.totoValueTitle>Valor Cobrado:</S.totoValueTitle>
            <S.totalValue>{routeParams.consumeTotal}</S.totalValue>
          </S.sendContainer>
        </S.StreetContainer>
      </S.SendInfos>
      <S.payButton onPress={() => navigate('DonePay')}>
        <S.payText>confirmar compra</S.payText>
      </S.payButton>
    </S.Container>
  );
};

export default Payment;
