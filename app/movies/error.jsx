'use client';
import Image from 'next/image';
import ErrorImg from '../../public/assets/Error.png';
const ErrorPage = () => {
  return (
    <>
      <h4 className='text-center my-8'>خطای سرور </h4>
      <div className="mx-auto">
        <Image
          src={ErrorImg}
          alt="notFound"
          className="mx-auto rounded-lg"
          width={700}
          height={700}
          priority={true}
        />
      </div>
    </>
  );
};

export default ErrorPage;
