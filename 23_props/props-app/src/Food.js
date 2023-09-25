import PropTypes from 'prop-types';

export default function Food(props) {
  const { food } = props;
  return (
    <div>
      <p>
        좋아하는 음식{' '}
        <b
          style={{
            color: 'red',
          }}
        >
          {food}
        </b>
      </p>
    </div>
  );
}

Food.defaultProps = {
  food: '기본값',
};
Food.propTypes = {
  food: PropTypes.string,
};
