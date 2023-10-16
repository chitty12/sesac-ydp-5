import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from '../pages/ProductPage';

export default function ProductDetailPage() {
  const { productId } = useParams(); // {productId : '2'}
  console.log(productId); // '2'
  console.log(productInfos);
  const number = Number(productId);
  console.log(number);
  //   let productInfo = { productNames, productEmails, productBodys };

  //   console.log(productInfo);

  const navigate = useNavigate();

  const productName = productInfos.map((product) => product.name)[
    `${number - 1}`
  ];
  const productEmail = productInfos.map((product) => product.email)[
    `${number - 1}`
  ];
  const productBody = productInfos.map((product) => product.body)[
    `${number - 1}`
  ];

  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
      <ul>
        <li>상품번호: {number}</li>
        <li>상품명: {productName}</li>
        <li>판매자: {productEmail}</li>
        <li>상세설명: {productBody}</li>
      </ul>
    </div>
  );
}
