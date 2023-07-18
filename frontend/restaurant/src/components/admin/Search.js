import {useState} from 'react';
import { IoSearchOutline } from 'react-icons/io5'



function Search(){

    const [foods, setFoods] = useState('');
    const [search, setSearch] = useState('');

    const clear = ()=>{
        setSearch('');
    }

    
    const searchBook = e=>{
        let value = e.target.value;
        setSearch(value);
        
        let filteredBooks = [];

        for(let i = 0; i<foods.length;i++){
            value = value.toLowerCase();
            const titleSearch = foods[i].title.toLowerCase();

            if(titleSearch.includes(value)){
                filteredBooks.push(foods[i])
            }
            setFoods(filteredBooks)
        }
        

    }
    
    
    return(
        <div className = "searchBar">
            <div className = 'searchdiv'>
                <input onChange = {searchBook} className='searchBox' value = {search} type ="text" placeholder = "Search..."></input>
                <div className="cross" draggable ='true' onClick = {() =>clear()} ><IoSearchOutline /> </div>
            </div>
        </div>
    )
}
export default Search;