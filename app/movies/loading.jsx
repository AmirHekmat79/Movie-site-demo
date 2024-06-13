import Image from 'next/image';
import spinner from '../../public/assets/spinner.svg';
const Loading = () => {
  return (
    <>
      <div className="text-center mx-auto py-4">
        <Image
          src={spinner}
          alt="loading..."
          className="mx-auto rounded-lg"
          width={300}
          height={300}
          priority={true}
        />
      </div>
    </>
  );
};

export default Loading;
