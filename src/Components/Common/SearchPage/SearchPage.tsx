import React, { ChangeEvent } from 'react';
import { GiDoubleDragon } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

interface SearchPageProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onClick: (e: React.MouseEvent<SVGAElement>) => void;
    idName: string;
    ContainerStyle: string;
    Heading: string;
    HeadingStyle: string;
    formStyle: string;
    Placeholder: string;
    inputStyle: string;
    Search: string;
    IconStyle: string;
    SearchError: string;
    Text: string;
}


const SearchPage: React.FC<SearchPageProps> = ({ idName, ContainerStyle, Heading, HeadingStyle, onSubmit, formStyle, Placeholder, inputStyle, Search, onChange, onClick, IconStyle,  SearchError, Text }) => {
return (
    <div id={idName} className={ContainerStyle} >
        <h1 className={HeadingStyle}>{Heading}</h1>
        <form onSubmit={onSubmit} className={formStyle}>
            <GiDoubleDragon size="1.8rem" color="black" />
            <input type="text" placeholder={Placeholder} className={inputStyle} value={Search} onChange={onChange} />
            <IoSearchSharp size="1.8rem" color="black" className={IconStyle} onClick={onClick} />
        </form> 
        <span className="Error">{SearchError}</span>
        <p>{Text}</p>
    </div>
)
}

export default SearchPage