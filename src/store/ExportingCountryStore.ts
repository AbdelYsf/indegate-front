import {create} from 'zustand'
import {SelectMenuOption} from "../utils/countrySelector/types.ts";


type ExportingCountryStoreType = {
    exportingCountry:SelectMenuOption
    setExportingCountry: (val:SelectMenuOption)=> void

}

export const useExportingCountry = create<ExportingCountryStoreType>(
    (set)=>({
        exportingCountry:{value:'CN', title: 'China'},
        setExportingCountry:(val:SelectMenuOption)=> set({exportingCountry:val})

}));