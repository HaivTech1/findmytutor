import Image, { StaticImageData } from "next/image";

const SubFeaturesImage = ({ images }) => {
  return (
    <div className="relative flex justify- items-center lg:-top-24 -left-1 lg:left-24">
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            className={image.className}
            // priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default SubFeaturesImage;
