'client';
import { useState } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';

interface Product {
  id: number;
  favorite: boolean;
  brand: string;
  title: string;
  originalPrice: number;
  discountRate: number;
  salePrice: number;
  category: string;
  lowestPrice: boolean;
  firstPurchase: boolean;
  newItem: boolean;
  image: string;
  rating: number;
  reviewCount: number;
}

interface ProductCardProps {
  props: Product;
}

export default function ProductCard({ props }: ProductCardProps) {
  console.log(props);
  const [like, setLike] = useState(props.favorite);
  const likeToggle = () => {
    setLike(!like);
  };

  /** data */
  // id: 1,
  // category: 'ワンピース',

  // // favorite: false,

  // brand: 'COCOBLANC',
  // title: 'リブニットホルターネックワンピース',

  // discountRate: 20,
  // salePrice: 120000,
  // originalPrice: 150000,

  // lowestPrice: true,
  // firstPurchase: true,
  // newItem: true,

  // image: '/products/1.jpg',

  // rating: 4.5,
  // reviewCount: 1200,

  return (
    <div>
      <div className='p-2 rounded-2xl bg-gray-100 relative w-[240px] h-[300px] mb-4'>
        {props.newItem ? (
          <div className='w-10 h-10 absolute z-10 p-2 rounded-full flex text-xs justify-center items-center cursor-pointer'>
            new
          </div>
        ) : (
          ''
        )}
        <div
          className='p-2 absolute z-10 bottom-2 right-2 rounded-full flex justify-center items-center  cursor-pointer'
          onClick={likeToggle}
        >
          {like ? (
            <IoMdHeart size={20} color='red' />
          ) : (
            <IoIosHeartEmpty size={20} />
          )}
        </div>
      </div>
      <div className='bg-amber-300 p-2'>
        <div>{props.brand}</div>
        <div>{props.title}</div>
        <div className='flex'>
          <div>{props.discountRate + '%'}</div>
          <div>{props.salePrice + 'ウォン'}</div>
          <div>{props.originalPrice + 'ウォン'}</div>
        </div>
      </div>
    </div>
  );
}
