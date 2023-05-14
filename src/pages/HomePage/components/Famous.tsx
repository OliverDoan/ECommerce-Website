import famous01 from '../../../assets/images/famous-1.webp';
import famous02 from '../../../assets/images/famous-2.webp';
import famous03 from '../../../assets/images/famous-3.webp';
import famous04 from '../../../assets/images/famous-4.webp';

import '../styles.scss';

export const Famous = () => {
  return (
    <section className='marque-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='famous-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={famous01} className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={famous02} className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Studio Display</h5>
                  <h6 className='text-dark'>600 nits of brightness.</h6>
                  <p className='text-dark'>27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={famous03} className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>smartphones</h5>
                  <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                  <p className='text-dark'>
                    Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                  </p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={famous04} className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>home speakers</h5>
                  <h6 className='text-dark'>Room-filling sound.</h6>
                  <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
