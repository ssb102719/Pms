import React from 'react';
import styled from 'styled-components'
import "./App.css"

function ProductionPlanDetails() {
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
                        <div>등록일 순</div>
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
        </>
    )
}

const Div = styled.div`
    p{
        object-fit: contain;
        font-size: 22px;
        font-weight: bold;
        line-height: 4.55;
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
                margin-left: 10px;
            }
            &:last-child {
                    display: flex;
                    position: absolute;
                    right: 250px;
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
                        padding: 5px 27px;
                        border-radius: 6px;
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
    p {
        font-family: NotoSansCJKkr;
        font-size: 18px;
        font-weight: bold;
        line-height: 0.93;
        text-align: left;
        color: #ffffff;
        margin: 15px 93px 0 20px;
    }
`

/* div {
    display: flex;
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
        }

        div {
            object-fit: contain;
            font-family: NotoSansCJKkr;
            font-size: 15px;
            font-weight: bold;
            line-height: 1.13;
            text-align: center;
            background-color: #717c90;
            padding: 5px 27px;
            border-radius: 6px;
        }
   }
` */

export default ProductionPlanDetails;
