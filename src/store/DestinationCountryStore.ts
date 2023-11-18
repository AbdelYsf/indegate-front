import {create} from 'zustand'
import {SelectMenuOption} from "../utils/countrySelector/types.ts";


//     product:string
// seProduct: (val:string)=> void
type DestinationCountryStoreType = {
    destinationCountry:SelectMenuOption
    setDestinationCountry: (val:SelectMenuOption)=> void

}

export const useDestinationCountry = create<DestinationCountryStoreType>(
    (set)=>({
        destinationCountry:{value: 'AU', title: 'Australia'},
        setDestinationCountry:(val:SelectMenuOption)=> set({destinationCountry:val})

}));