import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTotalQuantityInCart } from "../cart/CartUtils";
import Nav from "../nav/Nav";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const navigate = useNavigate();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(e.target.value);
      navigate(`/?search=${searchQuery}`);
    }
  };
  const [active, setActive] = useState(false);
  const handleClickFilter = () => {
    setActive(!active);
  };

  return (
    <div className="w-full">
      <div className="hidden h-24 md:flex items-start gap-16 px-[5%] text-base">
        <div className="my-auto">
          <Link to="/">
            <div className="w-24 h-10">
              <img
                src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[#003ea1] text-sm mt-2 font-semibold">
              Tốt & Nhanh
            </span>
          </Link>
        </div>
        <div className="flex-grow h-10 border-[1px] border-slate-300 rounded-md my-auto w-5">
          <div className="flex items-center ml-5 gap-3">
            <div className="py-3">
              <img
                src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
                alt=""
                className="w-5 h-5 object-cover"
              />
            </div>
            {/* search */}
            <input
              type="text"
              className="pl-2 flex-grow border-r-2 border-slate-400 outline-none"
              placeholder="Freeship đến 30K"
              onChange={handleSearchInputChange}
              onKeyPress={handleKeyPress}
            />
            <Link to={`/?search=${searchQuery}`}>
              <button className="text-blue-600 pr-3 hover:bg-blue-300">
                Tìm kiếm
              </button>
            </Link>
          </div>
        </div>
        <div className="flex my-auto gap-5">
          <Link to="/">
            <div className=" flex gap-1 hover:bg-blue-300">
              <img
                src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png"
                alt=""
                className="w-6 h-6"
              />
              <span>Trang chủ</span>
            </div>
          </Link>
          <Link to="/dangNhap">
            <div className="flex gap-1 border-r-2 border-slate-400 pr-5 hover:bg-gray-300">
              <img
                src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"
                alt=""
                className="w-6 h-6"
              />
              <span>Tài khoản</span>
            </div>
          </Link>
          <Link to="/gioHang">
            <div className="hover:bg-blue-300 flex">
              <img
                src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
                alt=""
                className="w-6 h-6"
              />
              <span className="text-white bg-red-600 absolute rounded-full ml-6 top-7">
                {getTotalQuantityInCart()}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="md:hidden bg-[#1BA8FF] flex h-14 items-center gap-5 px-3">
        <div>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 0 24 24"
              width="30px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
            </svg>
          </Link>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 0 24 24"
            width="30px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </div>
        <div className="flex bg-white items-center rounded-md">
          <div className="pl-3">
            <img
              src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
              alt=""
              className="w-4 object-cover"
            />
          </div>
          <input
            type="text"
            className="pl-2 border-r-2 border-slate-400 outline-none py-2 rounded-md"
            placeholder="Bạn đang tìm kiếm gì"
            onKeyPress={handleKeyPress}
          />
        </div>
        <div>
          <Link to="gioHang">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <span className="text-white bg-red-600 absolute rounded-full ml-6 top-[-1px]">
                {getTotalQuantityInCart()}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="lg:hidden bg-white ">
        <div className="flex gap-6 px-10 text-base py-2">
          <span className="text-blue-500">Phổ biến</span>

          <span>Bán chạy</span>
          <span>Hàng mới</span>
          <span>Giá↨</span>
        </div>
        <div>
          <div className="text-lg px-8">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <g>
                  <path d="M0,0h24 M24,24H0" fill="none" />
                  <path d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" />
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
              </svg>
              <button onClick={handleClickFilter}>Lọc</button>
            </div>
            <div className={`${active !== true ? "hidden" : ""}`}>
              <Nav></Nav>
              <button
                onClick={handleClickFilter}
                className="bg-red-500 text-white"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
