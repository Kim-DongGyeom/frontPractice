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
    <div className='w-full h-3/5  bg-gray-600 pb-10'>
      <div className='w-full h-full flex justify-center items-center overflow-hidden relative'>
        <div className='flex justify-center items-center w-full h-full '>
          {/* left */}
          <img
            src={props.main[prevIndex].href}
            className='absolute left-[-10%] top-1/2 -translate-y-1/2 w-[35%] h-[80%] object-cover rounded-2xl
            '
          />

          {/* center */}
          <div
            className='absolute left-1/2 top-1/2
             -translate-x-1/2 -translate-y-1/2
             w-[45%] h-[80%] z-2'
          >
            <img
              src={props.main[imageIndex].href}
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute bottom-10 left-10 text-white'>
              <h2 className='text-5xl font-bold leading-tight'>
                {props.main[imageIndex].title}
              </h2>

              <p className='mt-4 text-xl'>
                {props.main[imageIndex].description}
              </p>
            </div>
          </div>

          {/* right */}
          <img
            src={props.main[nextIndex].href}
            className='absolute right-[-10%] top-1/2 -translate-y-1/2 w-[35%] h-[80%] object-cover rounded-2xl
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
