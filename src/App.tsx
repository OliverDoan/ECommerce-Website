import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { OurStorePage } from './pages/OurStore';
import { BlogsPage } from './pages/Blogs';
import { ContactPage } from './pages/Contact';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/product',
        element: <OurStorePage />,
      },
      {
        path: '/blogs',
        element: <BlogsPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/compare-product',
        element: <CompareProduct />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
