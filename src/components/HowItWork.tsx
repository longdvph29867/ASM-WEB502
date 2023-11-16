import img1 from "../assets/img/HIW1img.webp";
import img2 from "../assets/img/HIW2img.webp";
import img3 from "../assets/img/HIW3img.webp";
import img4 from "../assets/img/HIW4img.webp";
import React from "react";

type step = {
  id: number;
  img: string;
  title: string;
  content: string;
  color: string;
};

const HowItWork: React.FC = () => {
  const listStep: step[] = [
    {
      id: 1,
      img: img1,
      title: "Lọc &amp; Khám phá",
      content: "Lọc và đề xuất giúp bạn dễ dàng tìm thấy dễ dàng",
      color: "text-red-800 bg-red-100",
    },
    {
      id: 2,
      img: img2,
      title: "Thêm vào giỏ hàng",
      content: "Dễ dàng chọn đúng mặt hàng và thêm vào giỏ hàng",
      color: "text-indigo-800 bg-indigo-100",
    },
    {
      id: 3,
      img: img3,
      title: "Chuyển phát nhanh",
      content: "Nhà vận chuyển sẽ xác nhận và gửi hàng nhanh chóng tới bạn",
      color: "text-yellow-800 bg-yellow-100",
    },
    {
      id: 4,
      img: img4,
      title: "Trải nghiệm sản phẩm",
      content: "Hãy vui vẻ và trải nghiệm những sản phẩm chất lượng 5 sao",
      color: "text-purple-800 bg-purple-100",
    },
  ];
  return (
    <div>
      <div className="mt-28">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
            {listStep.map(({ id, img, title, content, color }, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center max-w-xs mx-auto"
              >
                <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                  <img src={img} alt="" />
                </div>
                <div className="text-center mt-auto space-y-5">
                  <span
                    className={`${color} inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative`}
                  >
                    Bước {id}
                  </span>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <span className="block text-slate-600 text-sm leading-6">
                    {content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
