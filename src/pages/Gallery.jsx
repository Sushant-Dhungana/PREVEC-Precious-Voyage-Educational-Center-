import React, { useEffect } from 'react'
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import galleryImage from '../images/banner.png'
import '../styles/gallery.css'
import axiosBaseURL from '../baseUrl'
const imageUrl  = "http://precious-voyage.onvirotech.com/images/gallery/"

const Gallery = () => {
    const [gallery, setGallery] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        axiosBaseURL.get('/api/gallery')
            .then((res) => {
                setGallery(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);
    console.log(gallery?.galleries);
    return (
        <div>
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
                            <h4>Our Gallery</h4>
                            <div className="after_line_gallery"></div>
                        </div>
                    </div>
                </div>
            </div>
            {
                gallery?.galleries?.length > 0 ? (
                    <SlideshowLightbox className="container gallery_images">
            {
                gallery?.galleries?.map((item, index) => (
                    <div className="container gallery_images">
                        <img src={imageUrl + item?.image} alt="gallery" />
                        </div>
                ))
            }
            </SlideshowLightbox>
                ) : null
            }

        </div>
    )
}

export default Gallery