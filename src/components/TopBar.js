import React, { Fragment } from 'react'
import { InputBase } from '@mui/material'
import { styled } from '@mui/material/styles';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: '100%',
    },
  }));

function Topbar(props) {

    const {
        handleOnChange
    } = props

    return (
        <Fragment>
            <StyledInputBase
                placeholder='Enter the movie name....'
                onKeyPress={handleOnChange}
                inputProps={{ "aria-label": 'search' }}
            />
        </Fragment>
    )
}

export default Topbar;