export default function Navbar({ NavData }) {
  //   console.log(NavData);
  return (
    <div className='flex mx-2'>
      <div className='flex font-bold'>
        {NavData.main
          ? NavData.main.map((item: any, idx: number) => {
              return (
                <div className='mx-2 cursor-pointer' key={idx}>
                  {item.label}
                </div>
              );
            })
          : ''}
      </div>
      <div className='mx-2 border border-gray-300'></div>
      <div className='flex text-gray-300'>
        {NavData.event
          ? NavData.event.map((item: any, idx: number) => {
              return (
                <div className='mx-2 cursor-pointer' key={idx}>
                  {item.label}
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
}
