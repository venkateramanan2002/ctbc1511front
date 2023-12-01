/* eslint-disable react/prop-types */
import { useRef } from "react";
import { toast } from 'react-toastify';

const ImageUpload = ({ property_name,setImg }) => {

    const imgRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file.name.endsWith('.jpg')) {
            toast('⚠️ Insert an jpg file please (e.g- img.jpg)');

            event.target.value = null;
            return;
        }
        let reader = new FileReader();
        reader.onloadend = function () {
            const arrayBuffer = reader.result;
            setImg(arrayBuffer);
        }
        reader.readAsDataURL(file);

    };


return (
    <div>
        <div className="img-input-container">
            <label htmlFor={property_name} className="input-file">
                {`🎨 ${imgRef.current?.files[0]?.name || 'Upload Image'}`}
                <input ref={imgRef} type="file" accept="image/jpg" onChange={handleImageUpload} id={property_name} name="imgFile" required />
            </label>
        </div>
    </div>
);
};

export default ImageUpload;