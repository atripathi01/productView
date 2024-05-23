import Image from 'next/image';
import React, { useState } from 'react';
import firstImage from '../images/firstimage.svg';
import secondImage from '../images/secondimage.svg';
import thirdImage from '../images/thirdimage.svg';

const imageArray = [firstImage, secondImage, thirdImage];
const Modal = ({ modalRef, handleClose }) => {
  const [selectedImage, setSelectedImage] = useState(imageArray[0]);

  return (
    <>
      <div
        className='modal show d-block bg-[#000000cf]'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div
          className='modal-dialog lg:w-[90%] modal-dialog-centered relative'
          role='document'
        >
          <div className='modal-content' ref={modalRef}>
            <button
              type='button'
              className='absolute top-2 right-4 z-50 text-6xl text-red-700 hover:text-7xl '
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={handleClose}
            >
              <span>&times;</span>
            </button>
            <div className='modal-body p-6'>
              <div className='flex justify-start items-start flex-col lg:flex-row'>
                <div className='lg:w-[50%] w-[100%] mr-5 flex justify-center flex-col '>
                  <div className='w-full'>
                    <Image
                      src={selectedImage}
                      alt={'product image'}
                      className='rounded-lg w-full'
                    />
                  </div>
                  <div className='flex justify-evenly items-center my-8 '>
                    {imageArray?.map((image, i) => {
                      return (
                        <Image
                          src={image}
                          key={i}
                          alt={'product image'}
                          className={`rounded-lg hover:w-[160px] lg:w-[150px] cursor-pointer hover:border-2 border-solid border-[#B27E02] ${
                            image === selectedImage
                              ? 'border-2 border-solid border-[#000]] shadow-[rgba(0, 0, 0, 0.2) 0px 18px 50px -10px]'
                              : ''
                          }`}
                          width={100}
                          onClick={() => setSelectedImage(image)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className='lg:max-w-[50%] w-auto'>
                  <div className='flex flex-col items-start gap-3 justify-center'>
                    <h1 className='text-4xl font-light text-center'>
                      <span className='font-medium'>Total</span>Environment
                    </h1>
                    <h1 className='text-2xl text-center'>
                      Tangled Up In Green
                    </h1>
                    <p className='text-xl opacity-65'>
                      Tangled Up In Green, a vision of Total Environment, is a
                      luxury plotted development nestled amidst the lush
                      landscapes of Devanahalli. This peaceful hideaway in North
                      Bangalore sits on 115 acres and has exclusive residential
                      plots with a modern design and green living blend. The
                      plots range from 1800 sq. ft. to 7200 sq. ft. You could be
                      fascinated by the botanical wonders found at the Tree
                      Museum or…
                    </p>
                    <div className='border-[#00000096] border-b-2 border-solid h-[1px] w-full'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
