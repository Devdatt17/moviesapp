import React from 'react'
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardHeader,
    Typography,
    IconButton,
    Collapse
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {
    IMAGE_API,
    defaultImage
} from '../constants'

//? This is the image api url which will be appended with poster_path to render the image

//* Here w780 represents the poster size,
//* available sizes are 92 ,154 ,185 ,500 ,780 and 'original'

//? Here the values are directly passed as props instead of props
//? Honestly i have no idea why this is used

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const Movies = ({ title, poster_path, overview, vote_average }) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Grid container flexDirection={'column'} m={2}>
            <Card sx={{ width: 430 }}>
                <CardMedia
                    sx={{ height: 450 }}
                    image={poster_path ? (IMAGE_API + poster_path) : defaultImage}
                    title={title}
                />
                <CardHeader
                    action={
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <KeyboardDoubleArrowDownIcon fontSize='large' color='primary'/>
                        </ExpandMore>
                    }
                    title={
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                    }
                    subheader={
                        (vote_average < 8) ? (
                            (vote_average > 6) ?
                                <Grid container direction="row" alignItems="flex-end" pb={0}>
                                    <Grid item>
                                        <Typography variant="h6" sx={{ 'color': 'blue' }}>
                                            Ratings: {vote_average.toFixed(1)}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <StarIcon sx={{ 'color': 'blue' }} fontSize='small' />
                                    </Grid>
                                </Grid>
                                :
                                <Grid container direction="row" alignItems="flex-end" pb={0}>
                                    <Grid item>
                                        <Typography variant="h6" sx={{ 'color': 'red' }}>
                                            Ratings: {vote_average.toFixed(1)}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <StarIcon sx={{ 'color': 'red' }} fontSize='small' />
                                    </Grid>
                                </Grid>
                        ) :
                            (
                                <Grid container direction="row" alignItems="flex-end" pb={0}>
                                    <Grid item>
                                        <Typography variant="h6" sx={{ 'color': 'green' }}>
                                            Ratings: {vote_average.toFixed(1)}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <StarIcon sx={{ 'color': 'green' }} fontSize='small' />
                                    </Grid>
                                </Grid>
                            )
                    }
                />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent sx={{ paddingTop: 0 }}>
                        <Typography variant="body1">
                            {overview}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}

export default Movies;
