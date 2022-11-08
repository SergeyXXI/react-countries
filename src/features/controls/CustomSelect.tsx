import Select from "react-select";
import { StylesConfig } from "react-select";
import { useRegion } from "./useRegion";
import { Region } from "types";

export type Option = 
{
    value: Region,
    label: Region
};

const options: Option[] = 
[
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" }    
];

const styles: StylesConfig<Option, false> = 
{
    container: provided => (
    {
        ...provided,
        width: "190px",
        height: "49.33px",        
        borderRadius: ".5rem",
        boxShadow: "var(--shadow)"     
            
    }),
    control: (provided, {isFocused}) => (
    {
        ...provided,
        height: "100%",
        background: "var(--color-ui)",
        cursor: "pointer",
        padding: "0 .5rem",
        border: "none",
        boxShadow: isFocused ? "none" : "none"             
      
    }),
    clearIndicator: provided => (
    {
        ...provided, 
        width: "30px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        color: "var(--color-text)",
        padding: "4px",
        ":hover": { color: "inherit" }
    }),    
    dropdownIndicator: provided => (
    {
        ...provided, 
        width: "30px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        color: "var(--color-text)",
        padding: "4px",
        ":hover": { color: "inherit" }
    }),      
    indicatorSeparator: () => ({ display: "none" }),
    input: provided => (
    {
        ...provided,
        color: "var(--color-text)"
    }),
    menu: provided => (
    {
        ...provided,
        background: "var(--color-ui)"
    }),
    option: (provided, { isSelected }) => (
    {
        ...provided,
        backgroundColor: isSelected ? "var(--color-bg)" :
                                      "var(--color-ui)",
        color: "var(--color-text)",
        fontSize: ".8rem",
        fontWeight: 600,
        cursor: "pointer",
        ":hover": { backgroundColor: "var(--color-bg)" }
    }),
    placeholder: provided => (
    {
        ...provided,
        color: "var(--color-text)",
        fontSize: ".8rem",
        fontWeight: 600
    }),
    singleValue: provided => (
    {
        ...provided,
        color: "var(--color-text)",
        fontSize: ".8rem",
        fontWeight: 600
    })
};

export default function CustomSelect()
{    
    const [regionStr, handleSelect] = useRegion();
    const region = options.filter(item => item.value === regionStr);

    return (
        <Select options={options} styles={styles} value={region}
                placeholder="Filter by Region" isClearable isSearchable={false}
                onChange={handleSelect} />
    );
}