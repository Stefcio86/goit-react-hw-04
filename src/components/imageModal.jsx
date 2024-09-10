
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <div className={styles.modalContent}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <div className={styles.info}>
          <h2>{image.user.name}</h2>
          <p>{image.description || 'No description available'}</p>
          <p>{image.likes} likes</p>
        </div>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default ImageModal;
