import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer-main'>
      <div className='footer-left-side'>
        <p className='footer-content'>Help</p>
        <p className='footer-content'>Privacy Policy</p>
        <p className='footer-content'>Terms</p>
      </div>
      <div className='footer-right-side'>
        <p className='footer-content'>
          Copyright © MAI Labs. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
