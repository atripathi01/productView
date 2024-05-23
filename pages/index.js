import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { NoDataFound } from '@/components/globalComponents';
import Modal from '@/components/modal';

export default function Home() {
  const [data, setData] = useState([]); // store all fetched data from the server
  const [searchValue, setSearchValue] = useState(''); // set search value of search field
  const [isLoading, setIsLoading] = useState(false); // in future versions, we should need to do something like loading for the first time loading;
  const [isModalOpen, setIsModalOpen] = useState(false); // in future versions, we should need to do something like loading for the first time loading;

  const modalRef = useRef(null);

  // fetch data of products from the server
  function fetchProjectData() {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        console.log(res);
        setData(res?.data?.products);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchProjectData();
  }, []);

  // handle search value
  const handleSearch = (value) => {
    console.log(value);
    if (value && value !== '') {
      setIsLoading(true);
      setSearchValue(value);
      // filter results according to the search
      const filtered = data.filter((search) =>
        search.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setData([...filtered]);
      setIsLoading(false);
    } else {
      setSearchValue('');
      setIsLoading(true);
      fetchProjectData();
    }
  };


  const handleModalToogleClick = () => {
    setIsModalOpen(!isModalOpen);
  }


  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModalToogleClick();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);


  return (
    <main className='p-4'>
      <div className='flex items-end justify-end'>
        <button
          type='button'
          className=' bg-[#B27E02] text-white rounded py-2 px-4 text-2xl cursor-pointer '
          data-bs-toggle="modal" 
          data-bs-target="#staticBackdrop"
          onClick={handleModalToogleClick}
        >
          Product Detail Modal
        </button>
        {isModalOpen && <Modal modalRef={modalRef} handleClose={handleModalToogleClick} />}
      </div>
      <h1 className='text-3xl font-bold'>Product List</h1>
      <div className='flex justify-center align-baseline'>
        <input
          className='form-control my-12 max-w-[300px] w-full mx-4 text-3xl'
          type='text'
          placeholder='Search Product ....'
          aria-label='search box'
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className='my-5 card_wrapper'>
        {data?.map((item) => {
          return (
            <div key={item?.id} className=' cards p-6 m-4 '>
              <h1 className='text-3xl font-bold'>{item?.title}</h1>
              <p className='opacity-65 my-3'>{item?.description}</p>
            </div>
          );
        })}
        {data?.length === 0 && <NoDataFound />}
      </div>
    </main>
  );
}
