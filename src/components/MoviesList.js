import { MovieItem } from "./MovieItem";

export const MoviesList = ({movies}) => (
    <section>
        {movies.map(m => <MovieItem movie={m} />)}
    </section>
);