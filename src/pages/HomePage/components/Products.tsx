import ProductCard from '~/components/ProductCard';

export const Products = () => {
  return (
    <section className='marque-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='featured-wrapper py-5 home-wrapper-2'>
              <div className='row'>
                <div className='col-12'>
                  <h3 className='section-heading'>Featured Collection</h3>
                </div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
