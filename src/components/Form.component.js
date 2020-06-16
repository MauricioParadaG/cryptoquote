import React, {useState} from 'react';
import styled from '@emotion/styled';
import useFiat from '../hooks/useFiat';

const ButtonForm = styled.input`
   margin-top: 20px;
   font-weight: bold;
   font-size: 20px;
   padding: 10px;
   background-color: #66a2fe;
   border: none;
   width: 100%;
   border-radius: 10px;
   color: #FFF;
   transition: background-color .6s ease;

   &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`; 



////////////////////////////////////////////////////
////////////////////////////////////////////////////




const FormComponent = () => {
    // My first custom hook
    const [fiat, setFiat, SelectYourFiat] = useFiat();

    return (
        <form>
            <SelectYourFiat/>

        <ButtonForm
          type="submit"
          value="Quotation"
        />
        </form>
    )
}

export default FormComponent;

