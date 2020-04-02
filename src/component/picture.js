import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    justify-content: center;

    padding: 0 0.5rem 0 0.5rem;
    margin: 0 0.5rem 0.5rem 0.5rem;
`;

class Picture extends Component {
    render = () => {
        return (
            <Card>
                <img src={this.props.url} alt="" />
            </Card>
        );
    };
}

export default Picture;