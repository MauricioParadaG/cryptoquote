import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectFiat = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`


/////////////////////////////////////////////////
/////////////////////////////////////////////////


const useFiat = () => {

    const [state, setState] = useState('');

    const Select = () => (
        <>
          <Label>Choose your currency</Label>
          <SelectFiat
          //  onChange={onChangeForm}
          //  value={searchCoin.fiat}
          >
            <option value="">- Select -</option>
            <option value="COP">Peso Colombiano</option>
            <option value="DE">Deutschland</option>
            <option value="US">United States</option>
            <option value="MXN">Peso Mexicano</option>
            <option value="ES">España</option>
          </SelectFiat>
        </>
    );

    return [state, setState, Select];

}

export default useFiat;
