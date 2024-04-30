import { useEffect, useState } from "react";
import axios from 'axios';

function useAxios(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('')

    useEffect( () => {
        setLoading('Loading...')

        axios.get(url).then(res => {
            setLoading(false);
            
            res.data.data && setData(res.data.data)
        })
        .catch(err => {
            setLoading(false)
            setError(`An Error occurred. Ackward ${err}`)
        })
    }, [url])

    return {data, loading, error}
}

export default useAxios;