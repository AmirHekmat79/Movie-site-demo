import RootLayout from 'app/layout';

import Image from 'next/image';

const getData = async (id) => {
  const response = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    cache: 'no-store',
  });
  return response.json();
};
const MovieDetails = async ({ params }) => {
  const specificMovie = await getData(params.id);

  return (
    <RootLayout showNavbarAndFooter>
      <div className="container mx-auto px-6">
        <section className="flex justify-between items-center shadow-md bg-amber-50 px-5 py-8 rounded-lg my-8">
          <div className="flex flex-col gap-4">
            <span className="mb-4">{specificMovie.title}</span>
            <div className="flex  items-center gap-4">
              <span>کارگردان :</span>
              <span className="text-slate-500 ">{specificMovie.director}</span>
            </div>
            <div className="flex  items-center gap-4">
              <span>سال انتشار :</span>
              <span className="text-slate-950 ">{specificMovie.year}</span>
            </div>
            <div className="flex  items-center gap-3">
              <span>سبک :</span>
              {specificMovie.genres.map((genre, i) => (
                <span key={i} className="bg-slate-100 shadow-md p-3 rounded-xl">
                  {genre}
                </span>
              ))}
            </div>
            <div className="flex  items-center gap-4">
              <span>زمان :</span>
              <span className="text-red-500">{specificMovie.runtime}</span>
            </div>
            <div className="flex  items-center gap-4">
              <span>نمره IMDB:</span>
              <span className="bg-yellow-400 w-fit h-fit  rounded-md p-3 text-slate-950">
                {specificMovie.imdb_rating}
              </span>
            </div>

            <div className="flex  items-center gap-4">
              <span>بازیگران :</span>
              <span className="text-slate-500 ">{specificMovie.actors}</span>
            </div>
            <div className="flex flex-col  items-start gap-4 mb-4">
              <span> خلاصه فیلم:</span>
              <span dir="ltr" className="text-slate-500 ">
                {specificMovie.plot}
              </span>
            </div>
          </div>
          <div>
            <Image
              src={specificMovie.poster}
              width={300}
              height={300}
              alt={specificMovie.title}
              priority={true}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        <section className="my-4">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {specificMovie.images.map((image, i) => (
              <Image
                key={i}
                src={image}
                width={300}
                height={300}
                alt={specificMovie.title}
                priority={true}
                className="rounded-md"
              />
            ))}
          </div>
        </section>
      </div>
    </RootLayout>
  );
};

export default MovieDetails;
