import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    /* background-color: #f8f9fa; */

    padding: 0 0.5rem 0 0.5rem;
    margin: 0 0.5rem 0.5rem 0.5rem;
    /* margin-bottom: 0.5rem; */

    /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
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