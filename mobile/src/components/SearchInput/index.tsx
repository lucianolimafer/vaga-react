import React, { useCallback, useState } from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps{
  name?: string;
}

const SearchInput: React.FC<InputProps> = ({ value = '', ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!value);
  }, [value]);

  return (
    <S.Container isFocused={isFocused}>
      <S.Icon
        name="search"
        size={32}
        color={isFocused || isFilled ? '#403d54' : '#AAA6A6'}
      />
      <S.TextInput
        placeholderTextColor="#AAA6A6"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        testID="search-input"
        {...rest}
      />
    </S.Container>
  );
};

export default SearchInput;
