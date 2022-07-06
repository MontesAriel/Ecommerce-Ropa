import './Carrousel.css'
import images from '../ImagenesCarrousel/ImagenesCarrousel'


const Carrousel = () => {
    return (
        <div className='slider-container'>
            <div className='slider'>
                {images.map((image, i) => (
                    <div className='item' key={i}>
                        <img src={image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carrousel