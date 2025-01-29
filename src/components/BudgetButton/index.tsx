import { BudgetButtonContainer } from "./styles";
import Link from "next/link";

export default function BudgetButton() {
    return (
        <BudgetButtonContainer>
            <Link href="https://wa.me/5551999713941">Solicite um orçamento</Link>
        </BudgetButtonContainer>
    )
}