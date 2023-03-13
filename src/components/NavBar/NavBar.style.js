import styled, { css } from 'styled-components';

export const NavBar = styled.div`
    height: 35px;
    background: rgb(22, 16, 37, 0.8);
    display: flex;
`

export const Tab = styled.div`
    background: rgb(22, 16, 37, 0.5);
    color: rgba(255, 255, 255, 0.5);
    line-height: 35px;
    display: flex;
    justify-content: space-between;
    width: 120px;
    min-width: fit-content;

    ${props => props['data-active']===true && css`
        background: rgb(22, 16, 37);
        color: rgb(255, 255, 255);
    `}
`

export const FileLabel = styled.span`
    padding-left: 10px;

    &:before {
        font-weight: bold;
        padding-right: 6px;
        color: #cbcb41;
        content: '${props => !!props['data-fileType'] ? props['data-fileType'] : "#"}';
    }
`

export const CloseButton = styled.a`
    width: 28px;
    justify-content: flex-end;
    text-align: center;

    &:hover {
        background-color: rgb(22, 16, 37, 0.5);
    }

    &:before {
        color: rgb(255, 255, 255);
        content: '🗙';
    }
`


