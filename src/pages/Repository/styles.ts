import styled from 'styled-components';
import { shade } from 'polished';

export const TopPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display:flex;
        align-items: center;
        text-decoration: none;
        color: #A8A8B3;

        &:hover {
            color: ${shade(0.2, '#A8A8B3')}
        }

        svg {
            margin-right: 12px;
        }
    }
`;
export const User = styled.div`
    display: flex;
    align-items: center;
    margin-top: 80px;

    img {
        border-radius: 50%;
        height: 120px;
        width: 120px;
    }

    div {
        margin-left: 32px;

        strong {
            color: #3D3D4D;
            font-size: 36px;
        }

        p {
            color: #737380;
            font-size: 20px;
        }
    }
`;

export const StatsRepository = styled.div`
    margin-top: 40px;
    display: flex;
    div {
        display:flex;
        flex-direction: column;

        & + div {
            margin-left: 80px;
        }

        strong {
            color: #3D3D4D;
            font-size: 36px;
        }

        span {
            font-size: 20px;
            color: #6C6C80;
        }
    }
`
export const Issues = styled.div`
    margin-top:80px;

    a{
        display:flex;
        align-items: center;
        background: #FFF;
        text-decoration: none;
        border-radius: 5px;
        padding: 20px;
        transition: transform 0.2s;

        & + a {
            margin-top:10px;
        }

        &:hover {
            transform: translateX(5px);

            svg {
                color: ${shade(0.2, '#C9C9D4')}
            }
        }

        strong {
            color: #3D3D4D;
            font-size:24px;
        }

        p {
            margin-top: 8px;
            color: #A8A8B3;
            font-size: 18px;
        }

        svg {
            color: #C9C9D4;
            margin-left: auto;
        }

    }

`;