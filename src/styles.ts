import styled from "styled-components";
import pxtovw from './utils/pxtovw';

export const Header = styled.header`
    width: 100%;
    background-color: #000000;
    margin: 0;
    padding: 0 0 0 3%;

    box-shadow: 0px 0.25rem 0.25rem #00000040;
`;

export const WallpaperForm = styled.form`
    width: 100%;
    min-height: 12.5rem;
    background-color: #4F9419;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GridCards = styled.fieldset`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    border: none;

    padding-top: 3rem;
    padding-bottom: 3rem;

    /* @media(max-width: 425px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
    }

    @media(max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 60px;
    } */
`;

export const Card = styled.div`
    width: 15.625rem;
    height: 15.625rem;
    padding: 0.7rem;
    padding-top: 1rem;
    box-shadow: 0 0.25rem 0.25rem #00000040;
    transform: scale(1);
    transition: transform 1s;

    &:hover {
        transform: scale(1.02);
    }
`;

export const Label = styled.label`
    font: 400 1.125rem Roboto;
    color: #FFF;
`;

export const RowCard = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
`;

export const CardDescription = styled.div`
    width: 100%;
    height: 8.125rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.938rem;
    padding-bottom: 1.25rem;
`;

export const Img = styled.img`
    width: 12.5rem;
`;

export const Flag = styled.img`
    width: 3.875rem;
    height: 2.813rem;
`;

export const CardIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 3.438rem;
`;

export const SelectForm = styled.select`
    width: 18.75rem;
    height: 3.125rem;
    background-color: #FFFFFF;
    border-radius: 0.438rem;
    border: none;
    color: #868686;

    padding: 0 1.125rem;
    font: 400 1.125rem Roboto;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='29' viewBox='0 0 24 24' width='29' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 97%;
    background-position-y: 50%;

    cursor: pointer;

    &:focus {
        border: 0 none;
        outline: 0;
    }

    &::placeholder {
        color: #868686;
    }

    @media(max-width: 768px) {
        background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='14' viewBox='0 0 24 24' width='14' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    }

    @media(min-width: 2559px) {
        background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='45' viewBox='0 0 24 24' width='45' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    }
`;

export const InputLocal = styled.input`
    width: 28.438rem;
    height: 3.125rem;
    background-color: #FFFFFF;
    border-radius: 0.438rem;
    border: none;
    color: #868686;

    padding: 0 1.125rem;
    font: 400 1.125rem Roboto;

    &:focus {
        border: 0 none;
        outline: 0;
    }

    &::placeholder {
        font: 400 1.125rem Roboto;
        color: #868686;
    }
`;