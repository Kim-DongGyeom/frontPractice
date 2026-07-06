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

  const prevIndex = imageIndex === 0 ? props.main.length - 1 : imageIndex - 1;

  const nextIndex = imageIndex === props.main.length - 1 ? 0 : imageIndex + 1;

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
    <div className='w-full h-[50vh] flex overflow-hidden relative bg-gray-600'>
      <div className='flex justify-center w-full h-full '>
        {/* left */}
        <img
          src={props.main[prevIndex].href}
          className='absolute left-[-10%] top-1/2 -translate-y-1/2 w-[35%] h-[70%] object-cover rounded-2xl
            '
        />

        {/* center */}
        <div
          className='absolute left-1/2 top-1/2
             -translate-x-1/2 -translate-y-1/2
             w-[45%] h-[70%] z-2'
        >
          <img
            src={props.main[imageIndex].href}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute bottom-[-45] left-6 w-3/5 text-white'>
            <div className='text-2xl font-bold leading-tight py-2'>
              {props.main[imageIndex].title}
            </div>

            <div className='text-xs text-gray-300'>
              {props.main[imageIndex].description}
            </div>
          </div>
          <div className='absolute bottom-[-20] right-0 pr-4'>
            <div className='flex'>
              {props?.main.map((_, idx) => (
                <div
                  key={idx}
                  className={`mx-1 p-1 border rounded-full cursor-pointer ${idx === imageIndex ? 'bg-gray-50 w-8' : 'bg-gray-400 '}`}
                  onClick={() => {
                    setImageIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* right */}
        <img
          src={props.main[nextIndex].href}
          className='absolute right-[-10%] top-1/2 -translate-y-1/2 w-[35%] h-[70%] object-cover rounded-2xl
'
        />
      </div>

      <div>
        <IoIosArrowBack
          className='absolute left-1/9 top-1/2 cursor-pointer'
          size={50}
          color='white'
          onClick={prevImgBTN}
        />
      </div>
      <div>
        <IoIosArrowForward
          className='absolute right-1/9 top-1/2 cursor-pointer'
          size={50}
          color='white'
          onClick={nextImgBTN}
        />
      </div>
    </div>
  );
}
