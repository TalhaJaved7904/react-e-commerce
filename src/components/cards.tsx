import axios from "axios"
import { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Box } from '@mui/material';
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
export default function Cards() {
    const [loader, setLoader] = useState(false)
    const [cards, setCards] = useState<any>([])

    const navigate = useNavigate()




    useEffect(() => {
        setLoader(true)
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res, "Success Response")
                setCards([...res.data])
                setLoader(false)
            }).catch((err) => {
                console.log(err, "Error")
                setLoader(false)
            })
    }, [])



    return <>
        <Navbar />
        <h1>
            ALL Products
        </h1>
        <Grid sx={{ paddingTop: 4, paddingX: 2 }} container spacing={2}>
            {cards.map((products: any, index: any) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, overflow: 'hidden', transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={products.image}
                            alt={products.title}
                        />
                        <CardContent>
                            <Typography variant="h6" component="div" gutterBottom>
                                {products.title}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'space-between', paddingX: 2, paddingBottom: 2, display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" color="primary">
                                ${products.price}
                            </Typography>
                            <Button onClick={() => {
                                navigate(`/products/${index}`, { state: products })
                            }} variant="contained" color="primary" size="medium">
                                Add To Basket
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>

    </>
}