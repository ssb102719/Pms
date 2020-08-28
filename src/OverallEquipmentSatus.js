import React from 'react';
import styled from 'styled-components'

import Left from './Img/Left.png'
import Right from './Img/Right.png'
import pressImg from './Img/pressImg.png'
import CloudRefresh from "./Img/CloudRefresh.png"
import Rotation from "./Img/Rotation.png"
import { BsFillCircleFill } from "react-icons/bs";


function PressBox({ img, text }) {

    return (
        <>
            <div>
                <div>
                    <button><img src={CloudRefresh} /></button>
                    <img src={Rotation} className='Rotation' />
                </div>
                <img src={img} />
                <p>{text}</p>
            </div>

        </>
    )
}

function Factorys({ pk, name }) {
    return (
        <>
            <Div>
                <ButtonLeft><img src={Left} /></ButtonLeft>
                <div>
                    <P>{pk}{name}</P>
                </div>
                <ButotonRight><img src={Right} /></ButotonRight>
            </Div>
        </>
    )
}

function OverallEquipmentSatus() {
    const Press = [
        {
            id: 1,
            img: pressImg,
            text: '프레스 01'
        },
        {
            id: 2,
            img: pressImg,
            text: '프레스 02'
        },
        {
            id: 3,
            img: pressImg,
            text: '프레스 03'
        },
        {
            id: 4,
            img: pressImg,
            text: '프레스 04'
        },
        {
            id: 5,
            img: pressImg,
            text: '프레스 05'
        },
        {
            id: 6,
            img: pressImg,
            text: '프레스 06'
        },
    ]

    const results = [
        {
            id: 1,
            pk: '1공장',
            name: '(공장명 000 000 0000 )'
        }
    ]


    return (
        <>


            {
                results.map((obj, i) => (
                    <>
                        <Factorys
                            key={i}
                            id={i}
                            pk={obj.pk}
                            name={obj.name}
                        />
                    </>
                ))
            }

            <DivPress>
                <PLeftPress><img src={Left} /></PLeftPress>
                <PressDiv>
                    {
                        Press.map((obj, i) => (
                            <PressBox
                                key={i}
                                id={i}
                                img={obj.img}
                                text={obj.text}
                            />
                        ))
                    }
                </PressDiv>
                <PRightPress><img src={Right} /></PRightPress>
            </DivPress>
            {/*  <DivPage>
                <span style={{ color: '#19b9df'}}>
                    <BsFillCircleFill style={{ width: 10, height: 10 }} />
                </span>
                <span style={{ color: '#666d79'}}>
                    <BsFillCircleFill style={{ width: 10, height: 10 }} />
                </span>
                <span style={{ color: '#666d79'}}>
                    <BsFillCircleFill style={{ width: 10, height: 10 }} />
                </span>
                <span style={{ color: '#666d79'}}>
                    <BsFillCircleFill style={{ width: 10, height: 10 }} />
                </span>
            </DivPage> */}
        </>
    )
}

const Div = styled.div`
    width: 1100px;
    height: 50px;  
    border-radius: 6px;
    background-color: #111319;
    position: relative;
    display: flex;

    &>div {
        margin: 0 auto;
    }
`

const P = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    padding: 10px;
`

const ButtonLeft = styled.button`
  width: 10px;
  height: 20px;
  /* position: absolute; */
 /*  top: 15px;
  left: 10px; */
  border: none;
  background-color: transparent;
  margin: auto 0;
  margin-left: 20px;
  img {
    width: 10px;
    height: 20px;
  }
`

const ButotonRight = styled.button`
    width: 10px;
    height: 20px;
    /* position: absolute; */
  /*   right: 10px;
    top: 15px; */
    border: none;
    background-color: transparent;
    margin: auto 0;
    margin-right: 20px;
    img {
        width: 10px;
        height: 20px;
    }
`

const PLeftPress = styled.button`
  width: 10px;
  height: 20px;
  /* position: absolute; */
 /*  top: 100px;
  left: 10px; */
  border: none;
  background-color: transparent;
  margin: auto 0;
  margin-left: 20px;

  img {
    width: 10px;
    height: 20px;
  }
`

const PRightPress = styled.button`
    width: 10px;
    height: 20px;
    color: #666d79;
    /* position: absolute; */
    /* right: 10px;
    top: 100px; */
    border: none;
    background-color: transparent;
    margin: auto 0;

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
    border-radius: 6px;
    background-color: #353b48;
    margin-top: 12px;
    position: relative;
    display: flex;
   
`

const PressDiv = styled.div`
    display: flex;
    margin-right: 20px;
     &>div {
        width: 150px;
        height: 214px;
        border-radius: 4px;
        background-color: #f4f6fa;
        margin-left: 20px;

        &>div {
            width: 150px;
            height: 38px;
            background-color: #25b4b4;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            position:  relative;

            &>button {
                width: 25px;
                height: 25px;
                background-color: transparent;
                border: none;
                margin-top: 4px;
                margin-left: 3px;

                &>img{
                    width: 25px;
                    height: 25px;
                    margin-top: 4px;
                    margin-left: 3px;
                    }
                }

            &>img {
                width: 18px;
                height: 18px;
                position: absolute;
                right: 12px;
                top: 10px;
            }
        }


            &>img {
                width: 150px;
                height: 136px;
            }

            p {
                
                font-size: 18px;
                font-weight: bold;
                line-height: 1.44;
                text-align: center;
                color: #0d0d0d;
                padding-top: 3px;
            }
        }
        
`

const DivPage = styled.div`
    text-align: center;
    margin-right: 40px;
    padding-top: 12px;

    span {
        padding-right: 15px;
    }
`

export default OverallEquipmentSatus;
