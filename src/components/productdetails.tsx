import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import Navbar from './navbar';

const ProductDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate()

    const AddToCart = ()=>{
        
    }

    return (
        <Box sx={{ paddingTop: 4 }}>
            <Navbar/>
            <Grid container spacing={4} className='d-flex  align-items-center'>
                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: 3 }}>
                        <CardMedia
                            component="img"
                            image={state.image}
                            alt={state.title}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardContent>
                        <Typography variant="h4">{state.title}</Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 2 }}>{state.category}</Typography>
                        <Typography variant="body1">{state.description}</Typography>
                        <Typography variant="h5" color="primary" sx={{ marginTop: 2 }}>${state.price}</Typography>
                        <Button  variant="contained" color="primary" sx={{ marginTop: 2 }}>Add to Cart</Button>
                    </CardContent>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">Reviews</Typography>
                    {/* Display reviews here */}
                    <Typography variant="body2" color="text.secondary">No reviews yet. Be the first to review!</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductDetails;
