import './Loader.scss';

const Loader = ({ size = 'medium' }) => {
  const getSizeClassName = () => {
    switch (size) {
      case 'small':
        return 'loading loading-small';
      case 'large':
        return 'loading loading-large';
      default:
        return 'loading'; // medium size as default
    }
  };

  return (
    <div className='main-loading'>
      <div className={getSizeClassName()} />
    </div>
  );
};

export default Loader;
