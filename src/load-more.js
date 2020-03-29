import React, { Component } from 'react';
import styled from 'styled-components';

const WrapBtn = styled.div`
    display: flex;
    justify-content: center;
`;

const Btn = styled.button`
    font-size: 1.5rem;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #333333;
    border-radius: 0.5rem;
    color: black;
    cursor: pointer;
`;

class LoadMore extends Component {
    static defaultProps = {
        loadMore: () => console.log('더 불러오기 버튼이 존재하지 않습니다.')
    };

    render() {
        return (
            <WrapBtn>
                <Btn onClick={this.props.loadMore}>더 많은 사진 불러오기</Btn>
            </WrapBtn>
        );
    }
}

export default LoadMore;