import React, { useState } from 'react';
import styled from 'styled-components'
import "./App.css"

import DropDown from './Img/DropDown.png'
import MenuBar from './Img/ic_menu_b.png'

function ProductionPlanDetailsBox({ title, material_name, current_amount, ProcessName, manager_name }) {

    const [menubar, setMenubar] = useState('전체')
    const [isOpen, setIsOpen] = useState(true);

    const array = [
        '진행',
        '완료',
        '공유'
    ]

    const onClickIsOpen = () => {
        if (isOpen === true) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <>
            <MenuDiv>
                <div>
                    <div>
                        <div onClick={onClickIsOpen} style={{ backgroundColor: menubar === '진행' ? '#25b4b4' : '#b3b3b3 ' && menubar === '완료' ? '#2660fd' : '#b3b3b3' && menubar === '공유' ? '#dd4bbe' : '#b3b3b3' }}>
                            <img src={MenuBar} /><p>{menubar}</p>
                        </div>

                        <div hidden={isOpen}>
                            {array.map((v, i) => (
                                <>
                                    <p key={i} onClick={
                                        () => {
                                            setMenubar(v);
                                            setIsOpen(true);
                                        }
                                    }>{v}</p>33333
                                    <hr />
                                </>
                            ))}
                        </div>
                    </div>
                    <Table>
                        <tbody>
                            <tr>
                                <td><p>{title}</p></td>
                                <td><p>{material_name}</p></td>
                                <td><p>{current_amount}</p></td>
                                <td><p>{ProcessName}</p></td>
                                <td><p>{manager_name}</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </MenuDiv>
        </>
    )
}

function ProductionPlanDetails() {

    const info_list = [
        {
            id: 1,
            title: '제목들이랍니다',
            material_name: '품목(품목명)',
            current_amount: '10,000',
            ProcessName: '공정명 01',
            manager_name: '홍길동',
        },
        {
            id: 2,
            title: '제목들이랍니다',
            material_name: '품목(품목명)',
            current_amount: '10,000',
            ProcessName: '공정명 01',
            manager_name: '홍길동'
        },
        {
            id: 3,
            title: '제목들이랍니다',
            material_name: '품목(품목명)',
            current_amount: '10,000',
            ProcessName: '공정명 01',
            manager_name: '홍길동'
        },
        {
            id: 4,
            title: '제목들이랍니다',
            material_name: '품목(품목명)',
            current_amount: '10,000',
            ProcessName: '공정명 01',
            manager_name: '홍길동'
        },
        {
            id: 5,
            title: '제목들이랍니다',
            material_name: '품목(품목명)',
            current_amount: '10,000',
            ProcessName: '공정명 01',
            manager_name: '홍길동'
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
                info_list.map((obj, i) => {
                    return (
                        <ProductionPlanDetailsBox
                            key={i}
                            id={i}
                            title={obj.title}
                            material_name={obj.material_name}
                            current_amount={obj.current_amount}
                            ProcessName={obj.ProcessName}
                            manager_name={obj.manager_name}
                        />
                    )
                })
            }
        </>
    )
}

const Div = styled.div`
    
    &>p{
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
                border-radius: 6px;
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
                    font-size: 15px;
                    font-weight: bold;
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
    border-radius: 6px;
    background-color: #111319;
    display: flex;
    margin-top: 12px;
    
    font-size: 18px;
    &>p {
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
            font-size: 18px;
            font-weight: bold;
            line-height: 0.93;
        }
    }
`

const Table = styled.table`
    text-align: center;
    tbody {
        tr{
            td {
                &:nth-child( 1 ){
                    width: 146px;
                    padding-left: 58px;
                    height: 45px;
                }
                &:nth-child( 2 ){
                    width: 212px;
                    height: 45px;
                }
                &:nth-child( 3 ){
                    width: 215px;
                    height: 45px;
                }
                &:nth-child( 4 ){
                    width: 166px;
                    height: 45px;
                }
                &:nth-child( 5 ){
                    width: 164px;
                    height: 45px;
                }
            }
        }

    /* &>tr {
        td {
            width: 146px;
            padding-left: 58px;
            height: 45px;
        }
    }

    &>tr {
        td {
            width: 212px;
            height: 45px;
            }
    }

    &>tr {
        td {
            width: 215px;
            height: 45px;
        }
    }

    &>tr {
        td {
            text-align: center;
            width: 166px;
            height: 45px;
        }
    }

    &>tr {
        td {
            width: 164px;
            height: 45px;
        }
    } */
}

`

export default ProductionPlanDetails;
