import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navber from "../Shared/Navber/Navber";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

       const news = useLoaderData();


       return (
              <div>
                     <Header></Header>
                     <BreakingNews></BreakingNews>
                     <Navber></Navber>
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="">
                                   <LeftSideNav></LeftSideNav>
                            </div>
                            <div className="md:col-span-2">
                                   <h2 className="text-3xl font-medium mb-5">Dragon News Home</h2>
                                   {
                                          news.map(aNews => <NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
                                   }
                            </div>
                            <div>
                                   <RightSideNav></RightSideNav>
                            </div>
                     </div>
              </div>
       );
};

export default Home;