
// type Props = {}
import imgLogo from '../assets/img/logo140.svg'


const Header = () => {
  return (
  <header className="border-b border-slate-100">
  <div className="container mx-auto duration-300">
    <div className="flex justify-between h-20">
      <div className="flex items-center lg:hidden flex-1">
        <button className="btn-show-menu p-2.5 rounded-lg text-neutral-700 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="lg:flex-1 flex items-center">
        <img src={imgLogo} alt="" className="w-36" />
      </div>
      <nav className="hidden lg:flex items-center">
        <ul className="flex items-center">
          <li><a className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100" href="#">Trang chủ</a>
          </li>
          <li className="relative group">
            <a href="#" className="flex items-center py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100">Danh mục
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-1 mt-1 h-4 w-4 text-slate-400">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
              </svg>
            </a>
            <div className="group-hover:visible group-hover:opacity-100 invisible duration-300 absolute transform z-10 w-56 top-full left-0 opacity-0 translate-y-0">
              <ul className="rounded-lg shadow-lg border border-neutral-100 text-sm relative bg-white py-4 grid gap-1">
                <li className="px-2">
                  <a className="flex items-center font-normal text-neutral-600 py-2 px-4 rounded-md hover:bg-neutral-100" href="/">Home Demo 1</a>
                </li>
                <li className="px-2">
                  <a className="flex items-center font-normal text-neutral-600 py-2 px-4 rounded-md hover:bg-neutral-100" href="/">Home Demo 1</a>
                </li>
                <li className="px-2">
                  <a className="flex items-center font-normal text-neutral-600 py-2 px-4 rounded-md hover:bg-neutral-100" href="/">Home Demo 1</a>
                </li>
              </ul>
            </div>
          </li>
          <li><a className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100" href="#">Sản phẩm</a>
          </li>
          <li><a className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100" href="#">Khuyến mại</a>
          </li>
          <li><a className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100" href="#">Giới thiệu</a>
          </li>
        </ul>
      </nav>
      <div className="flex-1 flex justify-end items-center">
        {/* <button class="lg:flex hidden lg:w-12 w-10 h-10 lg:h-12 justify-center items-center text-slate-700 rounded-full hover:bg-slate-100">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M22 22L20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round"></path>
      </svg>
    </button> */}
        <div className="mt-1 hidden lg:block w-40">
          <form action="" className="flex-1 text-slate-900">
            <div className="bg-slate-50 flex items-center space-x-1 py-2 px-4 rounded-xl h-full border border-slate-100">
              <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input placeholder="Tìm kiếm.." className="border-none bg-transparent outline-none w-full text-sm " type="search" />
            </div>
          </form>
        </div>
        <button className="relative group lg:w-12 w-10 h-10 lg:h-12 flex justify-center items-center text-slate-700 rounded-full hover:bg-slate-100">
          <svg className=" w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="group-hover:visible group-hover:opacity-100 invisible duration-300 absolute transform z-10 w-40 top-full right-0 opacity-0">
            <ul className="rounded-lg shadow-lg border border-neutral-100 text-sm relative bg-white py-4 grid gap-1">
              <li className="px-2">
                <a className="flex items-center font-normal text-neutral-600 py-2 px-4 rounded-md hover:bg-neutral-100" href="/">Đăng nhập</a>
              </li>
              <li className="px-2">
                <a className="flex items-center font-normal text-neutral-600 py-2 px-4 rounded-md hover:bg-neutral-100" href="/">Đăng ký</a>
              </li>
            </ul>
          </div>
        </button>
        <button className="lg:w-12 w-10 h-10 lg:h-12 flex justify-center items-center relative text-slate-700 rounded-full hover:bg-slate-100">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 8H21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="absolute w-3.5 h-3.5 flex items-center justify-center bg-[#12a5e8] top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">5</span>
        </button>
      </div>
    </div>
    {/* mobile */}
    <nav className="menu-mobile flex lg:hidden items-center justify-center flex-col max-h-0 duration-500 opacity-0 invisible">
      <ul className="flex items-center justify-center flex-wrap">
        <li><a className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100" href="#">Trang chủ</a>
        </li>
        <li className="relative group">
          <a href="#" className="flex items-center py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100">Danh mục
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-1 mt-1 h-4 w-4 text-slate-400">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
            </svg>
          </a>
          <div className="group-hover:visible group-hover:opacity-100 invisible duration-300 absolute transform z-10 w-56 top-full sm:left-0 left-1/2 opacity-0 sm:translate-x-0 -translate-x-1/2">
            <ul className="rounded-lg shadow-lg border border-neutral-100 text-sm relative bg-white py-4 grid gap-1">
              <li className="px-2">
                <a className="flex items-center font-normal text-neutral-600 py-2 px-4 rounded-md hover:bg-neutral-100" href="/">Home Demo 1</a>
              </li>
              <li className="px-2">
                <a className="flex items-center font-normal text-neutral-600 py-2 px-4 rounded-md hover:bg-neutral-100" href="/">Home Demo 1</a>
              </li>
              <li className="px-2">
                <a className="flex items-center font-normal text-neutral-600 py-2 px-4 rounded-md hover:bg-neutral-100" href="/">Home Demo 1</a>
              </li>
            </ul>
          </div>
        </li>
        <li><a className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100" href="#">Sản phẩm</a></li>
        <li><a className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100" href="#">Khuyến mại</a>
        </li>
        <li><a className="py-2.5 px-5 font-medium rounded-full duration-300 hover:bg-slate-100" href="#">Giới thiệu</a>
        </li>
      </ul>
      <div className="mt-5 mb-3">
        <form action="" method="POST" className="flex-1 text-slate-900">
          <div className="bg-slate-50 flex items-center space-x-1 py-2 px-4 rounded-xl h-full border border-slate-100">
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input placeholder="Tìm kiếm.." className="border-none bg-transparent outline-none w-full text-sm " type="search" />
          </div>
        </form>
      </div>
    </nav>
  </div>
</header>

  )
}

export default Header