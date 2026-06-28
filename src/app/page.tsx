// icons

// data
import mainPageIMGMap from '../utils/dataMap/main/mainPageIMGMap.json';

// components
import Banner from '../components/main/Banner';
import RecommendedProducts from '../components/main/RecommendedProducts';

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center'>
      <Banner props={mainPageIMGMap} />
      <div className='w-4/5 flex justify-center items-center mt-10'>
        <RecommendedProducts />
      </div>
    </div>
  );
}
