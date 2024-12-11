import Image, { StaticImageData } from "next/image";

const FeaturesImage = ({ images }) => {
  return (
    <div className="relative flex flex-col">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute lg:-mt-40"
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

export default FeaturesImage;
