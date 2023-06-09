import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header"
import Product from "../components/Product";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* HEADER */}
      <Header />
      
      <main className="max-w-screen-2xl mx-auto"> {/* maximizes screen width to 2xl and mx-auto centers all items */}
        {/* BANNER */}
        <Banner />

        {/* PRODUCT FEED */}
        <ProductFeed products={products}/>
        
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://api.escuelajs.co/api/v1/products").then(
    (res) => res.json()
  );
  console.log(products)
return {
  props: {
    products,
  }
};
}
