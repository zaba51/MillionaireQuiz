import styled from "styled-components";

export const Wrapper = styled.div`
    color: white;
    font-size: 20px;
    line-height: 1.5;
    text-align: justify; 
    padding:20px;

    @media screen and (max-width: 600px) {
        font-size: 16px;

        h2 {
            font-size: 20px;
        }
    }
`