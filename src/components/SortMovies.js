import React from 'react'
import {
  Grid,
  styled
} from '@mui/material'
import Button from '@mui/material/Button'
import { indigo, blue, common } from '@mui/material/colors'

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
    
    props.sortDescending(props.sortMovie.sort(compare));
  }

  // Ascending and Descending needs to be dropdown instead of buttons
  /*
    For reference

    <ul>
        <li className="dropdown">
          <p className="dropbtn">Sorting</p>
          <div className="dropdown-content">
            <button value="ascending" className="sortbutton" onClick={handleAscSort}>Ascending Order</button>
            <button value="decending" className="sortbutton" onClick={handleDscSort}>Descending Order</button>
          </div>
        </li>
      </ul>

  */

  const AscStyledButton = styled(Button)(()=>({
      color: common.white,
      background: indigo[500],
      '&:hover': {
        backgroundColor: indigo[800],
      },
    }))

  const DescStyledButton = styled(Button)(()=>({
      color: common.white,
      backgroundColor: blue[500],
      '&:hover': {
        backgroundColor: blue[800],
      },
  }))

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item>
        <AscStyledButton variant="outlined" onClick={handleAscSort} className="asc-button-color">Asc</AscStyledButton>
      </Grid>
      <Grid item>
        <DescStyledButton variant="outlined" onClick={handleDscSort} className="desc-button-color">Desc</DescStyledButton>
      </Grid>
    </Grid>
  )
}

export default SortMovies
