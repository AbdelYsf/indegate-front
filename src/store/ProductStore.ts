import {create} from 'zustand'



type ProductStoreType = {
    product:string
    isSet:boolean
    setProduct: (val:string)=> void
    setIsSet : ()=> void

}

export const useProduct = create<ProductStoreType>(
    (set)=>({
        product:'010130',
        setProduct:(val:string)=> set({product:val}),
        isSet:false,
        setIsSet:() => set({isSet:true})

}));