import  {useState} from "react";
import SectorSelector from "../utils/sectorSelector/selector.tsx";


interface Props {
    sectors: Array<string>
    onSectorChange: (val:string)=> void
    selectedSector: string
}
export const SectorsPicker = (props:Props) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <SectorSelector
            sectors={props.sectors}
            id={'products'}
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onChange={props.onSectorChange}
            selectedValue={props.selectedSector}
        />
    );
}