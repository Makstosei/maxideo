import React from "react";

import FeaturedMovie from "../../components/featured-movie";
import Categories from "../../components/categories";
import MoviesSection from "../../components/movies-section";

function HomeContainer({ categories = [], topRated = [], popularMovies = [], selectedCategory }) {
  return (
    <div>
      <FeaturedMovie movie={topRated?.[Math.floor(Math.random() * topRated.length)]} />
      <Categories categories={categories.slice(0, 5)} />

      {!!selectedCategory.movies.length && (
        <MoviesSection title={categories.find((id) => `${id}` === selectedCategory.id)?.name} movies={selectedCategory.movies} />
      )}
      <MoviesSection title="Popular Movies" movies={popularMovies.slice(0, 7)} />
      <MoviesSection title="Top Rated" movies={topRated.slice(0, 7)} />
    </div>
  );
}

export default HomeContainer;
