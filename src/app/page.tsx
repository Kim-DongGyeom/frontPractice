// icons

// data
import data from '../utils/dataMap/mainIMG/mainPageIMGMap.json';

// components
import Banner from '../components/main/Banner';

export default function Home() {
  return (
    <div className='h-full w-full'>
      <Banner props={data} />
    </div>
  );
}
