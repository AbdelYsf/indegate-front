import  {useState} from "react";
import CountrySelector from "../utils/countrySelector/selector.tsx";
import {COUNTRIES} from "../utils/countrySelector/countries.ts";
import {SelectMenuOption} from "../utils/countrySelector/types.ts";


interface Props {
    onChange: (val:SelectMenuOption)=>void
    selectedCountry:SelectMenuOption
}
export const CountryPicker = (props:Props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <CountrySelector

            id={'countries'}
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onChange={props.onChange}
            selectedValue={COUNTRIES.find(option => option.value === props.selectedCountry.value) as SelectMenuOption}
        />
    );
}