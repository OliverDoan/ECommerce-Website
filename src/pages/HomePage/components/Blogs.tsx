import { BlogCard } from '~/components/BlogCard';

export const Blogs = () => {
  return (
    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
        </div>
        <div className='row'>
          {[...Array(4)].map((index) => {
            return (
              <div className='col-3' key={index}>
                <BlogCard />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
