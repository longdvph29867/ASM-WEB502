// type Props = {}

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  formartCurrency,
  formartRating,
  hiddenSpinner,
  showSpinner,
} from "../../util/util";
import ImgDetail from "./ImgDetail";
import ProductsSame from "../../components/ProductsSame";
import { https } from "../../services/config";

const DetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [productsSame, setProductsSame] = useState<Product[]>([]);

  const fetchProduct = async () => {
    try {
      showSpinner();
      const API = `/products/${slug}`;
      const { data } = await https.get(API);
      hiddenSpinner();
      setProduct(data.data);
    } catch (error) {
      hiddenSpinner();
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    fetchProduct();
  }, [slug]);

  useEffect(() => {
    const fetchProductsSame = async () => {
      if (!product?.id_category) {
        return;
      }
      try {
        showSpinner();
        const API = `/products?category_id=${product?.id_category}`;
        const { data } = await https.get(API);
        hiddenSpinner();
        const newData: Product[] = data.data.filter(
          (item: Product) => item._id !== product?._id
        );
        setProductsSame(newData);
      } catch (error) {
        hiddenSpinner();
        console.log(error);
      }
    };
    fetchProductsSame();
  }, [product]);

  return (
    <>
      <div className="py-12">
        <div className="container mx-auto">
          <div className="lg:flex">
            <div className="w-full lg:w-[50%] ">
              <div>
                <ImgDetail images={product?.images} />
              </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-[50%] pt-10 lg:pt-0 lg:pl-7 xl:pl-9">
              <div className="space-y-7">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                    {product?.name}
                  </h2>
                  <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
                    <div className="">
                      <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold">
                        <span className="text-green-500 !leading-none">
                          {formartCurrency(product?.price)}
                        </span>
                      </div>
                    </div>
                    <div className="h-7 border-l border-slate-300" />
                    <div className="flex items-center">
                      <a
                        href="#"
                        className="flex items-center font-medium text-base"
                      >
                        <div className="relative w-20 h-6">
                          <div className="absolute text-slate-400 left-0 bottom-0 h-full w-20">
                            ★★★★★
                          </div>
                          <div
                            className={`absolute text-[#fbbf24] left-0 bottom-0 h-full overflow-hidden`}
                            style={{
                              width: `${formartRating(product?.rating)}%`,
                            }}
                          >
                            ★★★★★
                          </div>
                        </div>
                        <div className="ml-1.5 flex text-sm">
                          <span>{product?.rating}</span>
                        </div>
                      </a>
                      <span className="hidden sm:block mx-2.5">·</span>
                      <div className="hidden sm:flex items-center text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                          ></path>
                        </svg>
                        <span className="ml-1 leading-none">Mới</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* size */}
                <div className="">
                  <div>
                    <div>Size: </div>
                    <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-3">
                      <div className="relative h-10 rounded-2xl border flex items-center justify-center text-sm sm:text-base uppercase font-semibold cursor-pointer border-slate-300 text-slate-900 hover:bg-neutral-50">
                        S
                      </div>
                      <div className="relative h-10 rounded-2xl border flex items-center justify-center text-sm sm:text-base uppercase font-semibold cursor-pointer border-slate-300 text-slate-900 hover:bg-neutral-50">
                        M
                      </div>
                      <div className="relative h-10 rounded-2xl border flex items-center justify-center text-sm sm:text-base uppercase font-semibold cursor-pointer border-slate-300 text-slate-900 hover:bg-neutral-50">
                        L
                      </div>
                      <div className="relative h-10 rounded-2xl border flex items-center justify-center text-sm sm:text-base uppercase font-semibold cursor-pointer border-slate-300 text-slate-900 hover:bg-neutral-50">
                        XL
                      </div>
                      <div className="relative h-10 rounded-2xl border flex items-center justify-center text-sm sm:text-base uppercase font-semibold cursor-pointer border-slate-300 text-slate-900 hover:bg-neutral-50">
                        2XL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3.5">
                  <div className="flex items-center justify-center bg-slate-100 px-2 py-3 sm:p-3.5 rounded-full">
                    <div className=" flex items-center justify-between space-x-5 w-full">
                      <div className=" flex items-center justify-between w-[104px] sm:w-28">
                        <button className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400  bg-white outline-none hover:border-neutral-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill=""
                            aria-hidden="true"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <span className="block flex-1 text-center leading-none">
                          1
                        </span>
                        <button className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400  bg-white outline-none hover:border-neutral-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill=""
                            aria-hidden="true"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="h-auto inline-flex items-center justify-center rounded-full text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl flex-1">
                    <svg
                      className="hidden sm:inline-block w-5 h-5 mb-0.5"
                      viewBox="0 0 9 9"
                      fill="#fff"
                    >
                      <path d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z"
                      />
                    </svg>
                    <span className="ml-3">Thêm vào giỏ hàng</span>
                  </button>
                </div>
                <hr className=" 2xl:!my-10 border-slate-200" />
                <div className="w-full rounded-2xl space-y-2.5">
                  {/* item */}
                  <div>
                    <div className="flex items-center justify-between w-full px-4 py-2 font-medium bg-slate-100/80 rounded-lg">
                      <span>Mô tả</span>
                    </div>
                    <div className="p-4 pt-3 text-slate-600 text-sm leading-6">
                      {product?.desc}
                    </div>
                  </div>
                  {/* item */}
                  <div>
                    <div className="flex items-center justify-between w-full px-4 py-2 font-medium bg-slate-100/80 rounded-lg">
                      <span>Vải + Chăm sóc</span>
                    </div>
                    <div className="p-4 pt-3 text-slate-600 text-sm leading-6">
                      <ul className="list-disc list-inside leading-7">
                        <li>Được làm từ lưới micromesh siêu bền của Bỉ.</li>
                        <li>74% Polyamide (Nylon) 26% Elastane (Spandex)</li>
                        <li>Có thể điều chỉnh móc &amp; mắt đóng và dây đai</li>
                        <li>Giặt tay bằng nước lạnh, phơi phẳng</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                    <div className="p-5 rounded-2xl bg-red-50">
                      <div>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 8H8"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 11H6"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 14H4"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="mt-2.5">
                        <p className="font-semibold text-slate-900">
                          Miễn phí vận chuyển
                        </p>
                        <p className="text-slate-500 mt-0.5 text-sm">
                          Với các đơn hàng trên 150.000
                        </p>
                      </div>
                    </div>
                    <div className="p-5 rounded-2xl bg-sky-50">
                      <div>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.7 4.44995L17.6799 6.74994L21.6199 4.45996"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.6799 10.82V6.73999"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.74 2.21L14.34 3.53996C13.8 3.83996 13.35 4.59995 13.35 5.21995V7.75999C13.35 8.37999 13.79 9.13998 14.34 9.43998L16.74 10.77C17.25 11.06 18.09 11.06 18.61 10.77L21.01 9.43998C21.55 9.13998 22 8.37999 22 7.75999V5.21995C22 4.59995 21.56 3.83996 21.01 3.53996L18.61 2.21C18.1 1.93 17.26 1.93 16.74 2.21Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.34998 15.45L6.31998 17.7499L10.27 15.46"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.31995 21.82V17.74"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="mt-2.5">
                        <p className="font-semibold text-slate-900">
                          Đổi trả dễ dàng
                        </p>
                        <p className="text-slate-500 mt-0.5 text-sm">
                          Chỉ cần số điện thoại.
                        </p>
                      </div>
                    </div>
                    <div className="p-5 rounded-2xl bg-green-50">
                      <div>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 3C16.95 8.84 16.95 15.16 15 21"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="mt-2.5">
                        <p className="font-semibold text-slate-900">
                          Giao hàng toàn quốc
                        </p>
                        <p className="text-slate-500 mt-0.5 text-sm">
                          Giao hàng nhanh toàn quốc.
                        </p>
                      </div>
                    </div>
                    <div className="p-5 rounded-2xl bg-amber-50">
                      <div>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 7.5V16.5"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 3V7H21"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22 2L17 7"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="mt-2.5">
                        <p className="font-semibold text-slate-900">
                          Chính sách hoàn tiền
                        </p>
                        <p className="text-slate-500 mt-0.5 text-sm">
                          60 ngày hoàn trả vì bất kỳ lý do gì
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div>
        <ProductsSame productsSame={productsSame} />
      </div>
    </>
  );
};

export default DetailPage;
