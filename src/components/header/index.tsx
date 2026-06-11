// data
import NavData from '../../utils/dataMap/header/headerNavMap.json';

// icons
import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdQrScanner } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShopping } from 'react-icons/ai';

// component
import Navbar from './Navbar';
export default function index() {
  return (
    <div className='flex justify-between items-center h-20 px-8 text-lg'>
      {/* ===== 左エリア ===== */}
      <div className='flex items-center'>
        {/* ハンバーガーメニュー */}
        <div className='p-2 rounded-full border border-gray-200 mr-4'>
          <RxHamburgerMenu />
        </div>
        {/* ロゴ */}
        <div>APPロゴ</div>
      </div>

      {/* ===== 中央エリア ===== */}
      <div>
        {/* カテゴリー一覧 */}
        <Navbar NavData={NavData}></Navbar>
      </div>

      {/* ===== 右エリア ===== */}
      <div className='flex items-center'>
        {/* 検索バー */}
        <div className='flex items-center border px-2 py-1 rounded-3xl bg-gray-100'>
          <CiSearch />
          <div>
            <input
              id='search'
              className='px-1 w-32'
              type='text'
              placeholder='input'
            ></input>
          </div>
          <IoMdQrScanner />
        </div>

        {/* プロフィール */}
        <CgProfile />

        {/* カート */}
        <AiOutlineShopping />
      </div>
    </div>
  );
}
