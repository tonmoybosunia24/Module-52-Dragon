import { CiBookmarkPlus } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";


const NewsCard = ({ aNews }) => {
       const { author, title, image_url, details, rating, total_view, _id } = aNews
       return (
              <div className="border-2 mb-5">
                     <div className="flex items-center justify-between bg-[#F3F3F3] py-4 px-4 mb-2">
                            <div className="flex items-center gap-2 text-sm">
                                   <div>
                                          <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
                                   </div>
                                   <div>
                                          <h4>{author.name}</h4>
                                          <p>{author.published_date}</p>
                                   </div>
                            </div>
                            <div className="flex gap-2 text-2xl">
                                   <CiBookmarkPlus />
                                   <CiShare2 />
                            </div>
                     </div>
                     <div className="px-5 space-y-2 mb-3">
                            <h2 className="text-xl font-bold">{title}</h2>
                            <img src={image_url} alt="" />
                            {
                                   details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 font-semibold"> Read More....</Link></p> : <p>{details}</p>
                            }
                            <hr />
                            <div className="flex justify-between py-3">
                                   <div className="flex items-center gap-2">
                                          <div className="flex items-center gap-1 text-orange-400">
                                                 <FaStar />
                                                 <FaStar />
                                                 <FaStar />
                                                 <FaStar />
                                                 <FaStar />
                                          </div>
                                          <p className="text-sm">{rating.number}</p>
                                   </div>
                                   <div className="flex items-center gap-2">
                                          <IoMdEye className="text-xl" />
                                          <p className="text-sm">{total_view}</p>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default NewsCard;