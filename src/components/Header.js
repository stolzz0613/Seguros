import React from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ContendorHeader = styled.header`
    background-color: #26C6DA;
    padding:10px;
    font-weight:bold;
    color:#FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size:2rem;
    margin:0;
    font-family:'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({ titulo }) => {
    return (
        <ContendorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContendorHeader>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;