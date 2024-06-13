import RootLayout from 'app/layout';
import MovieCards from 'components/movie-cards';

export const getData = async () => {
  const response = await fetch(`https://moviesapi.ir/api/v1/movies`, {
    cache: 'no-store',
  });

  return response.json();
};

const Movies = async () => {
  const moviesList = await getData();

  return (
    <RootLayout showNavbarAndFooter>
      <div className="container text-center mx-auto my-4 py-6">
        <div className="flex justify-center gap-5 flex-wrap">
          {moviesList.data.map((movie) => {
            return <MovieCards key={movie.id} {...movie} />;
          })}
        </div>
      </div>
    </RootLayout>
  );
};

export default Movies;
