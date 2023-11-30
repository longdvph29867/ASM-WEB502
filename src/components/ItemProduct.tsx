import { Link } from "react-router-dom";
import { formartCurrency, formartRating } from "../util/util";

type Props = {
  product: Product;
};

const ItemProduct: React.FC<Props> = ({ product }) => {
  const { name, desc, images, price, slug, rating } = product;
  return (
    <Link to={`/products/${slug}`}>
      <div className="relative flex flex-col bg-transparent duration-200 hover:-translate-y-4 h-full justify-between">
        <div className="relative flex-shrink-0 bg-slate-50 rounded-3xl overflow-hidden z-1">
          <div className="flex w-full">
            <img
              src={images[0]}
              alt="product"
              className="object-cover w-full h-full drop-shadow-xl"
            />
          </div>
          <div className="rounded-full flex items-center justify-center absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white text-slate-700 ">
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
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-neutral-700 nc-shadow-lg absolute top-3 right-3 z-10">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="space-y-4 px-2.5 pt-5 pb-2.5">
          <div>
            <h2 className="text-base font-semibold min-h-[48px] my-line-2">
              {name}
            </h2>
            <p className="text-sm text-slate-500 mt-1 ">
              {desc.slice(0, 50)}...
            </p>
          </div>
          <div className="flex justify-between items-end ">
            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2  text-sm font-medium">
              <span className="text-green-500">{formartCurrency(price)}</span>
            </div>
            <div className="flex items-center">
              <div className="relative w-20 h-6">
                <div className="absolute text-slate-400 left-0 bottom-0 h-full w-20">
                  ★★★★★
                </div>
                <div
                  className={`absolute text-[#fbbf24] left-0 bottom-0 h-full overflow-hidden`}
                  style={{ width: `${formartRating(rating)}%` }}
                >
                  ★★★★★
                </div>
              </div>
              <span className="text-sm ml-1 text-slate-500">({rating})</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemProduct;
