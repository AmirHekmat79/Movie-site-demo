import Link from 'next/link';
import Image from 'next/image';
import RootLayout from './layout';
import notFound from '../public/assets/notFound.svg';
const NotFound = () => {
  return (
    <RootLayout showNavbarAndFooter={false}>
      <div className="justify-center items-center py-16 text-center">
        <div className="my-9">
          <p className="text-red-500">صفحه مورد نظر یافت نشد</p>
        </div>
        <div>
          <Image
            src={notFound}
            alt="notFound"
            className="mx-auto rounded-lg"
            width={700}
            height={700}
            priority={true}
          />
        </div>
        <div className="my-9">
          <Link href="/">رفتن به صفحه نخست</Link>
        </div>
      </div>
    </RootLayout>
  );
};

export default NotFound;
