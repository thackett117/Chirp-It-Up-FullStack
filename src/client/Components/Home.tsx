import React from 'react';
import { Link } from 'react-router-dom';
import { chirp } from "../types";

const Home: React.FC<IHomeProps> = () => {
    const [chirps, setChirps] = React.useState<chirp[]>([]);

    React.useEffect(() => {
        fetchChirps();
    }, []);

    const fetchChirps = async () => {
        try {
            let res = await fetch("/api/chirps/")
            let chirps: chirp[] = await res.json();
            chirps.reverse();
            setChirps(chirps)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container">
            {chirps.map((chirp: chirp) => (
                <div key={chirp.id} className="card shadow m-2 mb-5">
                <div className="card-body">
                    <h5 className="card-title border-bottom pb-3">{chirp.name}</h5>
                    <p className="card-text">{chirp.content}</p>
                    <Link to={`/chirp/${chirp.id}/admin`}>
                        <button className="btn btn-sm btn-outline-secondary float-right">Admin Options</button>
                    </Link>
                </div>
            </div>
            ))}
        </div>
    )

}

interface IHomeProps {};

export default Home;
