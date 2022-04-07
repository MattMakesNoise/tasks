import { useEffect, useState } from 'react';
import axios from 'axios';

const useGet = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost/api/post/read.php")
            .then((response) => {
                setData(response.data);
            }).catch((error) => {
                setError(error);
            }).finally(() => {
                setLoading(false);
            })
    }, [])

    return {data, loading, error};
}

export default useGet;