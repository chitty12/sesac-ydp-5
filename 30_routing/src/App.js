import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Photo from './pages/Photo';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="*" element={<NotFound />} />
          {/* 원래 *은 all을 의미하나 여기서는 '/' 경로를 제외한 나머지를 의미함. 제일 후단에 위치해야 한다.*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// SPA(single page application) 에서 클라이언트 측에서 알아서 페이지를 렌더링 : CSR(client side rendering)
// <=> SSR(server side rendering) : 서버 측에서 웹 페이지를 랜더링

// 1차 프로젝트는 multi page application 형식으로 진행했음.
