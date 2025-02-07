import { SectionTitleContainer } from "./styles"

interface SectionTitleProps {
    title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <SectionTitleContainer>
            <h1>{title}</h1>
        </SectionTitleContainer>
    )
} 