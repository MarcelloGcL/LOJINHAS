import { lazy, Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/header/Header";
import Categories from "../../components/Categories/Categories";
import ProductSection from "../../components/ProductSection/ProductSection";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import Banner0 from "../../assets/images/banners/banner.webp";
import Banner1 from "../../assets/images/banners/banner1.webp";
import Banner2 from "../../assets/images/banners/banner2.webp";
import Banner3 from "../../assets/images/banners/banner3.webp";
import Banner4 from "../../assets/images/banners/banner4.webp";
import Banner5 from "../../assets/images/banners/banner5.webp";

const Footer = lazy(() => import("../../components/footer/Footer"));
const RecommendedBrands = lazy(
  () => import("../../components/BrandCard/RecommendedBrands"),
);

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Categories title="Confira nossas Categorias" />
        <ProductSection title="Consoles" categoriasIds={[8]} />
        <SectionDivider images={[Banner0]} />
        <ProductSection title="Periféricos" categoriasIds={[4, 3, 2, 1]} />
        <SectionDivider images={[Banner1, Banner2]} />
        <ProductSection title="Smartphones" categoriasIds={[7]} />
        <SectionDivider images={[Banner3, Banner4, Banner5]} />
        <ProductSection title="Acessórios" categoriasIds={[5]} />
        <Suspense fallback={null}>
          <RecommendedBrands title="Marcas Recomendadas" />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
