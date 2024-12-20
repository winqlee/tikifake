import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="flex gap-2">
        <span>
          <Link to="/">Trang chủ</Link>
        </span>
        &#62;
        <span>
          <Link to="">Nhà sách tiki</Link>
        </span>
      </div>
      <div className="w-60 bg-white p-3 grid grid-cols-1 gap-3 pb-6 rounded-sm">
        <div className="grid grid-cols-1 gap-2">
          <p className="font-semibold text-lg">Danh Mục Sản Phẩm</p>
          <Link to="/?search=English Books">English Books</Link>
          <Link to="/?search=Sách tiếng Việt">Sách tiếng Việt</Link>
          <Link to="/?search=Văn phòng phẩm">Văn phòng phẩm</Link>
          <Link to="/?search=Quà lưu niệm">Quà lưu niệm</Link>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <p className="font-semibold text-lg">Nhà cung cấp</p>
          <div className="flex gap-3">
            <input type="checkbox" className="rounded-sm h-4 w-4" id="hang1" />
            <label htmlFor="hang1">Nhà sách Fahasa</label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" className="rounded-sm h-4 w-4" id="hang2" />
            <label htmlFor="hang2">Bamboo Books</label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" className="rounded-sm h-4 w-4" id="hang3" />
            <label htmlFor="hang3">Times Books</label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" className="rounded-sm h-4 w-4" id="hang4" />
            <label htmlFor="hang4">Nhà Sách Trẻ Online</label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" className="rounded-sm h-4 w-4" id="hang5" />
            <label htmlFor="hang5">VBooks</label>
          </div>
          <span className="text-blue-600">Xem thêm &#8744;</span>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <p className="font-semibold text-lg">Đánh giá</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center">
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <Link to="/?star=5">
                <span className="text-[#242424] ml-1">từ 5 sao</span>
              </Link>
            </div>
            <div className="flex items-center">
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                  alt="start"
                  className="w-4"
                />
              </span>

              <Link to="/?star=4">
                <span className="text-[#242424] ml-1">từ 4 sao</span>
              </Link>
            </div>
            <div className="flex items-center">
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                  alt="start"
                  className="w-4"
                />
              </span>
              <Link to="/?star=3">
                <span className="text-[#242424] ml-1">từ 3 sao</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
