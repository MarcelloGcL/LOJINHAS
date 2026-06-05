import "./BrandCard.css";

function BrandCard({ brand }) {
  return (
    <div className="brand-card">
      <img src={brand.logo} alt={brand.name} width="100" height="160" />
      <span>{brand.name}</span>
    </div>
  );
}

export default BrandCard;