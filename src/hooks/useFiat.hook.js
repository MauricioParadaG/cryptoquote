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


const useFiat = (labelFiat, inicialState, optionsFiat) => {

    const [state, setState] = useState(inicialState);

    const Select = () => (
        <>
          <Label>{labelFiat}</Label>
          <SelectFiat
            onChange={event => setState(event.target.value)}
            value={state}
          >
            <option value="">- Select -</option>
            {optionsFiat.map(option => (
              <option key={option.code} value={option.code}>{option.name}</option>
            ))}
          </SelectFiat>
        </>
    );

    return [state, Select];

}

export default useFiat;
