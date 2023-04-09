import Marquee from 'react-fast-marquee';
import brand01 from '../../../assets/images/brand-01.png';

export const Brands = () => {
  return (
    <section className='marque-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                {[...Array(10)].map((index) => {
                  return (
                    <div className='mx-4 w-25' key={index}>
                      <img src={brand01} alt='brand' />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
