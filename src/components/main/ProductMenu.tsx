'client';

import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductMenu() {
  const arr = [
    { text: 'ALL' },
    { text: 'アウター' },
    { text: 'パンツ' },
    { text: 'スカート' },
    { text: 'ワンピース' },
    { text: 'セットアップ' },
    { text: 'ルームウェア' },
    { text: 'スウェット' },
  ];
  const products = [
    {
      id: 1,
      favorite: false,
      brand: 'COCOBLANC',
      title: 'オーバーサイズデニムジャケット',
      originalPrice: 138000,
      discountRate: 15,
      salePrice: 117300,
      category: 'アウター',
      lowestPrice: false,
      firstPurchase: true,
      newItem: true,
      image: '/products/1.jpg',
      rating: 4.8,
      reviewCount: 931,
    },
    {
      id: 2,
      favorite: true,
      brand: 'COCOBLANC',
      title: 'ジョガースウェットパンツ',
      originalPrice: 72000,
      discountRate: 20,
      salePrice: 57600,
      category: 'パンツ',
      lowestPrice: true,
      firstPurchase: false,
      newItem: false,
      image: '/products/2.jpg',
      rating: 4.6,
      reviewCount: 934,
    },
    {
      id: 3,
      favorite: false,
      brand: 'COCOBLANC',
      title: 'フラワープリントロングスカート',
      originalPrice: 89000,
      discountRate: 25,
      salePrice: 66750,
      category: 'スカート',
      lowestPrice: true,
      firstPurchase: true,
      newItem: true,
      image: '/products/3.jpg',
      rating: 4.7,
      reviewCount: 487,
    },
    {
      id: 4,
      favorite: false,
      brand: 'COCOBLANC',
      title: 'リブニットホルターネックワンピース',
      originalPrice: 150000,
      discountRate: 20,
      salePrice: 120000,
      category: 'ワンピース',
      lowestPrice: true,
      firstPurchase: true,
      newItem: true,
      image: '/products/4.jpg',
      rating: 4.5,
      reviewCount: 1200,
    },
    {
      id: 5,
      favorite: true,
      brand: 'COCOBLANC',
      title: 'テーラードセットアップ',
      originalPrice: 168000,
      discountRate: 30,
      salePrice: 117600,
      category: 'セットアップ',
      lowestPrice: false,
      firstPurchase: false,
      newItem: true,
      image: '/products/5.jpg',
      rating: 4.9,
      reviewCount: 356,
    },
    {
      id: 6,
      favorite: false,
      brand: 'COCOBLANC',
      title: 'サテンルームウェアセット',
      originalPrice: 68000,
      discountRate: 15,
      salePrice: 57800,
      category: 'ルームウェア',
      lowestPrice: false,
      firstPurchase: true,
      newItem: false,
      image: '/products/6.jpg',
      rating: 4.4,
      reviewCount: 268,
    },
    {
      id: 7,
      favorite: true,
      brand: 'COCOBLANC',
      title: 'オーバーサイズスウェットパーカー',
      originalPrice: 82000,
      discountRate: 10,
      salePrice: 73800,
      category: 'スウェット',
      lowestPrice: true,
      firstPurchase: false,
      newItem: true,
      image: '/products/7.jpg',
      rating: 4.8,
      reviewCount: 642,
    },
  ];

  const [index, setIndex] = useState(0);

  const clickMeneBTN = (idx: number) => {
    if (idx !== index) return setIndex(idx);
  };

  return (
    <div className='w-fit mx-auto'>
      <div className='flex justify-between items-center mb-8'>
        <div className='text-2xl font-extrabold'>
          <h1>당신을 위한</h1>
          <h1>스타일 추천 아이템</h1>
        </div>

        <div className='flex'>
          {arr
            ? arr.map((item, idx) => {
                return (
                  <div
                    key={item.text}
                    className={`py-1 px-5 flex justify-center items-center cursor-pointer mx-1 ${
                      idx === index
                        ? 'bg-black text-white rounded-2xl border'
                        : 'bg-white text-gray-300'
                    }`}
                    onClick={() => {
                      clickMeneBTN(idx);
                    }}
                  >
                    {item.text}
                  </div>
                );
              })
            : ''}
        </div>
      </div>
      <div
        className='grid grid-cols-5 gap-6
                  xl:grid-cols-5
                  lg:grid-cols-4
                  md:grid-cols-3
                  sm:grid-cols-2'
      >
        {products
          ? products.map((item) => {
              console.log('map: ', item);
              return <ProductCard key={item.id} props={item} />;
            })
          : ''}
      </div>
    </div>
  );
}
