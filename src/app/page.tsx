import data from '../utils/dataMap/mainIMG/mainPageIMGMap.json';

export default function Home() {
  console.log(data.main);
  return (
    <div>
      <div className='h-100 bg-gray-400 grid place-items-center'>
        <div className='flex justify-center items-center'>
          {data
            ? data.main.map((item, idx) => {
                return (
                  <div key={idx} className='border'>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                  </div>
                );
              })
            : ''}
        </div>
        <div>test</div>
      </div>
      <div className='border w-full'></div>
    </div>
  );
}
