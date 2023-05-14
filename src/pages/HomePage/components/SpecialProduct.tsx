import SpecialProductCard from '~/components/SpecialProductCard';

export const SpecialProduct = () => {
  return (
    <>
      <section className='marque-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='featured-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                  <div className='col-12'>
                    <h3 className='section-heading'>Special Products</h3>
                  </div>
                  <SpecialProductCard />
                  <SpecialProductCard />
                  <SpecialProductCard />
                  <SpecialProductCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
