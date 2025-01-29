"use client"
import { HeaderContainer, MenuContainer } from "./styles";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo-horizontal.png"
import BudgetButton from "../BudgetButton";
import React, { useState, useEffect } from "react";

export default function Header() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <HeaderContainer>
            <Link href="/">
                <Image src={logo} alt="Julinho Munck" width={258} height={80} />
            </Link>
            {
                !isSmallScreen ?
                    <MenuContainer>
                        <Link href="/#servicos">Serviços</Link>
                        <Link href="/#sobre-nos">Sobre Nós</Link>
                        <Link href="/#contato">Contato</Link>
                    </MenuContainer>
                    : null
            }
            {!isSmallScreen ? <BudgetButton /> : null }
        </HeaderContainer>
    )
}