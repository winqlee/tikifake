import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../cart/CartUtils";

const Book = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const handleQuantityChange = (e) => {
    const inputQuantity = parseInt(e.target.value, 10);
    if (!isNaN(inputQuantity) && inputQuantity >= 1) {
      setQuantity(inputQuantity);
    }
  };
  const handleAddToCart = () => {
    const product = {
      id: book.id,
      name: book.name,
      image: book.images[0].base_url,
      price: book.current_seller.price,
      quantity: quantity,
    };

    addToCart(product);
    navigate("/gioHang");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/books/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setBook(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }
  const handleClickImage = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div className="grid grid-cols-1 xl:flex lg:gap-5">
        <div>
          <div className="bg-white px-4 xl:w-[400px] rounded-lg">
            <div className=" flex-col  py-5 border-b">
              <div className="w-[368px] h-[368px] border mx-auto">
                <img
                  src={
                    selectedImage
                      ? selectedImage.base_url
                      : book.images[0].base_url
                  }
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2 overflow-x-auto">
                <div className="w-[47px] flex gap-2">
                  {book.images.map((item, index) => (
                    <img
                      src={item.base_url}
                      alt=""
                      key={index}
                      className={`border rounded-md ${
                        selectedImage === item ? "border-blue-500 border-2" : ""
                      }`}
                      onClick={() => handleClickImage(item)}
                    ></img>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <h3 className="font-semibold">Đặc điểm nổi bật</h3>
                <div className="text-sm">
                  <div className="flex gap-2">
                    <div className="flex text-sm items-center h-[21px]">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png"
                        alt=""
                        className="w-4"
                      />
                    </div>
                    Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền
                    bỉ.
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center h-[21px]">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png"
                        alt=""
                        className="w-4"
                      />
                    </div>
                    Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý
                    của trẻ em.
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center h-[21px]">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png"
                        alt=""
                        className="w-4"
                      />
                    </div>
                    Cung cấp thông tin tổng quát
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div className="flex text-sm gap-2">
                <img
                  src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png"
                  alt=""
                  className="w-6"
                />
                <div>
                  <span className="text-[#808089]">Xem thêm</span> Tóm tắt nội
                  dung sách
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white flex-grow xl:w-[600px] px-3 flex flex-col gap-2 py-3">
            <div className="flex items-center gap-2 text-xs">
              <img
                src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                alt=""
                className="h-5"
              />
              <span>Tác giả:</span>
              <Link to="/" className="text-blue-500">
                {book.author && book.authors[0].name}
              </Link>
            </div>
            <div>
              <h2 className="font-semibold">{book.name}</h2>
            </div>
            <div className="text-sm flex items-center gap-2">
              <span className="font-medium">{book.rating_average}</span>
              <div>
                <span className="flex">
                  {Array.from({ length: book.rating_average }, (_, index) => (
                    <img
                      key={index}
                      src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                      alt="star"
                      className="w-3"
                    />
                  ))}
                  {book.rating_average >= 0 &&
                    Array.from(
                      { length: 5 - Math.round(book.rating_average) },
                      (_, index) => (
                        <img
                          key={index}
                          src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                          alt="star"
                          className="w-3"
                        />
                      )
                    )}
                </span>
              </div>
              <span className="text-gray-400">
                (
                {book.quantity_sold && Math.round(book.quantity_sold.value / 3)}
                )
              </span>
              <span className="text-gray-400 border-l pl-2">
                Đã bán {book.quantity_sold ? book.quantity_sold.value : "0"}
              </span>
            </div>
            <div className="flex gap-2">
              <h1 className="text-xl font-bold">
                {book.current_seller.price.toLocaleString()}₫
              </h1>
              <span className="text-base font-medium bg-gray-200 rounded-md">
                {Math.round(
                  100 - (book.current_seller.price / book.original_price) * 100
                ) !== 0
                  ? `-${Math.round(
                      100 -
                        (book.current_seller.price / book.original_price) * 100
                    )}%`
                  : ""}
              </span>
            </div>
            <div className="text-sm">
              <h2 className="font-semibold text-base">Thông tin chi tiết</h2>
              <div className="grid grid-cols-2 border-b pt-2">
                <div>
                  <span className="text-gray-500">Phiên bản sách</span>
                </div>
                <div>
                  <span>Phiên bản thường</span>
                </div>
              </div>

              {book.specifications[0].attributes.map((item, index) => (
                <div key={index} className="grid grid-cols-2 border-b pt-2">
                  <div>
                    <span className="text-gray-500">{item.name}</span>
                  </div>
                  <div style={{ display: "block" }}>
                    <span
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white mt-4 px-4 mb-10 py-3 rounded-lg xl:w-[600px]">
            <h3 className="font-semibold">Mô tả sản phẩm</h3>
            <div style={{ display: "block" }}>
              <div dangerouslySetInnerHTML={{ __html: book.description }}></div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white xl:w-[300px] px-3 py-3 flex flex-col gap-3 rounded-lg">
            <h3 className="font-semibold">Số lượng</h3>
            <div className="flex gap-2 text-center">
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                alt=""
                className="w-5 border"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              />
              <input
                type="text"
                class="border w-5"
                value={quantity}
                onChange={handleQuantityChange}
              ></input>
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                alt=""
                className="w-5 border"
                onClick={() => setQuantity(quantity + 1)}
              />
            </div>
            <h3 className="font-semibold">Tạm tính</h3>
            <span className="font-semibold text-xl">
              {(book.current_seller.price * quantity).toLocaleString()}₫
            </span>
            <button className="bg-red-500 py-2 text-white rounded-md">
              Mua ngay
            </button>
            <button
              className="py-2 text-blue-500 rounded-md border-blue-500 border"
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </button>
            <button className="py-2 text-blue-500 rounded-md border-blue-500 border">
              Mua trước trả sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
