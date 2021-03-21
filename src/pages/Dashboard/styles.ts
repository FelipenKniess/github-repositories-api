import styled, {css} from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Error = styled.span`
    color: #c53030;
    margin-top:8px;
    display: block;
`;

export const Title = styled.h1`
    font-size: 48px;
    margin-top:102px;
    max-width:450px;
    color: #3A3A3A;
`;

export const Form = styled.form<FormProps>`
    display: flex;
    margin-top: 40px;
    width: 714px;

    input {
        flex: 1;
        color: #A8A8B3;
        height: 72px;
        border: 0;
        border-radius: 5px 0 0 5px;
        padding: 0px 15px;
        border: 2px solid #FFF;
        border-right: 0;

        ${(props) => props.hasError &&
            css`
                border-color: #c53030;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        background: #04D361;
        color: #FFF;
        border: none;
        font-weight: bold;
        border-radius: 0 5px 5px 0px;
        transition: 0.2s background;

        &:hover {
            background: ${shade(0.2, '#04D361' )}
        }
    }
`;

export const Repositories =  styled.div`
    a {
        display: block;
        display: flex;
        width: 714px;
        padding: 20px;
        margin-top: 120px;
        background: #FFF;
        align-items: center;
        text-decoration: none;
        transition: transform 0.2s;
        border-radius: 5px;

        &:hover {
            transform: translateX(10px);

            svg {
                color: ${shade(0.2, '#C9C9D4')};
            }
        }

        & + a {
            margin-top: 16px;
        }

        img {
            height: 83px;
            width: 83px;
            border-radius: 50%;
        }

        div {
            margin:0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3D3D4D;
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #C9C9D4;
        }
    }
`;
