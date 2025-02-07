"use client"
import BudgetButton from "../BudgetButton";
import CuberSlider from "../CuberSlider";
import SectionTitle from "../SectionTitle";
import { ServicesLeft, ServicesList, ServicesRight, ServicesSection } from "./styles";
import { GiHook } from "react-icons/gi";

export default function Services() {
    return (
        <ServicesSection id="servicos">
            <ServicesLeft>
                <SectionTitle title="Nossos Serviços"/>
                <CuberSlider />
            </ServicesLeft>
            <ServicesRight>
                <h2>Soluções eficientes para o transporte de cargas pesadas</h2>
                <ServicesList>
                    <span><GiHook /> Transporte com Munck de até 6 toneladas</span>
                    <span><GiHook /> Içamentos e movimentação de máquinas industriais</span>
                    <span><GiHook /> Remoção e transporte de containers e estruturas metálicas</span>
                    <span><GiHook /> Atendimento a empresas da construção civil, indústria e logística</span>
                </ServicesList>
                <BudgetButton />
            </ServicesRight>
        </ServicesSection>
    )
}