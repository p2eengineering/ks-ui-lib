import { useRef } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BellIcon, MarkRead } from '../../../../assets/svg/svgs';
import NotificationList from './NotificationList';
import './NotificationModal.scss';

const NotificationModal = () => {
  const target = useRef();

  const tooltip = () => (props) => {
    return (
      <Tooltip id='tooltip' {...props} className='notification-container'>
        <div className='notification-layout'>
          <div className='notification-header'>
            <div className='title'>Notifications</div>
            <div className='sub-title'>
              <MarkRead />
              Mark all as read
            </div>
          </div>
          <div>
            <NotificationList />
          </div>
        </div>
      </Tooltip>
    );
  };

  return (
    <>
      <OverlayTrigger
        placement='bottom-end'
        overlay={tooltip()}
        target={target.current}
        trigger={'click'}
        rootClose
      >
        <button className='ks_hdr_cls_btn'>
          <BellIcon />
        </button>
      </OverlayTrigger>
    </>
  );
};
export default NotificationModal;
