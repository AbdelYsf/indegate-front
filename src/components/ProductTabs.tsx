import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    BuildingLibraryIcon,
    PresentationChartBarIcon,
    PhotoIcon
} from "@heroicons/react/24/solid";
import {CiaCards} from "./CiaCards.tsx";
import {CiaCarousel} from "./CiaCarousel.tsx";


interface Props {
    images:Array<string>
    insights:object

}
export function ProductTabs(props:Props) {

    return (
        <Tabs value="Country Insights">
            <TabsHeader>
                <Tab value="Country Insights">
                    <div className="flex items-center gap-2">
                        {React.createElement(BuildingLibraryIcon, {className: "w-5 h-5"})}
                        Country Insights
                    </div>
                </Tab>

                <Tab value="country images">
                    <div className="flex items-center gap-2">
                        {React.createElement(PhotoIcon, {className: "w-5 h-5"})}
                        Gallery

                    </div>
                </Tab>
                <Tab value="Statistics">
                    <div className="flex items-center gap-2">
                        {React.createElement(PresentationChartBarIcon, {className: "w-5 h-5"})}
                        Statistics
                    </div>
                </Tab>
            </TabsHeader>
            <TabsBody>
                <TabPanel value="Country Insights">
                    <CiaCards insights={props.insights}/>
                </TabPanel>
                <TabPanel value="country images">
                    <CiaCarousel images={props.images}></CiaCarousel>
                </TabPanel>
                <TabPanel value="Statistics">
                    Statistics
                </TabPanel>
            </TabsBody>


        </Tabs>
    );
}