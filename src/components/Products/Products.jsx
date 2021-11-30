import React from 'react';
import { Grid } from '@material-ui/core'

import Product from './Product/Product';
import useStyles from './styles'

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://www.famousfootwear.com/blob/product-images/20000/30/62/5/30625_pair_large.jpg'},
    { id: 2, name: 'MacBook', description: 'Apple MacBook', price: '$5', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1632788573000'},
];

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}> 
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                { products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;
