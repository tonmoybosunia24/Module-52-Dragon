import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
       return (
              <div className="flex bg-[#f3f3f3] py-2 mt-2">
                     <button className="btn bg-[#D72050] text-white ml-2 rounded-none">Latest</button>
                     <Marquee pauseOnHover speed={100}>
                            <Link className="mr-5" to='/'>I can be a React component, multiple React components, or just some text..........</Link>
                            <Link className="mr-5" to='/'>I can be a React component, multiple React components, or just some text..........</Link>
                            <Link className="mr-5" to='/'>I can be a React component, multiple React components, or just some text..........</Link>
                     </Marquee>
              </div>
       );
};

export default BreakingNews;