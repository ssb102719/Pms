import React from 'react';
import Refresh from './Img/Refresh.png'
import styled from 'styled-components'

import OverallEquipmentSatus from './OverallEquipmentSatus'
import ProductionPlanDetails from './ProductionPlanDetails'

function App() {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <Wrapper>
                <Div>
                    <p>전체 장비 현황</p>
                    <button onClick={refreshPage}><img src={Refresh} /></button>
                </Div>
                <OverallEquipmentSatus />
                <ProductionPlanDetails />
            </Wrapper>
        </>
    )
}

const Div = styled.div`
    display: flex;
    p {
        font-size: 22px;
        font-weight: bold;
        line-height: 4.55;
        text-align: left;
        color: #ffffff;
        margin-right: 12px;
    }

    button {
        width: 28px;
        height: 28px;
        border: none;
        background-color:transparent;
        margin-top: 35px;
        img {
            width: 28px;
            height: 28px;
        }
    }
`

const Wrapper = styled.div`
    width: 1160px;
    margin: 0 auto;
    position: relative;
    font-family: NotoSansCJKkr;

`


export default App;
