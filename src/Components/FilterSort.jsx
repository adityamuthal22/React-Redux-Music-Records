import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"

const FilterSort = () => {
  const [searchParams,setSearchParams]= useSearchParams();
  const initialGenreParams = searchParams.getAll("genre")
  const initialSortParams =searchParams.get("sortBy")
  const [category, setCategory] = useState(initialGenreParams || []);
  const [sortBy ,setSortBy] = useState(initialSortParams || "");
 
  const handleGenreChange = (e) => { 
    const option =e.target.value;
    //if the option is already present in the category,remove it
    //else add it in the category array
    let newCategory = [...category];
    if(category.includes(option)){
      //remove it
      newCategory.splice(newCategory.indexOf(option),1)
    }else{
      //add it
      newCategory.push(option);
    }
    setCategory(newCategory)
  };

  const handleSortBy=(e)=>{
    setSortBy(e.target.value);
  }

useEffect(()=>{
  // if the category changes then reflect it on the URL search as well
  if(category || sortBy){
    const params ={};
    category && (params.genre=category)
    sortBy && (params.sortBy=sortBy)
    setSearchParams(params)
  }
},[category,setSearchParams,sortBy])

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <input onChange={handleGenreChange}
        defaultChecked={category.includes('K-Pop')}
          value="K-Pop" type={"checkbox"} />
        <label>K-Pop</label>
      </div>
      <div>
        <input onChange={handleGenreChange}
        defaultChecked={category.includes('Pop')}
          value="Pop" type={"checkbox"} />
        <label>Pop</label>
      </div>
      <div>
        <input onChange={handleGenreChange}
        defaultChecked={category.includes('Country')}
          value="Country" type={"checkbox"} />
        <label>Country</label>
      </div>
      <div>
        <input
          onChange={handleGenreChange}
          defaultChecked={category.includes('Heavy Metal')}
          value="Heavy Metal"
          type={"checkbox"}
        />
        <label>Heavy Metal</label>
      </div>
      <div>
        <input onChange={handleGenreChange}
       defaultChecked={category.includes('Holiday')}
          value="Holiday" type={"checkbox"} />
        <label>Holiday</label>
      </div>

      <h3>Sort</h3>
      <div>
        <div>
          <input type={'radio'} value="asc"
          name="sortBy"
          onChange={handleSortBy}
          defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input type={'radio'} value="desc"
          name="sortBy"
          onChange={handleSortBy}
          defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
