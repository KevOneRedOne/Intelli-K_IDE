import styled from 'styled-components'

const Logo = () => {
    return (
        <StyledContainer className="logo">
            <StyledLogo src="/public/images/logo/IntelliK-192.png" alt="logo"/>
        </StyledContainer>        
    );
};

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledLogo = styled.img`
    width: 100%;
    height: 100%;
`;


export default Logo;