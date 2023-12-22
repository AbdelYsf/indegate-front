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
} from "@heroicons/react/24/solid";
import {CiaCards} from "./CiaCards.tsx";
import {TradingTable} from "./TradingTable.tsx";
import {ImportRequirements} from "./ImportRequirements.tsx";


interface Props {
    tradingTable:string
    importRequirements:string
    insights:object
    isTradingTableLoading:boolean
    isImportRequirementsLoading:boolean


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

                <Tab value="Trading table">
                    <div className="flex items-center gap-2">
                        {React.createElement(PresentationChartBarIcon, {className: "w-5 h-5"})}
                        Trading table

                    </div>
                </Tab>
                <Tab value="Import requirements">
                    <div className="flex items-center gap-2">
                        {React.createElement(PresentationChartBarIcon, {className: "w-5 h-5"})}
                        Import requirements
                    </div>
                </Tab>
            </TabsHeader>
            <TabsBody>
                <TabPanel value="Country Insights">
                    <CiaCards insights={props.insights}/>
                </TabPanel>
                <TabPanel value="Trading table">
                    <TradingTable data={props.tradingTable} isLoading={props.isTradingTableLoading}/>
                </TabPanel>
                <TabPanel value="Import requirements">
                    <ImportRequirements data={props.importRequirements} isLoading={props.isImportRequirementsLoading}/>
                </TabPanel>
            </TabsBody>


        </Tabs>
    );
}