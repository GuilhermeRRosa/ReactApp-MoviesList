import { Link } from "react-router-dom";

export const MovieItem = ({movie}) => (
    <li>
        <Link to="">{movie.title}</Link>
    </li>
)