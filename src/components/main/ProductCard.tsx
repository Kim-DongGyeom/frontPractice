'client';
import { useState } from 'react';

// react icons
import { GoStarFill } from 'react-icons/go';
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
  // console.log(props);
  const [like, setLike] = useState(props.favorite);

  const likeToggle = () => {
    setLike(!like);
  };

  return (
    <div>
      {/* 商品イメージ領域 */}
      <div className='aspect-square relative overflow-hidden rounded-2xl bg-gray-100 mb-4'>
        <img src={props.image} alt={props.title} className='object-cover' />

        {props.newItem && (
          <div className='absolute top-2 left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-xs text-pink-700'>
            new
          </div>
        )}

        <div
          className='p-0.5 absolute z-10 bottom-2 right-2 rounded-full flex justify-center items-center cursor-pointer'
          onClick={likeToggle}
        >
          {like ? (
            <IoMdHeart size={30} color='red' />
          ) : (
            <IoIosHeartEmpty size={30} color='gray' />
          )}
        </div>
      </div>
      {/* 商品情報 */}
      <div className='p-1'>
        {/* ブランド */}
        <div className='text-gray-500 pb-1'>{props.brand}</div>
        {/* 商品名 */}
        <div className='font-semibold'>{props.title}</div>
        {/* 金額 */}
        <div className='flex my-2  items-center'>
          <div className='text-pink-500 font-bold pr-2 text-lg'>
            {props.discountRate + '%'}
          </div>
          <div className='flex pr-2  items-center'>
            <div className='font-bold text-lg'>
              {props.salePrice.toLocaleString('ja-JP')}
            </div>
            <div className='font-semibold px-0.5'>円</div>
          </div>
          <div className='text-gray-500 line-through'>
            {props.originalPrice.toLocaleString('ja-JP')}
          </div>
        </div>
        {/* 商品特徴 */}
        <div className='flex ml-1 text-xs text-gray-500 pb-2 font-medium'>
          {props.lowestPrice ? (
            <div className='p-0.5 border border-gray-500 rounded-sm mr-0.5'>
              最低価格
            </div>
          ) : (
            ''
          )}
          {props.firstPurchase ? (
            <div className='p-0.5 border text-gray-500 rounded-sm rounded-sm mr-0.5'>
              初回限定
            </div>
          ) : (
            ''
          )}
          {props.newItem ? (
            <div className='p-0.5 border border-gray-500 text-gray-500 rounded-sm rounded-sm mr-0.5'>
              新商品
            </div>
          ) : (
            ''
          )}
        </div>
        <div className='my-2 flex items-center text-gray-500'>
          <GoStarFill className='mr-1 text-gray-500' />
          <div>{props.rating}</div>
          <div>{`(` + props.reviewCount.toLocaleString('ja-JP') + `)`}</div>
        </div>
      </div>
    </div>
  );
}
