import React from 'react'

function SortMovies(props) {

  const handleAscSort = () => {
    function compare(a, b) {
      const bandA = a.title;
      const bandB = b.title;

      let comparision = 0;
      if (bandA > bandB) {
        comparision = 1;
      } else if (bandA < bandB) {
        comparision = -1;
      }
      return comparision;
    }
    console.log(props.sortMovie.sort(compare))
    props.sortAscending(props.sortMovie.sort(compare));
  }

  const handleDscSort = () => {
    function compare(a, b) {
      const bandA = a.title;
      const bandB = b.title;

      let comparision = 0;
      if (bandA > bandB) {
        comparision = 1;
      } else if (bandA < bandB) {
        comparision = -1;
      }
      return comparision * -1;
    }
    console.log(props.sortMovie.sort(compare))
    props.sortDescending(props.sortMovie.sort(compare));
  }
  return (
    <div>
      <ul>
        <li className="dropdown">
          <p className="dropbtn">Sorting</p>
          <div className="dropdown-content">
            <button value="ascending" className="sortbutton" onClick={handleAscSort}>Ascending Order</button>
            <button value="decending" className="sortbutton" onClick={handleDscSort}>Descending Order</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SortMovies
