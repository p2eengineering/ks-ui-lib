import { Modal } from 'react-bootstrap';
import './CustomModal.scss';

const CustomModal = ({
  size,
  show,
  onHide,
  title,
  body,
  className,
  close,
  backdrop,
}) => {
  return (
    <Modal
      size={size}
      show={show}
      onHide={onHide}
      centered
      className={`generic-modal ${className}`}
      backdrop={backdrop}
    >
      {title ? (
        <Modal.Header closeButton={close}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      ) : null}
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
