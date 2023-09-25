import PropTypes from 'prop-types';
export default function Book(props) {
  const { title, author, price, type } = props;
  return (
    <div className="book">
      <h1>이번주 베스트셀러</h1>
      <h2>{title}</h2>
      <p className="content">저자: {author}</p>
      <p className="content">판매가: {price}원</p>
      <p className="content">구분: {type}</p>
    </div>
  );
}

Book.propTypes = {
  food: PropTypes.string,
};
