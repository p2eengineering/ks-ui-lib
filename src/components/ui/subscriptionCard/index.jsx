import './subscriptionCard.scss';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';

function SubscriptionCard(props) {
  const {
    application: {
      productSvg,
      productName,
      buttonText,
      annualPlan,
      renewalDate,
      subscriptionDate,
    },
    isActive,
    buttonHandler,
  } = props;
  return (
    <div className='subscription-card'>
      <div className='product-det'>
        <div className='card-icon'>{productSvg}</div>
        <p className='product-name'>{productName}</p>
        {isActive ? (
          <p className='active-plan'>Active</p>
        ) : (
          <p className='inactive-plan'>In Active</p>
        )}
      </div>
      <div>
        <p className='card-head'>Annual Plan</p>
        <p className='price'>
          <span className='container-sub-text '>$ {annualPlan}</span> per annum
        </p>
      </div>
      <div>
        <p className='card-head'>Subscription Start Date</p>
        <p>
          <span className='container-sub-text '>{subscriptionDate}</span>
        </p>
      </div>
      <div>
        <p className='card-head'>Renewal Date</p>
        <p>
          <span className='container-sub-text '>{renewalDate}</span>
        </p>
      </div>
      <div className='card-action-grp'>
        <button className='ks-product-btn' onClick={buttonHandler}>
          {buttonText}
        </button>

        <Dropdown>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            <div onClick={() => {}}>
              <BsThreeDotsVertical size={25} />
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Upgrade</Dropdown.Item>
            <hr />
            <Dropdown.Item className='cancel'>
              Cancel Subscription
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default SubscriptionCard;
