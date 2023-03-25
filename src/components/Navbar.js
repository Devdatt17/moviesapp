import React from 'react'
import SortMovies from './SortMovies';
import TopBar from './TopBar'
import {
    Grid,
    AppBar,
    Typography,
    Box
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
 

function Navbar(props) {

    return (
        <Box sx={{ flexGrow: 1 }} flexDirection={'row'}>
            <AppBar position='static' color="success">
                <Grid container spacing={2} p={1}>
                    <Grid item xs={6}>
                        <Typography
                            variant='h4'
                            noWrap
                            onClick={props.clickOnHomeButton}
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Movies Masti
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <TopBar {...props} />
                        </Search>
                    </Grid>
                    <Grid item xs={2}>
                        <SortMovies
                            {...props}
                        />
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    )
}

export default Navbar