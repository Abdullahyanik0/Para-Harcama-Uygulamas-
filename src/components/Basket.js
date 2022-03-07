import BasketItem from "./Basketitem"
import { moneyFormat } from "../Helpers"

function Basket({ basket, product, total }) {
    return (
        <>
            {basket.map(item => (
                <BasketItem item={item} product={product.find(p => p.id === item.id)} />
            ))}

            <div className="total-btn">
                Toplam Tutar: ${moneyFormat(total)}
            </div>

        </>
    )
}

export default Basket