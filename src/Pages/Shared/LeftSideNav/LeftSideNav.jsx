import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
       const [Categories, setCategories] = useState([]);
       useEffect(() => {
              fetch('/public/categories.json')
                     .then(res => res.json())
                     .then(data => setCategories(data))
       }, [])
       return (
              <div className="">
                     <h2 className="text-3xl mb-5 font-medium">All Categories</h2>
                     <div className="space-y-3 text-xl text-gray-400 ml-5">
                            {
                                   Categories.map(Category => <Link
                                          className="block"
                                          to={`/category/${Category.id}`}
                                          key={Category.id}>
                                          {Category.name}</Link>)
                            }
                     </div>
              </div>
       );
};

export default LeftSideNav;