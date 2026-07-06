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
      originalPrice: 13800,
      discountRate: 15,
      salePrice: 11730,
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
      brand: 'LUNÉA',
      title: 'ジョガースウェットパンツ',
      originalPrice: 7200,
      discountRate: 20,
      salePrice: 5760,
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
      brand: 'MÉLIA',
      title: 'フラワープリントロングスカート',
      originalPrice: 8900,
      discountRate: 25,
      salePrice: 6675,
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
      brand: 'ÉTOILE',
      title: 'リブニットホルターネックワンピース',
      originalPrice: 15000,
      discountRate: 20,
      salePrice: 12000,
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
      brand: 'NOIR',
      title: 'テーラードセットアップ',
      originalPrice: 16800,
      discountRate: 30,
      salePrice: 11760,
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
      brand: 'MELLOW',
      title: 'サテンルームウェアセット',
      originalPrice: 6800,
      discountRate: 15,
      salePrice: 5780,
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
      brand: 'AURORA',
      title: 'オーバーサイズスウェットパーカー',
      originalPrice: 8200,
      discountRate: 10,
      salePrice: 7380,
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
    <div className='w-full mx-auto'>
      <div className='flex justify-between items-center mb-8'>
        <div className='text-2xl font-extrabold'>
          <h1>今週のおすすめ</h1>
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
        className='grid justify-center gap-6'
        style={{
          gridTemplateColumns: 'repeat(auto-fit, 280px)',
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
}
