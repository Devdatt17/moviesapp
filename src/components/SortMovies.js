import React from 'react'

function SortMovies(props) {

    const handleAscSort=()=>{
        function compare(a,b){
          const bandA = a.title;
          const bandB = b.title;
    
          let comparision = 0;
          if(bandA > bandB){
              comparision = 1;
          } else if(bandA < bandB){
              comparision = -1;
          }
          return comparision;
        }
        console.log(props.sortMovies.sort(compare))
        props.setAscOrder(props.sortMovies.sort(compare));
      }
      
      const handleDscSort=()=>{
        function compare(a,b){
        const bandA = a.title;
        const bandB = b.title;
  
        let comparision = 0;
        if(bandA > bandB){
            comparision = 1;
        } else if(bandA < bandB){
            comparision = -1;
        }
        return comparision * -1;
      }
        console.log(props.sortMovies.sort(compare))
        props.setDscOrder(props.sortMovies.sort(compare));
      }
    return (
        <div>
          <button value="ascending" onClick={handleAscSort}>Ascending Order</button>
          <button value="decending" onClick={handleDscSort}>Descending Order</button>
        </div>
    )
}

export default SortMovies
