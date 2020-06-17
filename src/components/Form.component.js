import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import useFiat from '../hooks/useFiat.hook';
import useCrypto from '../hooks/useCrypto.hook';
import axios from 'axios';
import ErrorComponent from './Error.component';

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




const FormComponent = props => {

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

    //Error
    const [error, setErrorState] = useState(false);

    // Consuming API 
    useEffect(() => {

        const checkingApi = async () =>{
            
            const res = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');

            setListCryptoState(res.data.Data);
        }
        checkingApi();
    }, []);



    const onSubmit = event => {
        event.preventDefault();

    // validation
    if (fiat.trim() ==='' || 
        cryptoCoin.trim() ==='' ){
        setErrorState(true);
        return;
    } 
     setErrorState(false);

     props.setFormFiatSearchedState(fiat);
     props.setFormCryptoSearchedState(cryptoCoin);
    }



    return (
        <form onSubmit={onSubmit}>
         {/** if - error message with .css*/}
         {error ?
            <ErrorComponent message="All filds are required"/>
            : null
        }

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

