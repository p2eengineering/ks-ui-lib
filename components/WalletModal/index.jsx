import accessImg from '../../assets/images/get-access.png';
import kalpWallet from '../../assets/images/kalp-wallet.png';
import socials from '../../assets/images/socials.png';
import metaMask from '../../assets/images/metamask.png';
import coinBase from '../../assets/images/coinbase.png';
import ledger from '../../assets/images/ledger.png';
import trezor from '../../assets/images/trezor.png';
import zerion from '../../assets/images/zerion.png';
import phantom from '../../assets/images/phantom.png';
import './walletModal.scss';
import { IoIosClose } from 'react-icons/io';
import { KalpIconBig, KeyIcon } from '../../assets/svg/svgs';
import { useNavigate } from 'react-router-dom';
const walletLists = [
  {
    id: 1,
    img: kalpWallet,
    title: 'KALP Wallet',
  },
  {
    id: 2,
    img: socials,
    title: 'Socials',
  },
  {
    id: 3,
    img: metaMask,
    title: 'MetaMask',
  },
  {
    id: 4,
    img: coinBase,
    title: 'Coinbase',
  },
  {
    id: 5,
    img: ledger,
    title: 'Ledger',
  },
  {
    id: 6,
    img: trezor,
    title: 'Trezor',
  },
  {
    id: 7,
    img: zerion,
    title: 'Zerion',
  },
  {
    id: 8,
    img: phantom,
    title: 'Phantom',
  },
];

const WalletModal = (props) => {
  const navigate = useNavigate();
  const { handleClose } = props;
  const handleCreateNewWalletBtn = () => {
    navigate('/wallet');
    handleClose();
  };
  return (
    <div className='modal-overlay'>
      <div className='wallet-modal'>
        <div className='kalp-bg-logo'>
          <KalpIconBig />
        </div>
        <button className='close-modal-btn' onClick={handleClose}>
          <IoIosClose />
        </button>
        <div className='wallet-txt'>
          <KeyIcon />
          <h2 className='wallet-main-txt'>GET ACCESS</h2>
          <p className='wallet-desc-txt'>
            One wallet for everything on blockchain
          </p>
        </div>
        <div className='wallet-list-ctr'>
          <h3 className='form-main-text'>Select wallet</h3>
          {walletLists.map((wallet, idx) => (
            <div className='wallet-row'>
              <img src={wallet.img} alt={wallet.title} />
              <p>{wallet.title}</p>
            </div>
          ))}
          <button className='btn-black' onClick={handleCreateNewWalletBtn}>
            + Create New Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
