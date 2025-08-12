import HeaderLogo from '../../../assets/images/logo1.png';
import './PublicHeader.scss';

export default function PublicHeader() {
  return (
    <div className='auth-navbar'>
      <img alt='logo' src={HeaderLogo} className='logo' />
      <div className='header-menu-container'>
        <div className='header-text'>Help</div>
        <div className='header-text'>Privacy Policy</div>
        <div className='header-text'>Terms</div>
      </div>
    </div>
  );
}
