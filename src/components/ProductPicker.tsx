import  {useState} from "react";
import ProductSelector from "../utils/productSelector/selector.tsx";
import {HsCodes} from "../utils/types";


interface Props {
    products: Array<HsCodes>
    onProductChange: (val:string)=> void
    selectedProduct: string
}
export const ProductsPicker = (props:Props) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <ProductSelector
            products={props.products}
            id={'products'}
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onChange={props.onProductChange}
            selectedValue={props.selectedProduct}
        />
    );
}