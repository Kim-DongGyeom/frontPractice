// icons
// hamburger icon
import { RxHamburgerMenu } from 'react-icons/rx';

// search icon
import { CiSearch } from 'react-icons/ci';
// search QR icon
import { IoMdQrScanner } from 'react-icons/io';

// profile icon
import { CgProfile } from 'react-icons/cg';

// cart icon
import { AiOutlineShopping } from 'react-icons/ai';

// data
import data from '../../utils/dataMap/header/headerNavMap.json';

// component
import Navbar from './Navbar';
export default function index() {
  return (
    <div className='fixed top-0 left-0 w-full bg-white z-10'>
      <div className='flex justify-between items-center h-20 px-10 text-lg'>
        {/* ===== 左エリア ===== */}
        <div className='flex items-center min-h-64'>
          {/* ハンバーガーメニュー */}
          <div className='cursor-pointer p-2 rounded-full border border-gray-200 mr-4'>
            <RxHamburgerMenu size={22} />
          </div>
          {/* ロゴ */}
          <div className='cursor-pointer'>APPロゴ</div>
        </div>

        {/* ===== 中央エリア ===== */}
        <div>
          {/* カテゴリー一覧 */}
          <Navbar navData={data}></Navbar>
        </div>

        {/* ===== 右エリア ===== */}
        <div className='flex items-center min-h-64'>
          {/* 検索バー */}
          <div className='flex items-center border px-2 py-1 rounded-3xl bg-gray-100 cursor-pointer'>
            <CiSearch />
            <div>
              <input
                id='search'
                className='text-lg px-1 w-32 focus:outline-none'
                type='text'
                placeholder='input'
              ></input>
            </div>
            <IoMdQrScanner size={22} />
          </div>

          {/* プロフィール */}
          <CgProfile size={30} className='mx-2 cursor-pointer' />

          {/* カート */}
          <AiOutlineShopping size={30} className='cursor-pointer' />
        </div>
      </div>
    </div>
  );
}
