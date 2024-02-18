import {
    Card,
    Button,
    Typography,
} from "@material-tailwind/react";
import {CountryPicker} from "./CountryPicker.tsx";
import {ProductsPicker} from "./ProductPicker.tsx";
import {useHsCodes} from "../hooks/useHsCodes.ts";
import {useNavigate} from "react-router-dom";
import {useProduct} from "../store/ProductStore.ts";
import {useExportingCountry} from "../store/ExportingCountryStore.ts";
import {useDestinationCountry} from "../store/DestinationCountryStore.ts";
import {useState} from "react";
import {FullScreenLoader} from "./FullScreenLoader.tsx";
import {SectorsPicker} from "./SectorPicker.tsx";
import {Sectors} from "../utils/sectorSelector/sectors.ts";
import {SubSectorsPicker} from "./SubSectorPicker.tsx";
import {subSectors} from "../utils/subSectorSelector/subSectors.ts";


export const MarketInsightsForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const {data, isLoading:isHsCodesLoading} = useHsCodes()


    const navigate = useNavigate();
    const goToInsights = () => {
        setIsLoading(true)
        setIsSet()
        setTimeout(()=>{
            setIsLoading(false)
            navigate("/insights");
        },10000)

    }


    const {product, setProduct, setIsSet, } = useProduct()
    const {exportingCountry, setExportingCountry} = useExportingCountry()
    const {destinationCountry, setDestinationCountry} = useDestinationCountry()

    const [sector, setSector] = useState("AGROALIMENTAIRE")
    const [subSector, setSubSector] = useState("Nourriture")

    const onSectorChanged = (sector:string)=>{
        setSector(sector)
        setSubSector(subSectors[sector][0])
    }


    return (
        <div className="flex justify-center items-center h-full pt-5">
            <Card color="transparent" shadow={false}>
                <Typography variant="h2" color="blue-gray"
                            className="flex justify-center bg-gradient-to-r from-green-300 to-purple-400 text-transparent bg-clip-text">
                    Market Insights
                </Typography>

                <Typography color="gray" className="mt-1 font-normal flex justify-center">
                    Elevate Your Export Game with Tailored Market Insights 🚀.
                </Typography>

                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">

                        <Typography variant="h6" color="blue-gray" className="-mb-3 mx-auto">
                            EXPORTING COUNTRY
                        </Typography>
                        <CountryPicker selectedCountry={exportingCountry} onChange={setExportingCountry}/>

                        <Typography variant="h6" color="blue-gray" className="-mb-3 mx-auto">
                            PRODUCT
                        </Typography>
                        <ProductsPicker products={data.data} onProductChange={setProduct} selectedProduct={product} isLoading={isHsCodesLoading}/>

                        <Typography variant="h6" color="blue-gray" className="-mb-3 mx-auto">
                            DESTINATION COUNTRY
                        </Typography>
                        <CountryPicker selectedCountry={destinationCountry} onChange={setDestinationCountry}/>

                        <Typography variant="h6" color="blue-gray" className="-mb-3 mx-auto">
                            SECTOR
                        </Typography>
                        <SectorsPicker selectedSector={sector} onSectorChange={onSectorChanged} sectors={Sectors}/>
                        <SubSectorsPicker selectedSubSector={subSector} onSubSectorChange={setSubSector} SubSectors={subSectors[sector]}/>
                    </div>

                    <Button
                        className="mt-6 bg-gradient-to-r from-green-300 to-purple-400 text-white hover:text-white w-full text-xl"
                        onClick={goToInsights}>
                        Start
                    </Button>

                </form>
                {isLoading? <FullScreenLoader/> : null}

            </Card>
        </div>
    );
}
