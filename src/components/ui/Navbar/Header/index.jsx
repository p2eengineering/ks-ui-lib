import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationModal from './NotificationModal';
import ProfileDropdown from './ProfileDropdown';
import { MdOutlineQuestionMark } from 'react-icons/md';

import HeaderLogo from '../../../assets/images/logo1.png';
import { PiDotsNineBold } from 'react-icons/pi';
import './Header.scss';
import {
  Hamburger,
  KalpStudioCollapsedLogo,
  Wallet,
} from '../../../assets/svg/svgs';
import WalletModal from '../../WalletModal';
import { Dropdown } from 'react-bootstrap';
import Kalp from '../../../assets/images/Kalp.png';
import Kalp2 from '../../../assets/images/Kalp2.png';
import emailService from '../../../assets/images/email-service.png';
import smart from '../../../assets/images/smart.png';
import kalpify from '../../../assets/images/kalpify.png';

const kalpApps = [
  {
    name: 'KALP Studio',
    img: Kalp,
  },
  {
    name: 'KALP Pay',
    img: Kalp,
  },
  {
    name: 'KALP Wallet',
    img: Kalp2,
  },
  {
    name: 'Email Service',
    img: emailService,
  },
  {
    name: 'Kalptantra',
    img: Kalp2,
  },
  {
    name: 'S.M.A.R.T',
    img: smart,
  },
  {
    name: 'Kalpify',
    img: kalpify,
  },
];

export default function Header() {
  const navigate = useNavigate();
  const [showWalletModal, setShowWalletModal] = useState(false);

  const handleLogo = () => {
    navigate('/');
  };

  const toggleMenuCollapse = () => {
    const header = document.querySelector('.header');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.ks-sub-container');
    header.classList.toggle('collapse');
    if (header.classList.contains('collapse')) {
      sidebar.classList.add('modified');
      container.classList.add('full');
    } else {
      sidebar.classList.remove('modified');
      container.classList.remove('full');
    }
  };

  const OpenWalletModal = () => {
    setShowWalletModal(true);
  };
  const handleCloseModal = () => {
    setShowWalletModal(false);
  };

  return (
    <div className='show'>
      {showWalletModal && <WalletModal handleClose={handleCloseModal} />}
      <div className={`header`}>
        <div className='header-logo pointer' onClick={handleLogo}>
          <div className='ks-collapsed-logo'>
            <KalpStudioCollapsedLogo />
          </div>
          <img alt='logo' src={HeaderLogo} className='logo' />
        </div>
        <div onClick={toggleMenuCollapse} className='pointer ks-collapse-btn'>
          <Hamburger />
        </div>
        <div className='header-content-wrapper'>
          <NotificationModal />
          <HeaderButtonClassic>
            <MdOutlineQuestionMark size={25} />
          </HeaderButtonClassic>

          <div
            className='hdr-connect-wallet-btn pointer'
            onClick={OpenWalletModal}
          >
            <div className='wallet-icn'>
              <Wallet width={20} height={20} />
            </div>
            <p>+ Connect Wallet</p>
          </div>
          <div className='apps-section'>
            {' '}
            <Dropdown>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                <div className='apps-btn pointer'>
                  <PiDotsNineBold size={30} />
                  <p>Apps</p>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <p className='app-heading'>Kalp Apps</p>
                <div className='kalp-apps-ctr'>
                  {kalpApps.map((app, idx) => (
                    <div className='app' key={`app_${idx}`}>
                      <img src={app.img} alt='' />
                      <p>{app.name}</p>
                    </div>
                  ))}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}

export const HeaderButtonClassic = ({ children }) => {
  return <button className='ks_hdr_cls_btn'>{children}</button>;
};
