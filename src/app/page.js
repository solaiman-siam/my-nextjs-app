import Product from '@/components/product/Product';
import React from 'react';

const HomePage = async() => {

  const res = await fetch('http://localhost:5000/products' , { next: {revalidate: 5}});
  const products = await res.json();
  // console.log('products > ' ,products);

  return (
    <div>
      <h1>Hello World</h1>

      <div className='grid grid-cols-3 h-full w-[80%] mx-auto gap-8 '>
        {products.map(product => (
          <Product product={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
};

export default HomePage;