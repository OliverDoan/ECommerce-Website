import { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import gr1 from '~/assets/images/gr.svg';
import gr2 from '~/assets/images/gr2.svg';
import gr3 from '~/assets/images/gr3.svg';
import gr4 from '~/assets/images/gr4.svg';
import watch from '~/assets/images/watch.jpg';
import { BreadCrumb } from '~/components/BreadCrumb';
import Color from '~/components/Color';
import Meta from '~/components/Meta';
import ProductCard from '~/components/ProductCard';
import './styles.scss';
export const OurStorePage = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title='Our Store' />

      <section className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>
                <div>
                  <h5 className='sub-title'>Availablity</h5>
                  <div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='' />
                      <label className='form-check-label' htmlFor='label'>
                        In Stock (1)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='' />
                      <label className='form-check-label' htmlFor='label'>
                        Out of Stock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-floating'>
                      <input
                        type='email'
                        className='form-control'
                        id='floatingInput'
                        placeholder='From'
                      />
                      <label htmlFor='floatingInput'>From</label>
                    </div>
                    <div className='form-floating'>
                      <input
                        type='email'
                        className='form-control'
                        id='floatingInput1'
                        placeholder='To'
                      />
                      <label htmlFor='floatingInput1'>To</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Colors</h5>
                  <div>
                    <Color />{' '}
                  </div>
                  <h5 className='sub-title'>Size</h5>
                  <div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='color-1' />
                      <label className='form-check-label' htmlFor='color-1'>
                        S (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='color-2' />
                      <label className='form-check-label' htmlFor='color-2'>
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Headphone
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Laptop
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Mobile
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Wire</span>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Product</h3>
                <div>
                  <div className='random-products mb-3 d-flex'>
                    <div className='w-50'>
                      <img src={watch} className='img-fluid' alt='watch' />
                    </div>
                    <div className='w-50'>
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <StarRatingComponent name='rate1' starCount={5} value={1} />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img src={watch} className='img-fluid' alt='watch' />
                    </div>
                    <div className='w-50'>
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <StarRatingComponent name='rate1' starCount={5} value={1} />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block' style={{ width: '100px' }}>
                      Sort By:
                    </p>
                    <select
                      name=''
                      defaultValue={'manula'}
                      className='form-control form-select'
                      id=''
                    >
                      <option value='manual'>Featured</option>
                      <option value='best-selling'>Best selling</option>
                      <option value='title-ascending'>Alphabetically, A-Z</option>
                      <option value='title-descending'>Alphabetically, Z-A</option>
                      <option value='price-ascending'>Price, low to high</option>
                      <option value='price-descending'>Price, high to low</option>
                      <option value='created-ascending'>Date, old to new</option>
                      <option value='created-descending'>Date, new to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='totalproducts mb-0'>21 Products</p>
                    <div className='d-flex gap-10 align-items-center grid'>
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src={gr4}
                        className='d-block img-fluid'
                        alt='grid'
                        aria-hidden='true'
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src={gr3}
                        className='d-block img-fluid'
                        alt='grid'
                        aria-hidden='true'
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src={gr2}
                        className='d-block img-fluid'
                        alt='grid'
                        aria-hidden='true'
                      />

                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src={gr1}
                        className='d-block img-fluid'
                        alt='grid'
                        aria-hidden='true'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='products-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
