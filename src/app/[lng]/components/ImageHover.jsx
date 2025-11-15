import Image from "next/image";
import useMousePosition from "./useMousePosition"

export function ImageHover({ show, img_link, alt_text }) {
  const mousePosition = useMousePosition();

  if (!show) return null;

  return (
    <div
      className="absolute border-4 border-dark pointer-events-none z-50"
      style={{
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x + 150}px`,
        transform: 'translate(-50%, -50%)' // Centers the image on cursor
      }}
    >
      <div className="relative">
        {/* Tilted border background */}
        <div className="absolute inset-0 border-4 border-dark bg-dark shadow-dark"
          style={{ width: '100%', height: '100%', boxShadow: '10px 10px 0px black', }}
        />
        {/* Image */}
        <Image
          src={img_link}
          alt={alt_text}
          width={250}
          height={250}
          className="relative"
        />
      </div>
    </div>
  );
}