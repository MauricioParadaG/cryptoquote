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

const SelectCrypto = styled.select`
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


const useCrypto = (labelCrypto, inicialState, optionsCrypto) => {

    const [state, setState] = useState(inicialState);


    const Select = () => (
        <>
          <Label>{labelCrypto}</Label>
          <SelectCrypto
            onChange={event => setState(event.target.value)}
            value={state}
          >
            <option value="">- Select -</option>
            {optionsCrypto.map(option => (
              <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
            ))}
          </SelectCrypto>
        </>
    );

    return [state, Select];

}

export default useCrypto;
