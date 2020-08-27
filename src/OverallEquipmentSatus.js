import React from 'react';
import styled from 'styled-components'

import Left from './Img/Left.png'
import Right from './Img/Right.png'


function OverallEquipmentSatus() {

    return (
        <>
            <Div>
                <ButtonLeft><img src={Left} /></ButtonLeft><P>1공장(공장명 000 000 0000 )</P><ButotonRight><img src={Right} /></ButotonRight>
            </Div>

            <DivPress>
                <PLeftPress><img src={Left} /></PLeftPress>
                <div>
                    <div></div>
                </div>
                <PRightPress><img src={Right} /></PRightPress>
            </DivPress>
        </>
    )
}

const Div = styled.div`
    width: 1100px;
    height: 50px;  
    border-radius: 6px;
    background-color: #111319;
    position: relative;
`

const P = styled.p`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.4px;
    text-align: center;
    color: #ffffff;
    padding: 10px;
`

const ButtonLeft = styled.button`
  width: 10px;
  height: 20px;
  position: absolute;
  top: 15px;
  left: 10px;
  border: none;
  background-color: transparent;

  img {
    width: 10px;
    height: 20px;
  }
`

const ButotonRight = styled.button`
    width: 10px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 15px;
    border: none;
    background-color: transparent;

    img {
        width: 10px;
        height: 20px;
    }
`

const PLeftPress = styled.button`
  width: 10px;
  height: 20px;
  position: absolute;
  top: 100px;
  left: 10px;
  border: none;
  background-color: transparent;

  img {
    width: 10px;
    height: 20px;
  }
`

const PRightPress = styled.button`
    width: 10px;
    height: 20px;
    color: #666d79;
    position: absolute;
    right: 10px;
    top: 100px;
    border: none;
    background-color: transparent;

    img {
        width: 10px;
        height: 20px;
    }
`

/*  */

const DivPress = styled.div`
    width: 1100px;
    height: 224px;
    padding-top: 10px;
    object-fit: contain;
    border-radius: 6px;
    background-color: #353b48;
    margin-top: 12px;
    position: relative;

    &>div {
        width: 150px;
        height: 214px;
        border-radius: 4px;
        background-color: #f4f6fa;
        margin-left: 60px;

        &>div {
            width: 150px;
            height: 38px;
            background-color: #25b4b4;
            border-radius: 4px;
        }
    }
`

export default OverallEquipmentSatus;
