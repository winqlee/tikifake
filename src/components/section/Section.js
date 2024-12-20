import React, { useEffect, useState } from "react";
import { getData } from "../data/data";
import { Link, useSearchParams } from "react-router-dom";

const Section = () => {
  const [randomBooks, setRandomBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTermFromParams = searchParams.get("search");
  const star = searchParams.get("star");
  console.log(searchTermFromParams);
  console.log(star);
  const [searchTerm, setSearchTerm] = useState(searchTermFromParams || "");
  const [searchStar, setSearchStar] = useState(star || "");
  useEffect(() => {
    setSearchTerm(searchTermFromParams || "");
    setSearchStar(star || "");
  }, [searchTermFromParams, star]);
  useEffect(() => {
    getData().then((books) => {
      console.log(books);
      setRandomBooks(books);
    });
  }, []);
  console.log(randomBooks);
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-3 bg-[#F5F5FA]  rounded-lg w-full lg:w-[1000px] gap-3">
        {randomBooks.length > 0 &&
          randomBooks
            .filter((item) =>
              searchTerm
                ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.categories.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                : item.rating_average >= searchStar - 1
            )
            .map((item, index) => (
              <Link
                key={item.id}
                className="flex flex-col items-center bg-white rounded-lg"
                to={`/book/${item.id}`}
              >
                <div className="h-[200px] w-[200px] p-2">
                  <img
                    src={item.images[0].base_url}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="px-2 py-5">
                    <div className="h-24">
                      <h3 className="line-clamp-3">{item.name}</h3>
                      <div className="flex items-center">
                        <div className="pr-1">
                          <span className="flex">
                            {Array.from(
                              { length: Math.round(item.rating_average) },
                              (_, index) => (
                                <img
                                  key={index}
                                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                  alt="star"
                                  className="w-4"
                                />
                              )
                            )}

                            {item.rating_average >= 0 &&
                              Array.from(
                                { length: 5 - Math.round(item.rating_average) },
                                (_, index) => (
                                  <img
                                    key={index}
                                    src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                    alt="star"
                                    className="w-4"
                                  />
                                )
                              )}
                          </span>
                        </div>
                        <div className="border-l-2">
                          <span className="text-xs text-gray-400 pl-1">
                            {item.quantity_sold && item.quantity_sold.text}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center pb-8">
                      <div>
                        <span className="text-xl font-medium">
                          {item.current_seller.price.toLocaleString()}₫
                        </span>
                      </div>
                      <div>
                        <span className="text-base font-medium bg-gray-200 rounded-md">
                          {Math.round(
                            100 -
                              (item.current_seller.price /
                                item.original_price) *
                                100
                          ) !== 0
                            ? `-${Math.round(
                                100 -
                                  (item.current_seller.price /
                                    item.original_price) *
                                    100
                              )}%`
                            : ""}
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-400 text-center border-t pt-3">
                      Giao siêu tốc 2h
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Section;
