import Lottie from 'react-lottie';
import Animation1 from '../images/Animation1.json';
import Animation2 from '../images/Animation2.json';

// no data found component
export const NoDataFound = () => {
    return (
      <div className='flex flex-col items-center justify-center min-h-[30vh] bg-[#00000010] w-full max-w-[900px] my-3 rounded-3xl'>
        <div className='max-w-[150px]'>
          <Lottie
            options={{
              animationData: Animation1,
              loop: true,
              autoplay: true,
            }}
          />
        </div>
        <h1 className='text-6xl my-8'>No Data Found</h1>
      </div>
    );
  };



// loading Component
export const Loading = () => {
    return (
      <div className='flex flex-col items-center justify-center my-20'>
        <div className='max-w-[150px]'>
          <Lottie
            options={{
              animationData: Animation2,
              loop: true,
              autoplay: true,
            }}
          />
        </div>
        <h1 className='text-xl my-8'>loading...</h1>
      </div>
    );
  };
  