import React, { useState } from 'react';
import styled from 'styled-components'
import "./App.css"

import DropDown from './Img/DropDown.png'
import MenuBar from './Img/ic_menu_b.png'

function ProductionPlanDetails({ title, item, ProductionTarget, ProcessName, worker }) {

    const [menubar, setMenubar] = useState('전체')
    const [hidden, setHidden] = useState(true);

    const array = [
        '진행',
        '완료',
        '공유'
    ]

    const onClickHidden = () => {
        if (hidden === true) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    }

    return (
        <>
            <MenuDiv>
                <div>
                    <div>
                        <div onClick={onClickHidden} style={{ backgroundColor: menubar === '진행' ? '#25b4b4' : '#b3b3b3 ' && menubar === '완료' ? '#2660fd' : '#b3b3b3' && menubar === '공유' ? '#dd4bbe' : '#b3b3b3' }}>
                            <img src={MenuBar} /><p>{menubar}</p>
                        </div>

                        <div hidden={hidden}>
                            {array.map((v, i) => (
                                <>
                                    <p key={i} onClick={
                                        () => {
                                            setMenubar(v);
                                            setHidden(true);
                                        }
                                    }>{v}</p>
                                    <hr />
                                </>
                            ))}
                        </div>
                    </div>
                    <table>
                        <tbody style={{ display: 'flex' }}>
                            <tr>
                                <TdTitle><p>{title}</p></TdTitle>
                            </tr>
                            <tr>
                                <TdItem><p>{item}</p></TdItem>
                            </tr>
                            <tr>
                                <TdProdction><p>{ProductionTarget}</p></TdProdction>
                            </tr>
                            <tr>
                                <TdProcessName><p>{ProcessName}</p></TdProcessName>
                            </tr>
                            <tr>
                                <TdWorker><p>{worker}</p></TdWorker>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </MenuDiv>
        </>
    )
}

function ProductionPlanDetailsMap() {

    const Production = [
        {
            id: 1,
            title: '제목들이랍니다',
            item: '품목(품목명)',
            ProductionTarget: '10,000',
            ProcessName: '공정명 01',
            worker: '홍길동'
        },
        {
            id: 2,
            title: '제목들이랍니다',
            item: '품목(품목명)',
            ProductionTarget: '10,000',
            ProcessName: '공정명 01',
            worker: '홍길동'
        },
        {
            id: 3,
            title: '제목들이랍니다',
            item: '품목(품목명)',
            ProductionTarget: '10,000',
            ProcessName: '공정명 01',
            worker: '홍길동'
        },
        {
            id: 4,
            title: '제목들이랍니다',
            item: '품목(품목명)',
            ProductionTarget: '10,000',
            ProcessName: '공정명 01',
            worker: '홍길동'
        },
        {
            id: 5,
            title: '제목들이랍니다',
            item: '품목(품목명)',
            ProductionTarget: '10,000',
            ProcessName: '공정명 01',
            worker: '홍길동'
        }
    ]

    return (
        <>
            <Div>
                <p>생산 계획 내역</p>
                <div>
                    <div style={{ backgroundColor: '#b3b3b3' }}>전체</div>
                    <div style={{ backgroundColor: '#25b4b4' }}>진행</div>
                    <div style={{ backgroundColor: '#2660fd' }}>완료</div>
                    <div style={{ backgroundColor: '#dd4bbe' }}>공유</div>
                    <div>
                        <button>생산 계획 추가</button>
                        <div><img src={DropDown} /><p>등록일 순</p></div>
                    </div>
                </div>
            </Div>
            <Menu>
                <p>작업 현황</p>
                <p>제목</p>
                <p>품목(제품명)</p>
                <p>생산 목표량</p>
                <p>공정명</p>
                <p>작업자</p>
            </Menu>

            {
                Production.map((obj, i) => {
                    return (
                        <ProductionPlanDetails
                            key={i}
                            id={i}
                            title={obj.title}
                            item={obj.item}
                            ProductionTarget={obj.ProductionTarget}
                            ProcessName={obj.ProcessName}
                            worker={obj.worker}
                        />
                    )
                })
            }
        </>
    )
}

const Div = styled.div`
    &>p{
        object-fit: contain;
        font-size: 22px;
        font-weight: bold;
        margin-top: 40px;
        margin-bottom: 12px;
        letter-spacing: 0.44px;
        text-align: left;
        color: #ffffff;
    }
    
   &>div {
       display: flex;
        &>div {
            &:not(:last-child) {
                padding: 8px 16px;
                object-fit: contain;
                border-radius: 6px;
                object-fit: contain;
                font-family: NotoSansCJKkr;
                font-size: 15px;
                font-weight: bold;
                line-height: 1.13;
                text-align: center;
                color: #111319;
                margin-right: 10px;
            }
            &:last-child {
                display: flex;
                margin-left: 530px;
                button {
                    object-fit: contain;
                    font-family: NotoSansCJKkr;
                    font-size: 15px;
                    font-weight: bold;
                    line-height: 1.13;
                    text-align: center;
                    background-color: #717c90;
                    padding: 5px 20px;
                    border-radius: 6px;
                    border: none;
                    margin-right: 16px;
                }

                div {
                    object-fit: contain;
                    font-family: NotoSansCJKkr;
                    font-size: 15px;
                    font-weight: bold;
                    line-height: 1.13;
                    text-align: center;
                    background-color: #717c90;
                    padding: 5px 17px;
                    border-radius: 6px;
                    display: flex;

                    p {
                        padding-top: 2px;
                    }

                    img {
                        width: 20px;
                        margin-right: 5px;
                    }
                }
            }
        }
   }
`

const Menu = styled.div`
    width: 1100px;
    height: 50px;
    object-fit: contain;
    border-radius: 6px;
    background-color: #111319;
    display: flex;
    margin-top: 12px;
    &>p {
        font-family: NotoSansCJKkr;
        font-size: 18px;
        font-weight: bold;
        line-height: 0.93;
        text-align: left;
        color: #ffffff;
        margin: 16px 96px 0 17px;
    }
`

const MenuDiv = styled.div`
    width: 1100px;
    height: 50px;
    border-radius: 6px;
    background-color: #353b48;
    margin: 12px 0;
    
    &>div {
        display: flex;
            &>div{
                &>div{
                    &:not(:last-child){
                        width: 98px;
                        height: 50px;
                        object-fit: contain;
                        border-top-left-radius: 6px;
                        border-top-right-radius: 6px;

                        img {
                            width: 25px;
                            padding-top: 13px;
                            padding-left: 15px;
                        }

                        p {
                            font-size: 15px;
                            font-weight: bold;
                            line-height: 1.13;
                            margin-top: -25px;
                            text-align: center;
                            color: #111319;
                            margin-left: 25px;
                            
                        }

                        hr {
                            width: 78px;
                            margin-left: 7px;
                        }
                    }
                    &:last-child{
                        position: absolute;
                        width: 98px;
                        height: 105px;
                        background-color: #ffffff;
                        border-bottom-left-radius: 6px;
                        border-bottom-right-radius: 6px;
                        p {
                            font-family: NotoSansCJKkr;
                            font-size: 14px;
                            line-height: 1.2;
                            text-align: center;
                            color: #0d0d0d;
                            padding: 8px;

                            :hover {
                                height: 17px;
                                border-radius: 6px;
                                background-color: #19b9df;
                            }
                        }
                    }
                }
        }           
        p {
            color: #ffffff;
            object-fit: contain;
            font-size: 18px;
            font-weight: bold;
            line-height: 0.93;
        }
    }
`

const TdTitle = styled.td`
    width: 146px;
    padding-left: 58px;
    text-align: center;
    height: 45px;
`

const TdItem = styled.td`
    text-align: center;
    width: 212px;
    height: 45px;
`
const TdProdction = styled.td`
    text-align: center;
    width: 215px;
    height: 45px;
`

const TdProcessName = styled.td`
    text-align: center;
    width: 166px;
    height: 45px;
`

const TdWorker = styled.td`
    text-align: center;
    width: 164px;
    height: 45px;
`

export default ProductionPlanDetailsMap;
