import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { OurStorePage } from './pages/OurStore';
import { BlogsPage } from './pages/Blogs';
import { ContactPage } from './pages/Contact';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';

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
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/forgot-password',
        element: <Forgotpassword />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/reset-password',
        element: <Resetpassword />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
