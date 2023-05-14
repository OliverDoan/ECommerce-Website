import { Banners } from './components/Banners';
import { Blogs } from './components/Blogs';
import { Brands } from './components/Brands';
import { Famous } from './components/Famous';
import { PopularProduct } from './components/PopularProduct';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { SpecialProduct } from './components/SpecialProduct';
import './styles.scss';

export const HomePage = () => {
  return (
    <>
      <Banners />
      <Services />
      <Products />
      <Famous />
      <SpecialProduct />
      <PopularProduct />
      <Brands />
      <Blogs />
    </>
  );
};
