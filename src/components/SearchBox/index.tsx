import React, { FunctionComponent } from 'react'
import {
    Input
} from './SearchBox.css'


interface ISearchBoxProps {
    onSearch:(searchTerm: string) => void;
}
const SearchBox: FunctionComponent<ISearchBoxProps> = ({ onSearch }) => <Input placeholder="Enter Github User" onChange={(event) => onSearch(event.target.value)}/>


export default SearchBox