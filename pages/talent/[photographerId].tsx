import { fetchPhotographerDetails } from "@/redux/services";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PhotographerDetails = () => {
  const router = useRouter();
  const photograherId = router.query.photographerId;
  const dispatch = useDispatch<any>();
  const { photographerDetails } = useSelector(
    (state: any) => state.photographers
  );
  console.log(photograherId, photographerDetails);

  useEffect(() => {
    dispatch(fetchPhotographerDetails(photograherId));
  }, [dispatch]);

  return (
    <main className="bg-gray-100 bg-opacity-25">
      {photographerDetails && (
        <div className="lg:w-8/12 lg:mx-auto mb-8">
          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1"
                src={photographerDetails.photo}
                alt="profile"
              />
            </div>

            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {photographerDetails.name}
                </h2>

                <span
                  className="inline-block fas fa-certificate fa-lg text-blue-500 
                               relative mr-6 text-xl transform -translate-y-2"
                  aria-hidden="true"
                >
                  <i
                    className="fas fa-check text-white text-xs absolute inset-x-0
                               ml-1 mt-px"
                  ></i>
                </span>

                <a
                  href="#"
                  className="bg-blue-500 px-2 py-1 
                        text-white font-semibold text-sm rounded block text-center 
                        sm:inline-block"
                >
                  Hire
                </a>
              </div>

              <ul className="hidden md:flex space-x-8 mb-4">
                <li>
                  <span className="font-semibold">136</span>
                  posts
                </li>

                <li>
                  <span className="font-semibold">40.5k</span>
                  followers
                </li>
                <li>
                  <span className="font-semibold">302</span>
                  following
                </li>
              </ul>

              <div className="hidden md:block">
                <h1 className="font-semibold">Mr Travlerrr...</h1>
                <span>Travel, Nature and Music</span>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>

            <div className="md:hidden text-sm my-2">
              <h1 className="font-semibold">Mr Travlerrr...</h1>
              <span>Travel, Nature and Music</span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </header>

          <div className="px-px md:px-3">
            <ul
              className="flex md:hidden justify-around space-x-8 border-t 
                text-center p-2 text-gray-600 leading-snug text-sm"
            >
              <li>
                <span className="font-semibold text-gray-800 block">136</span>
                posts
              </li>

              <li>
                <span className="font-semibold text-gray-800 block">40.5k</span>
                followers
              </li>
              <li>
                <span className="font-semibold text-gray-800 block">302</span>
                following
              </li>
            </ul>

            <ul
              className="flex items-center justify-around md:justify-center space-x-12  
                    uppercase tracking-widest font-semibold text-xs text-gray-600
                    border-t"
            >
              <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a className="inline-block p-3" href="#">
                  <i className="fas fa-th-large text-xl md:text-xs"></i>
                  <span className="hidden md:inline">post</span>
                </a>
              </li>
              <li>
                <a className="inline-block p-3" href="#">
                  <i className="far fa-square text-xl md:text-xs"></i>
                  <span className="hidden md:inline">igtv</span>
                </a>
              </li>
              <li>
                <a className="inline-block p-3" href="#">
                  <span className="hidden md:inline">tagged</span>
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap -mx-px md:-mx-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="w-1/3 p-px md:px-3">
                  <a href="#">
                    <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                      <img
                        className="w-full h-full absolute left-0 top-0 object-cover"
                        src={`https://source.unsplash.com/1600x900/?${photographerDetails.profession}`}
                        alt="image"
                      />
                      <img
                        className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
        border-2 border-pink-600 p-1"
                        src={photographerDetails.photo}
                        alt="profile"
                      />

                      <i className="fas fa-square absolute right-0 top-0 m-1"></i>
                    </article>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default PhotographerDetails;
