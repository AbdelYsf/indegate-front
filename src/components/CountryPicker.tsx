import  {useState} from "react";
import CountrySelector from "../utils/countrySelector/selector.tsx";
import {COUNTRIES} from "../utils/countrySelector/countries.ts";
import {SelectMenuOption} from "../utils/countrySelector/types.ts";


interface Props {
    defaultCountryCode: string
}
export const CountryPicker = (props:Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [country, setCountry] = useState(props.defaultCountryCode);
    const onChange = (val:string) =>{
        setCountry(val)
        console.log((COUNTRIES.find(option => option.value === val) as SelectMenuOption).title)
    }

    return (
        <CountrySelector

            id={'countries'}
            open={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            onChange={onChange}
            selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption}
        />
    );
}