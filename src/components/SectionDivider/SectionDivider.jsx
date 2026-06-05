import "./SectionDivider.css";

function SectionDivider({ images }) {
  return (
    <div className={`section-divider columns-${images.length}`}>
      {images.map((img, index) => (
        <img key={index} src={img} alt={`banner-${index}`} width="300" height="160" />
      ))}
    </div>
  );
}

export default SectionDivider;