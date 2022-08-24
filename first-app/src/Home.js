import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/todo'>Todo</Link><br />
            <Link to='/movie'>Movie</Link><br />
            <Link to='/coin'>Coin</Link>
        </div>
    )
}