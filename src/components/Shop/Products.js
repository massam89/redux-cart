import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Product1',
    price: 5,
    description: 'This is a first product - amazing!'
  },
  {
    id: 'p2',
    title: 'Product2',
    price: 3,
    description: 'This is a second product - amazing!'
  },
  {
    id: 'p3',
    title: 'Product3',
    price: 8,
    description: 'This is a third product - amazing!'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item =>
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          /> )}
      </ul>
    </section>
  );
};

export default Products;
