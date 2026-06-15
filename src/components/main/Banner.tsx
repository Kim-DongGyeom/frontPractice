'use client';

// react
import { useState } from 'react';

// icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface MainItem {
  label: string;
  href: string;
  title: string;
  description: string;
}

interface MainData {
  main: MainItem[];
}

interface IntroProps {
  props: MainData;
}
export default function Intro({ props }: IntroProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const prevImgBTN = () => {
    setImageIndex((idx) => {
      if (idx === 0) return props.main.length - 1;
      return idx - 1;
    });
  };

  const nextImgBTN = () => {
    setImageIndex((idx) => {
      if (idx === props.main.length - 1) return 0;
      return idx + 1;
    });
  };

  return (
    <div className='w-full h-1/2 '>
      <div className='w-full h-full flex justify-center items-center bg-gray-600 overflow-hidden relative'>
        {props
          ? props.main.map((item, idx) => {
              if (idx === imageIndex)
                return (
                  <img
                    key={item.href + idx + idx + idx}
                    className='object-cover w-2/5 h-4/5 block m-4 border rounded-2xl border border-red-300 translate-100%
'
                    src={item.href}
                  />
                );

              return (
                <img
                  key={item.href + idx + idx + idx}
                  className='object-cover w-2/5 h-3/5 block m-4 rounded-2xl'
                  src={item.href}
                />
              );
            })
          : ''}

        <div>
          <IoIosArrowBack
            className='absolute left-1/5 top-1/2 cursor-pointer'
            size={50}
            color='white'
            onClick={prevImgBTN}
          />
        </div>
        <div>
          <IoIosArrowForward
            className='absolute right-1/5 top-1/2 cursor-pointer'
            size={50}
            color='white'
            onClick={nextImgBTN}
          />
        </div>
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2'>
          <div className='flex'>
            {props?.main.map((_, idx) => (
              <div
                key={idx}
                className={`mx-1 p-1 border rounded-full cursor-pointer ${idx === imageIndex ? 'bg-gray-50' : 'bg-gray-400'}`}
                onClick={() => {
                  setImageIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
