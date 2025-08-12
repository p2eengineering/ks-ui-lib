import './planCard.scss';
import { CrossSvg, TickSvg } from '../../assets/svg/svgs';
import { useNavigate } from 'react-router-dom';

function PlanCard(props) {
  const navigate = useNavigate();
  const {
    planName,
    price,
    planPerk,
    planButtonText,
    features,
    planIcon,
    recommended,
  } = props;

  const handlePlanBuy = () => {
    localStorage.setItem('appSubscribed', true);
    navigate('/billing');
  };
  return (
    <div className='plan-card-ctr'>
      <div className={`${recommended ? 'recommended' : ''} `}></div>
      <div className='plan-card'>
        {planIcon}
        <p className='plan-name'>{planName}</p>
        <div className='plan-features'>
          {features.map((feature, idx) => (
            <p
              key={`feature_${idx}`}
              className='sub-form-text d-flex gap-2 align-items-center'
            >
              {' '}
              {feature?.available ? <TickSvg /> : <CrossSvg />} {feature.detail}
            </p>
          ))}
        </div>
        <div>
          {price === 'custom' ? (
            <p className='plan-pricing'>
              {' '}
              <span>{price}</span>{' '}
            </p>
          ) : (
            <p className='plan-pricing'>
              {' '}
              <span>&#8377; {price}</span>{' '}
              {price === 0 ? 'credits' : 'credits/month'}
            </p>
          )}

          <p className='perk'>{planPerk}</p>
        </div>
        <button className='btn-black' onClick={handlePlanBuy}>
          {planButtonText}
        </button>
      </div>
    </div>
  );
}

export default PlanCard;
