'use client';

// component
import ProductMenu from './ProductMenu';

// data

// icons
export default function RecommendedProducts() {
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
  return (
    <div className='block justify-center items-center w-full'>
      <ProductMenu />
    </div>
  );
}
