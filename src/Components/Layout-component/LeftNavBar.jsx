import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavBar = () => {
     const [categories, setCategories] = useState([]);
     useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=> setCategories(data.data.news_category))
     },[]);

    //  {
    //     "category_id": "01",
    //     "category_name": "Breaking News"
    //     }

    return (
        <div className='text-center md:text-left'>
            <h2 className='font-semibold '>All Category ({categories.length})</h2>
            <div className='mx-3 grid grid-cols-2 md:grid-cols-1 gap-4 md:mx-0 items-center md:gap-3 py-3'>
                {
                    categories.map((category)=>(<NavLink  to={`/category/${category.category_id}`}
                        className='btn border-gray-400 bg-base-100  w-11/12' key={category.category_id}>{category.category_name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default LeftNavBar;