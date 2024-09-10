import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from '../components/ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, imageUrl, imageAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onRequestClose} className={styles.closeButton}>Close</button>
      <img src={imageUrl} alt={imageAlt} />
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
};

export default ImageModal;
