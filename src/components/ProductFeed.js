import React from 'react';
import Product from './Product';

function ProductFeed({ products }) {
  if (!products || !products.length) {
    return <div>No products found.</div>;
  }

  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:gird-col-4 md:-mt-52 mx-auto'>
        {products
        .slice(0,4)
        .map(({id, title, price, description, category}) => (
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            images={category.image}
            category={category.name}
            />
           ))}
        
        <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" />

        <div className='md:col-span-2'>
        {products
        .slice(4,5)
        .map(({id, title, price, description, category}) => (
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            images={category.image}
            category={category.name}
            />
            ))}
        </div>

        {products
        .slice(5, 11)
        .map(({id, title, price, description, category}) => (
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            images={category.image}
            category={category.name}
            />
            ))}
    </div>
  )
}

export default ProductFeed;
