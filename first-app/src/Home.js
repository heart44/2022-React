import { Link } from "react-router-dom"

import TodoApp from './TodoApp';
import CoinTracker from './CoinTracker';
import MovieApp from './MovieApp';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to={TodoApp}>Todo</Link>
            <Link to={CoinTracker}>Coin</Link>
            <Link to={MovieApp}>Movie</Link>
        </div>
    )
}