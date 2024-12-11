import Image, { StaticImageData } from "next/image";

const OverlappingImages = ({ images }) => {
  return (
    <div className="relative flex">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute lg:-mt-20"
          style={{ left: image.left, top: image.top }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default OverlappingImages;
