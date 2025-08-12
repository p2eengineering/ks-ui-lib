import notification1 from '../../../../../assets/images/notification1.png';
import notification2 from '../../../../../assets/images/notification2.png';
import './NotificationList.scss';

const notificationData = {
  today: [
    {
      img: notification1,
      content: 'Kalpify credit purchase is going to expire in 3 days',
      status: 'Pay Now',
      time: '10 min ago',
    },
    {
      img: notification2,
      content:
        'Your wallet balance is low. A payment for SMART is due in 2days',
      status: 'Add Fund',
      time: '1 hr ago',
    },
  ],
  yesterday: [
    {
      img: notification1,
      content: 'Kalpify credit purchase is going to expire in 3 days',
      status: 'Pay Now',
      time: '3:30 PM',
    },
    {
      img: notification2,
      content:
        'Your wallet balance is low. A payment for SMART is due in 2days',
      status: 'Add Fund',
      time: '2:48 PM',
    },
    {
      img: notification2,
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      status: 'Add Fund',
      time: '4:48 PM',
    },
  ],
};

const NotificationList = () => {
  return (
    <div className='notification-content'>
      {Object.entries(notificationData).map(
        ([key, notificationArray], index) => {
          return (
            <div className='notificationContent-main' key={index}>
              <p className='notificationContent-key'>{key}</p>
              <div>
                {notificationArray.map((singleData, index) => {
                  return (
                    <div className='singleData-main' key={index}>
                      <img
                        className='img'
                        src={singleData.img}
                        alt='notification'
                      />
                      <div className='singleData-content'>
                        <p className='content'>{singleData.content}</p>
                        <p className='status'>{singleData.status}</p>
                      </div>
                      <p className='time'>{singleData.time}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default NotificationList;
