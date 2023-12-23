import {CustomSpinner} from "./Loader.tsx";

interface Props {
    data:any
    isLoading:boolean

}
export function TradingTable(props:Props) {

    if (props.isLoading) {
        return   <CustomSpinner/>
    }

    return (
        <div className="h-screen overflow-y-scroll">
            <div dangerouslySetInnerHTML={{ __html: props.data.data }} />
        </div>

    );
}