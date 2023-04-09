import { Link } from 'react-router-dom';
import blogImg from '../../assets/images/blog-1.jpg';
import './styles.scss';

export const BlogCard = () => {
  return (
    <div className='blog-card'>
      <div className='card-image'>
        <img src={blogImg} className='img-fluid w-100' alt='blog' />
      </div>
      <div className='blog-content'>
        <p className='date'>1 Dec, 2022</p>
        <h5 className='title'>A beautiful sunday morning renaissance</h5>
        <p className='desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat accusamus officia
        </p>
        <Link to='/blog/:id' className='button'>
          Read More
        </Link>
      </div>
    </div>
  );
};
