import { formatPrice } from "@/utils/format-price"
import styled from "styled-components"

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; //para q um elemento fique abaixo do outro
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(10px);
    width: 256px;

    img {
        width: 16rem;
        height: 18.75rem;
        flex-shrink: 0;
    }

    h3 {
        color: var(--text-dark-medium);
        font-family: inherit;
        font-size: 1rem;
        font-weight: 300;
        line-height: 150%;
    }

    p {
        color: var(--text-dark);
        font-family: inherit;
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 150%;
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0;

        > div {
            width: 228px;
            height: 1px;
            background: var(--shapes);
            padding: 0;
            margin: 8px 0;
        }
    }
`

export function ProductCard(props : ProductCardProps){
    const price = formatPrice(props.price)

    return(
        <Card>
            <img src={props.image}/>
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )
}