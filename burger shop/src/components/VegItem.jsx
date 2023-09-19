
import React, { useState } from 'react'
import data from '../data';
import Product from './Product';

const VegItem = () => {
    const [posts,setPosts] = useState(data);
    console.log(posts);
  return (
    <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">

        {
            posts.filter((post) => 
                post.type === "veg"
            ).map((item) => {
                return <Product key={item.id} post={item} />
            })
        }
      
    </div>
  )
}

export default VegItem;
