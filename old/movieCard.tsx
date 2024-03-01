export interface Movie {
    name: string
    id: number
}

export default function MovieCard({name, id}: Movie) {
    return (
        <div>
            <p>name: {name}</p>
            <p>id: {id}</p>
        </div>
    )
}