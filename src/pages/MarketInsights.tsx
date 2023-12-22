import {ProductTabs} from "../components/ProductTabs.tsx";
import {AppNavbar} from "../components/NavBar.tsx";
import {useProduct} from "../store/ProductStore.ts";
import {useExportingCountry} from "../store/ExportingCountryStore.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useCountryInsights} from "../hooks/useCountryInsights.ts";
import {useDestinationCountry} from "../store/DestinationCountryStore.ts";
import {useTradingTable} from "../hooks/useTradingTable.ts";
import {useImportRequirements} from "../hooks/useImportRequirements.ts";

export const MarketInsights = () => {
    const navigate = useNavigate();

    const product = useProduct(s=>s.product)
    const exportingCountry = useExportingCountry(s => s.exportingCountry)
    const destinationCountry = useDestinationCountry(s => s.destinationCountry)
    const isSet = useProduct(s => s.isSet)
    //console.log(exportingCountry.title)

    const {insights} = useCountryInsights({
        country_name:exportingCountry.title
    })
    // console.log(data.data)
    // console.log(insights.data)
    //
    console.log(product)
    console.log(exportingCountry)
    console.log(destinationCountry)

    const {data, isLoading} = useTradingTable({
        exporting_country:exportingCountry.title,
        destination_country: destinationCountry.title,
        product: product
    })

    const {importData , isImportLoading} = useImportRequirements({
        exporting_country:exportingCountry.title,
        destination_country: destinationCountry.title,
        product: product
    })


    console.log(data)
    useEffect(()=>{
        if(!isSet){
            navigate('/')
        }
    })


    return(
        <>
            <AppNavbar/>
            <ProductTabs tradingTable={data} isTradingTableLoading={isLoading} insights={insights.data}
                         importRequirements={importData} isImportRequirementsLoading={isImportLoading}/>

        </>
    )

}