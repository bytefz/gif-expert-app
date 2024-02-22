import { GifItem } from './GifItem';
import { useFetchGIFs } from '../../hooks/useFetchGIFs';

export const GifGrid = ({category}) => {
  
    const {images, isLoading} = useFetchGIFs(category);
  
    return (
    <>
        <h3>{category}</h3>
        {
            isLoading && <p>Loading...</p>
        }
        <div className='card-grid'>
            {images.map((image) => (
                <GifItem key={image.id} {...image} />
            ))}
        </div>
    </>
  )
}
