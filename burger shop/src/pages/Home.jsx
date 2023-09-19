import { useEffect, useState } from "react";
import Product from "../components/Product";
import data  from "../data";

const Home = () => {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    setPosts(data);
  },[])

  return (
      <div>
        {
            posts.length > 0 ? (
                <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                  {
                    posts.map((post) => {
                      return <Product key={post.id} post={post} />
                    })
                  }
                </div>
            ) : 
            (
              <div className="flex justify-center items-center">
                <p>No Post Found</p>
              </div>
            )
           
        }  
      </div>
  )
};

export default Home;
