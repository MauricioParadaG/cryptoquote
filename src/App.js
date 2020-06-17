import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import image from './cryptoPic.png';
import FormComponent from './components/Form.component';
import axios from 'axios';


const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:925px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`; 

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;



///////////////////////////////////////////////////
///////////////////////////////////////////////////




function App() {

  const [formFiatSearched, setFormFiatSearchedState] = useState('');

  const [formCryptoSearched, setFormCryptoSearchedState] = useState('');


  useEffect(() => {
    if(formFiatSearched ==='') return;

    const askingPriceApi = async () =>{
            
      const res = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${formCryptoSearched}&tsyms=${formFiatSearched}`);

      console.log(res.data.DISPLAY[formCryptoSearched][formFiatSearched]);
      //setListCryptoState(res.data.Data);
    }
      askingPriceApi();

  }, [formFiatSearched, formCryptoSearched]);


  return (
    <AppContainer>
      <div>
        <Image
        src={image}
        alt="Cryto Quotation Site"
        />
      </div>

      <div>
        <Heading>
          Quote your Crytocurrency V1.0
        </Heading>
        <FormComponent
        setFormFiatSearchedState={setFormFiatSearchedState}
        setFormCryptoSearchedState={setFormCryptoSearchedState}
        />
      </div>
      
    </AppContainer>
  );
}

export default App;
