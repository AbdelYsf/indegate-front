import  {useState} from "react";
import ProductSelector from "../utils/productSelector/selector.tsx";


interface Props {
    defaultProduct: string
}
export const ProductsPicker = (props:Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState(props.defaultProduct);
    const onChange = (val:string) =>{
        setProduct(val)
        console.log(val)
    };

    return (
        <ProductSelector

            id={'products'}
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onChange={onChange}
            selectedValue={product}
        />
    );
}