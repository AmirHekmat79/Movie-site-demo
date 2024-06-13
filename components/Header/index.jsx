import Link from 'next/link';
import { BiMoviePlay } from 'react-icons/bi';
const Header = () => {
  return (
    <header className="bg-yellow-600 shadow-lg shadow-slate-300 py-9">
      <nav className="flex justify-around items-center">
        <ul className="text-slate-900 flex justify-center items-center gap-10">
          <li className="hover:text-lime-100 transition-all duration-300">
            <Link href={'/movies'}>صفحه نخست</Link>
          </li>
          <li className="hover:text-lime-100 transition-all duration-300">
            <Link href={'/movies'}>دانلود فیلم</Link>
          </li>
         
          <li className="hover:text-lime-100 transition-all duration-300">
            <Link href={'/movies'}>برترین فیلم های سال </Link>
          </li>
        </ul>
        <div className="flex justify-around items-center gap-4">
          <Link href={'/'}>
            <p>فیلم کده</p>
          </Link>
          <BiMoviePlay className="font-semibold text-3xl text-yellow-300  rounded-sm" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
