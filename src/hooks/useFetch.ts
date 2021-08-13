import { useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState(null)
    const url = 'https://api.themoviedb.org'
    const token = "203505d9985d3a84ee017420d7ddd358"
    
    try {
        fetch(`${url}/3/disover/movie?api_key=${token}`)
        .then(res => res.json())
        .then(data => console.log(data))
    } catch {
        console.log('There was an error fetching data')
    }

}

export default useFetch