import {create} from 'zustand'
import {SelectMenuOption} from "../utils/countrySelector/types.ts";



type DestinationCountryStoreType = {
    destinationCountry:SelectMenuOption
    setDestinationCountry: (val:SelectMenuOption)=> void

}

export const useDestinationCountry = create<DestinationCountryStoreType>(
    (set)=>({
        destinationCountry:{value: 'MA', title: 'Morocco'},
        setDestinationCountry:(val:SelectMenuOption)=> set({destinationCountry:val})

}));