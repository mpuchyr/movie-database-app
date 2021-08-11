import { useState, useEffect } from 'react';
import * as dotenv from 'dotenv';
import moment from 'moment';

const MainWindow = () => {
    const [upcoming, setUpcoming] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))

    const token = "203505d9985d3a84ee017420d7ddd358"

    useEffect(() => {
      try {
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=${token}`)
        .then(res => res.json())
        .then(data => console.log(data))
      } catch {
        setError('Something went wrong, please try again later')
      }
      setLoading(false)
    }, [])

    return (
        <div>
            Main Window Placeholder
        </div>
    )
}

export default MainWindow