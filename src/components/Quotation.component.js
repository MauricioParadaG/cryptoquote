import React from 'react';
import styled from '@emotion/styled';

const ApiAnswerDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const QuoteInfo = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Price = styled.p`
    font-size: 30px;

    span {
        font-weight:bold;
    }
`;


/////////////////////////////////////////////////


const QuotationComponent = props => {
    if(Object.keys(props.apiAnswerState).length === 0) return null;

    return (
        <ApiAnswerDiv>
            <Price>The price is: <span>{props.apiAnswerState.PRICE}</span></Price>
            <QuoteInfo>The last update was: <span>{props.apiAnswerState.LASTUPDATE}</span></QuoteInfo>
            <QuoteInfo>The maximun price today was: <span>{props.apiAnswerState.HIGHDAY}</span></QuoteInfo>
            <QuoteInfo>The minimun price today was: <span>{props.apiAnswerState.LOWDAY}</span></QuoteInfo>
            <QuoteInfo>The last hour price was: <span>{props.apiAnswerState.LOWHOUR}</span></QuoteInfo>
            <QuoteInfo>The % variation of the last 24 hours was: <span>{props.apiAnswerState.CHANGEPCT24HOUR}</span></QuoteInfo>
        </ApiAnswerDiv>
    )
}

export default QuotationComponent;
