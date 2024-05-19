import React from 'react'
import { categoryInfos } from './CatagoryFullInfo';
import CategoryCard from './CategoryCard';
import classes from "./Catagory.module.css";


function Category() {
  return (
   <section className={classes.Category_container}>
    {
        categoryInfos.map((infos)=>(
            <CategoryCard data ={infos}/>
        ))
    }

   </section>
  )
}

export default Category
