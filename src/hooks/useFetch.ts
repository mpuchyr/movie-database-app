import { useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState(null)
    const url = 'https://api.themoviedb.org'
    const token = process.env.TMDB_ACCESS_TOKEN
    
    try {
        fetch(`${url}/3/disover/movie?api_key=${token}`)
        .then(res => res.json())
        .then(data => setData(data))
    } catch {
        
    }

}

export default useFetch