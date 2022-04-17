import { useEffect, useState } from 'react';
import axios from 'axios';

const useComplete = () => {
    const [dataComplete, setDataComplete] = useState([]);
    const [errorComplete, setErrorComplete] = useState(null);

    useEffect(() => {
        axios.put("http://localhost/api/post/complete.php")
            .then((response) => {
                setDataComplete(response);
                console.log(response);
            }).catch((error) => {
                setErrorComplete(error);
            })
    }, [])

    return {dataComplete, errorComplete};
}

export default useComplete;