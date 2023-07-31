import Image from "next/image";

import HomeContainer from "../../containers/home";
import { getSingleCategory, getCategories, getPopularMovies, getTopRatedMovies } from "../../services/movie";

async function Home({ params, searchParams }) {
  let selectedCategory = "";

  const [{ results: topRated }, { results: popularMovies }, { genres: categories }] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
    console.log(selectedCategory);
  }

  return (
    <HomeContainer
      popularMovies={popularMovies}
      topRated={topRated}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}

export default Home;
