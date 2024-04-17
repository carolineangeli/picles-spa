import { ImgHTMLAttributes } from "react";
import thumbDefault from '../../../assets/thumb-default.jpg'

interface IImageBase64 extends ImgHTMLAttributes<HTMLImageElement> {}

export function ImageBase64({ src, ...rest}: IImageBase64) {
    return (
    <img 
    src={`data:image/*;base64,${src}`}
     onError={(e) => (e.currentTarget.src = thumbDefault)}
     {...rest}
      />
    )
}