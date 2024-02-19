import React, { useEffect } from "react";
import { imageLoader } from "../Redux/Actions/imageLoader";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(imageLoader());
  }, [dispatch]);

  const { loading, imageData } = useSelector((state) => state.images);
  return (
    <>
      <div className="home-container w-full h-screen bg-pink-50">
        <div className="flex flex-wrap">
          {loading ? (
            <div className="w-full h-screen flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            imageData?.photos.map((item) => (
              <img
                src={item.url}
                alt=""
                className="w-full lg:w-4/12 p-3 hover:scale-105 transition-transform duration-700 ease-in-out cursor-pointer"
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
