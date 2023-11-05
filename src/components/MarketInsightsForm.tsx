import {
    Card,
    Button,
    Typography,
} from "@material-tailwind/react";
import {CountryPicker} from "./CountryPicker.tsx";
import {ProductsPicker} from "./ProductPicker.tsx";

export const MarketInsightsForm = () => {
    return (
        <div className="flex justify-center items-center h-full pt-5">
            <Card color="transparent" shadow={false}>
                <Typography variant="h2" color="blue-gray" className="flex justify-center bg-gradient-to-r from-green-300 to-purple-400 text-transparent bg-clip-text">
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
                        <CountryPicker defaultCountryCode="FR"/>

                        <Typography variant="h6" color="blue-gray" className="-mb-3 mx-auto">
                            DESTINATION COUNTRY
                        </Typography>
                        <CountryPicker defaultCountryCode="MA"/>

                        <Typography variant="h6" color="blue-gray" className="-mb-3 mx-auto">
                            PRODUCT
                        </Typography>
                        <ProductsPicker  defaultProduct="0012345"/>
                    </div>

                    <Button className="mt-6 bg-gradient-to-r from-green-300 to-purple-400 text-white hover:text-white w-full text-xl">
                        Start
                    </Button>

                </form>

            </Card>
        </div>
    );
}