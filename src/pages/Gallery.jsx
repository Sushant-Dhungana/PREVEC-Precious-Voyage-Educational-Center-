import React, { useEffect, useState, useCallback } from "react";
import galleryImage from "../images/banner.png";
import "../styles/gallery.css";
import axiosBaseURL from "../baseUrl";
import ImageViewer from "react-simple-image-viewer";
import SpinnerMain from "../components/Spinner";
import { Helmet } from "react-helmet";

const imageUrl = "http://precious-voyage.onvirotech.com/images/gallery/";

const Gallery = () => {
  const [gallery, setGallery] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axiosBaseURL
      .get("/api/gallery")
      .then((res) => {
        setGallery(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const images = gallery?.galleries;

  const imagesMain = images?.map((image) => {
    return imageUrl + image.image;
  });
  return (
    <div>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <div className="banner_main">
        <div className="banner">
          <img src={galleryImage} alt="gallery" />
          <h4>Gallery</h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="gallery_topic">
              <h4>
                Our <span>Gallery</span>
              </h4>
              <div className="after_line_gallery"></div>
            </div>
          </div>
        </div>
      </div>
      {loading ? <SpinnerMain /> :
            <div className="container gallery_images_container">
            <div className="row">
              {images?.map((image, index) => (
                <div className="col-md-3 gallery_images" key={index}>
                  <img
                    src={imageUrl + image.image}
                    alt="gallery"
                    className="gallery_image"
                    onClick={() => openImageViewer(index)}
                  />
                </div>
              ))}
              <div className="preview_image">
                {isViewerOpen && (
                  <ImageViewer
                    src={imagesMain}
                    currentIndex={currentImage}
                    disableScroll={true}
                    closeOnClickOutside={true}
                    backgroundStyle={{ backgroundColor: "rgba(50, 50, 50, 0.9)" }}
                    onClose={closeImageViewer}
                  />
                )}
              </div>
            </div>
          </div>
      }

    </div>
  );
};

export default Gallery;
