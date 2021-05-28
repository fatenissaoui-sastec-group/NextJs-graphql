import Head from 'next/head'
import styles from '@s/Home.module.scss'
import client from "@/pages/api/apollo-client";
import React from "react";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { gql } from "@apollo/client";

const MY_QUERY = gql`
    query getProducts(
    $type: String,
 
 
  ) {
    products(
      type: $type
 
   
    ) {
    total
      items {
        id
        title
        
      }
      hasMore
    }
  }
`;

const CATEGORIES_QUERY = gql`
     query getCategories(
    $type: String,
 
 
  ) {
    products(
      type: $type
 
   
    ) {
    total
      items {
        id
        title
        
      }
      hasMore
    }
  }
`;


      export default function Home({data_product,data_category}) {

console.log("props",data_product)
  if (!data_product) return <div>No data!</div>;

  return(
      <div>
        <p>   product  </p>

          <select>
              {data_product.data.products.items.map((item) => (
              <option key={item.id} > {item.title}  </option>
          ))}
              </select>
          <p>   category  </p>
          <select>
              {data_category.data.products.items.map((item) => (
                  <option key={item.id} > {item.title}  </option>
              ))}
          </select>
      </div>

  );



}
export async function getServerSideProps(context) {
  let data= await   client.query({
    query: MY_QUERY,
    variables:  {"type": "grocery"}
  });



    let data_product=data
    data= await   client.query({
        query: CATEGORIES_QUERY,
        variables:  {"type": "bags"}
    });

   let data_category=data
   console.log("data_product=",data_product )
   console.log("data_category=",data_category )
    return {
        props: {data_category:data_category,data_product:data_product}, // will be passed to the page component as props
    }



}
