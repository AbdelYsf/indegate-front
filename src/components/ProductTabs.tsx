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


interface Props {
    tradingTable:string
    insights:object
    isTradingTableLoading:boolean

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
                <TabPanel value="Trading table">
                    <TradingTable data={props.tradingTable} isLoading={props.isTradingTableLoading}></TradingTable>
                </TabPanel>
                <TabPanel value="Statistics">
                    Statistics
                </TabPanel>
            </TabsBody>


        </Tabs>
    );
}