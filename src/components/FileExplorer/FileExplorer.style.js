import styled from "styled-components";

export const Tree = styled.div`
    line-height: 1.5;
`;

export const File = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
    span {
        margin-left: 5px;
    }
`;

export const Folder = styled.div`
    padding-left: 20px;

    .folder--label {
        display: flex;
        align-items: center;
        span {
            margin-left: 5px;
        }
    }
`;

export const Collapsible = styled.div`
    height: ${p => (p.isOpen ? "0" : "auto")};
    overflow: hidden;
`;
