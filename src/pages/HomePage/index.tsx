import { Banners } from './components/Banners';
import { Blogs } from './components/Blogs';
import { Brands } from './components/Brands';
import { Services } from './components/Services';
import './styles.scss';

export const HomePage = () => {
  return (
    <>
      <Banners />
      <Services />
      <Brands />
      <Blogs />
    </>
  );
};
