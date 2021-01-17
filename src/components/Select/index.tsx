import './styles.css';

import { Label, SelectForm } from "../../styles";
import { SelectHTMLAttributes, useState } from 'react';
import restcountries from '../../services/restcountries';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    value: string;
    countries: Array<{
        translations: Translations;
        name: string;
    }>;
    setCountry: any;
    setFlag: any;
    setCountryName: any;
}

export interface Translations {
    br: string;
}

const Select: React.FC<SelectProps> = ({ label, name, setCountry, setFlag, setCountryName, countries, ...rest }) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    
    async function loadSelectedCountry() {
        const response = await restcountries.get(`name/${selectedCountry}`, {});
    
        setFlag(response.data[0].flag)
        setCountry(response.data[0].translations.br)
    }

    return (
        <div className="select">
            <Label htmlFor={name}>{label}</Label>
            <SelectForm id={name} onChange={(e) => { 
                    setCountryName(e.target.value)
                    setSelectedCountry(e.target.value)
                }} onMouseLeave={loadSelectedCountry} {...rest} >
                <option value="none" selected hidden>Selecione...</option>
                {countries.map(info => {
                    return <option key={info.name} value={info.name}>{info.translations.br}</option>
                })}
            </SelectForm>
        </div>
    );
}

export default Select;