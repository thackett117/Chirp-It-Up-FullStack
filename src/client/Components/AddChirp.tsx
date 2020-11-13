import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { chirp } from "../types";


const AddChirp: React.FC<IAddChirpProps> = (props: IAddChirpProps) => {
    const [chirp, setChirp] = React.useState<chirp>({
        name: "",
        content: ""
    });

    const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setChirp({
        name: e.target.value,
        content: chirp.content
    });

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setChirp({
        name: chirp.name,
        content: e.target.value
    });

    const saveChirp = async () => {
        await fetch("/api/chirps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chirp)
        });

        props.history.push("/")
    }

    return (
        <div className="container">
            <div className="card shadow m-2 p-3">
                <div className="card-body">
                    <div className="row">
                        <input type="text" className="card-title" defaultValue="" placeholder="username" onChange={onUsernameChange}/>
                    </div>
                    <div className="row">
                        <textarea className="card-text mb-3" defaultValue={chirp.content} placeholder="write your message here!" cols={140} rows={10} onChange={onMessageChange}></textarea>
                    </div>
                    <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={saveChirp}>Chirp!</button>
                </div>
            </div>
        </div>
    )
}

interface IAddChirpProps extends RouteComponentProps { }

export default AddChirp;
