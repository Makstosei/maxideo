import React from "react";
import { CategoriesLoading } from "@/components/categories/loading";
import { FeatureMovieLoading } from "@/components/featured-movie";
import { MoviesSectionLoading } from "@/components/movies-section/loading";

function Loading() {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </div>
  );
}

export default Loading;
