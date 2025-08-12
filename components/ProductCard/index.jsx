import './productCard.scss';

const ProductCard = (props) => {
  const {
    product: {
      backgroundColor,
      Icon,
      productName,
      productDesc,
      freeTrial,
      planPrice,
    },
    buttonText,
    buttonHandler,
    isActivePlan,
  } = props;
  return (
    <div className='ks-product-card'>
      <div
        className='ks-product-svg'
        style={{ backgroundColor: backgroundColor }}
      >
        <Icon width={30} height={30} />
      </div>
      <div>
        <div className='ks-product-title'>
          <p className='ks-product-name'>{productName}</p>
          {isActivePlan && <p className='active-plan'>Active</p>}
          {freeTrial && <p className='free-trial'> Free trial</p>}
        </div>
        <p className='ks-product-desc'>{productDesc}</p>
        <div className='card-footer'>
          <button className='ks-product-btn' onClick={buttonHandler}>
            {buttonText}
          </button>
          {planPrice && (
            <div>
              <p className='plan-text'>Plan Starting from</p>
              <p className='plan-price'>${planPrice} credits</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
