"use client"
import { FooterContainer, FooterLinks, SmallContainer } from "./styles";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo-horizontal.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


export default function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterLinks>
                    <Link href="https://wa.me/5551999713941">
                        <FaWhatsapp />
                        <span>(51) 99971-3941</span>
                    </Link>
                    <span>
                        <FaLocationDot />
                        Camaquã-RS
                    </span>
                </FooterLinks>
                <Link href="/">
                    <Image src={logo} alt="Julinho Munck" width={258} height={80} />
                </Link>
            </FooterContainer>
            <SmallContainer>
                <span>Todos os direitos reservados.</span>
                <span>
                    Desenvolvido por 
                    <Link href="https://belledigital.com.br/"> Belle Digital</Link>
                </span>
            </SmallContainer>
        </>
    )
}