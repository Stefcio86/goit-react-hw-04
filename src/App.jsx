import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import LoadMoreBtn from './components/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage';
import ImageModal from './components/ImageModal';
import { fetchImages } from './api';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (query === '') return;

    const fetchGallery = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(Math.ceil(data.total / 12));
      } catch (err) {
        setError('Error downloading images');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [query, page]);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    if (image) {
      setSelectedImage(image);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (modalIsOpen) {
      console.log("Modal is open");
    } else {
      console.log("Modal is closed");
    }
  }, [modalIsOpen]);

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {page < totalPages && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
