import React from 'react'
import styled from 'styled-components';
function Navbar() {
    return (
        <NavContainer>
            <ul>
                <li>
                    logo
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>
        </NavContainer>
    )
}

export default Navbar
const NavContainer = styled.div`
    height: 50px;
    width: 100%;
    position: sticky;
    top:0;
    > ul{
        display: flex;
        list-style-type: none;
        > li{
            margin: 0 10px;

        }
    }

`;