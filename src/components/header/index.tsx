// data
import NavData from '../../utils/dataMap/header/headerNavMap.json';

// component
import NavMain from './NavMain';
import NavEvent from './NavEvent';
export default function Nav() {
  //   console.log(NavData.main);
  console.log(NavData.event);
  return (
    <div className='flex'>
      {/* appロゴ */}
      <div>ロゴ</div>

      {/* navメイン */}
      <NavMain></NavMain>

      {/* navイベント */}
      <NavEvent></NavEvent>

      {/* 検索バー */}
      <div>検索</div>

      {/* プロフィール */}
      <div>プロフィール</div>

      {/* レジ */}
      <div>レジ</div>
    </div>
  );
}
