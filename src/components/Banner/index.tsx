"use client"
import BudgetButton from "../BudgetButton";
import { BannerContainer, BannerTextArea, TruckImage } from "./styles";
import { FaWeight } from "react-icons/fa";

export default function Banner() {
    return (
        <BannerContainer>
            <BannerTextArea>
                <h1>Transporte seguro e eficiente com munck</h1>
                <h2><FaWeight />  Até 6 toneladas</h2>
                <span>Movimentação de cargas pesadas com precisão e segurança para sua empresa ou obra.</span>
                <BudgetButton />
            </BannerTextArea>
            <TruckImage
                src="/banner-caminhao.png"
                alt="Caminhão Munck"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "tween", duration: 1 }}
            />
        </BannerContainer>
    )
}