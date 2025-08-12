import { useState } from 'react';

import Button from '../../../Button';
import CustomModal from '../../../CustomModal';
import profile from '../../../../assets/images/profile.png';
import './ProfileDropdown.scss';
import { Dropdown } from 'react-bootstrap';
import {
  KalpCredits,
  LogoutSVG,
  RightArrowBlue,
} from '../../../../assets/svg/svgs';

const LogoutModal = ({ handleLogout }) => {
  return (
    <div className='log-out-modal-main'>
      <p className='message'>
        Are you sure you want to <strong>Logout ?</strong>
      </p>
      <div className='log-out-modal-button-wrapper'>
        <Button title='Cancel' className='btn-cancel' onClick={handleLogout} />
        <Button title='Log Out' className='btn-logout' />
      </div>
    </div>
  );
};

const user = {
  first_name: 'John',
  last_name: 'smith',
  email: 'john@smith.com',
};

const ProfileDropdown = () => {
  const [logoutModal, setLogoutModal] = useState(false);

  const handleLogout = async () => {
    setLogoutModal((prev) => !prev);
  };

  const handleAdminRedirection = () => {
    const token = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    const redirectUrl = `${process.env.REACT_APP_CMS_BASE_URL}/login?token=${token}&refreshToken=${refreshToken}`;
    window.open(redirectUrl);
  };

  return (
    <div className='profile-dropdown-ctr'>
      <Dropdown className='profile-dropdown'>
        <Dropdown.Toggle className='d-flex profile-dropdown-btn'>
          {user?.profile_assets?.avatar_url ? (
            <img src={profile} alt='profile' className='profile-img' />
          ) : (
            <div className='profile-text'>
              {`${user?.first_name?.charAt(0)?.toUpperCase()} ${user?.last_name
                ?.charAt(0)
                ?.toUpperCase()}`}
            </div>
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu className='profile-dropdown-menu'>
          <Dropdown.Item>
            {user?.profile_assets?.avatar_url ? (
              <img src={profile} alt='profile' className='profile-img' />
            ) : (
              <div className='profile-text'>
                {`${user?.first_name
                  ?.charAt(0)
                  ?.toUpperCase()} ${user?.last_name
                  ?.charAt(0)
                  ?.toUpperCase()}`}
              </div>
            )}
            <div className='intro-contain'>
              <div className='profile-name'>
                <div>
                  <p className='wlcm'>Welcome</p>
                  <p>
                    {user?.first_name} {user?.last_name}
                  </p>
                </div>
                <div>
                  <RightArrowBlue />
                </div>
              </div>
              <p className='profile-email'>{user.email}</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>My Account</Dropdown.Item>
          <Dropdown.Item>
            <div className='d-flex align-items-center justify-content-between'>
              <p>My Credit</p>
              <div className='credits'>
                <KalpCredits /> 500
              </div>
            </div>{' '}
          </Dropdown.Item>
          <Dropdown.Item>Switch To Admin</Dropdown.Item>
          {user?.isSuperAdmin && (
            <Dropdown.Item onClick={handleAdminRedirection}>
              Admin panel
            </Dropdown.Item>
          )}
          <Dropdown.Item onClick={handleLogout}>
            <LogoutSVG />
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <CustomModal
        className='log-out-modal'
        title='Log Out'
        close={true}
        show={logoutModal}
        onHide={handleLogout}
        body={<LogoutModal handleLogout={handleLogout} />}
      />
    </div>
  );
};
export default ProfileDropdown;
