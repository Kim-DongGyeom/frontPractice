'client';
import { useState } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';

export default function ProductCard() {
  const [like, SetLike] = useState(false);
  const likeToggle = () => {
    SetLike(!like);
  };

  return (
    <div className='border'>
      <div className=' min-h-[270] min-w-[360] p-2 bg-gray-100 relative'>
        <div className='w-10 h-10 absolute z-10 border p-2 rounded-full flex text-xs justify-center items-center cursor-pointer'>
          new
        </div>
        <div
          className='p-2 absolute z-10 bottom-2 right-2 rounded-full border flex justify-center items-center  cursor-pointer'
          onClick={likeToggle}
        >
          {like ? (
            <IoMdHeart size={20} color='pink' />
          ) : (
            <IoIosHeartEmpty size={20} />
          )}
        </div>
      </div>
      <div className='h-1000'></div>
    </div>
  );
}
