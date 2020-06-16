import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import useFiat from '../hooks/useFiat.hook';
import useCrypto from '../hooks/useCrypto.hook';
import axios from 'axios';

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

    const [listCrypto, setListCryptoState] = useState([]);

    const FIATCURRENCY = [
        {code: 'COP', name: 'Colombian Peso'},
        {code: 'USD', name: 'Dollar'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'UK Pound'},
        {code: 'CNY', name: 'Yuan China'}
    ];

    // My first custom hook
    const [fiat, SelectYourFiat] = useFiat('Choose your currency','', FIATCURRENCY);

    const [cryptoCoin, SelectYourCrypto] = useCrypto('Choose your Cryptocurrency','', listCrypto);

    // Consuming API 
    useEffect(() => {

        const checkingApi = async () =>{
            
            const res = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');

            setListCryptoState(res.data.Data);
        }
        checkingApi();
    }, []);



    return (
        <form>
            <SelectYourFiat/>
            <SelectYourCrypto/>

        <ButtonForm
          type="submit"
          value="Quotation"
        />
        </form>
    )
}

export default FormComponent;

