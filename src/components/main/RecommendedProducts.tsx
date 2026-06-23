'use client';

import ProductCard from './ProductCard';

// data

// icons
export default function RecommendedProducts() {
  return (
    <div className='flex justify-center items-center border'>
      <div>
        <div>당신을 위한</div>
        <div>스타일 추천 아이템</div>
      </div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
}
