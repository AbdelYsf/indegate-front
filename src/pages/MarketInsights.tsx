import {ProductTabs} from "../components/ProductTabs.tsx";
import {AppNavbar} from "../components/NavBar.tsx";
import {useProduct} from "../store/ProductStore.ts";
import {useExportingCountry} from "../store/ExportingCountryStore.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useCountryImages} from "../hooks/useCountryImages.ts";
import {useCountryInsights} from "../hooks/useCountryInsights.ts";

export const MarketInsights = () => {
    const navigate = useNavigate();

    //const product = useProduct(s=>s.product)
    const exportingCountry = useExportingCountry(s => s.exportingCountry)
    //const destinationCountry = useDestinationCountry(s => s.destinationCountry)
    const isSet = useProduct(s => s.isSet)
    //console.log(exportingCountry.title)
    const {data} = useCountryImages({
        country_name:exportingCountry.title
    })
    const {insights} = useCountryInsights({
        country_name:exportingCountry.title
    })
    // console.log(data.data)
    // console.log(insights.data)
    //
    // console.log(product)
    // console.log(exportingCountry)
    // console.log(destinationCountry)

    useEffect(()=>{
        if(!isSet){
            navigate('/')
        }
    })


    return(
        <>
            <AppNavbar/>
            <ProductTabs images={data.data} insights={insights.data}/>

        </>
    )

}