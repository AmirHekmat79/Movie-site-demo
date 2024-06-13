import Image from 'next/image';
import Link from 'next/link';

const MovieCards = ({ id, poster, title }) => {
  return (
    <Link href={`/movies/${id}`}>
      <div className="bg-white shadow-lg  py-2 text-center rounded-xl hover:translate-y-2 hover:opacity-60 ease-in-out duration-300">
        <div className="text-center">
          <div>
            <Image
              src={poster}
              alt="poster"
              className="mx-auto rounded-sm"
              width={250}
              height={250}
              priority={true}
            />
          </div>
        </div>
        <p className="my-3 md:text-xs  ">{title}</p>
      </div>
    </Link>
  );
};

export default MovieCards;
