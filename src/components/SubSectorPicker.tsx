import  {useState} from "react";
import SubSectorSelector from "../utils/subSectorSelector/selector.tsx";


interface Props {
    SubSectors: Array<string>
    onSubSectorChange: (val:string)=> void
    selectedSubSector: string
}
export const SubSectorsPicker = (props:Props) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <SubSectorSelector
            sectors={props.SubSectors}
            id={'products'}
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onChange={props.onSubSectorChange}
            selectedValue={props.selectedSubSector}
        />
    );
}