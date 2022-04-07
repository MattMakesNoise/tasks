import { useEffect, useState } from 'react';
import axios from 'axios';

const useUpdate = () => {
    const [dataPut, setDataPut] = useState([]);
    const [loadingPut, setLoadingPut] = useState(false);
    const [errorPut, setErrorPut] = useState(null);

    useEffect(() => {
        setLoadingPut(true);
        axios.put("http://localhost/api/post/update.php", {complete: "1"})
            .then((response) => {
                setDataPut(response);
                console.log(response);
            }).catch((error) => {
                setErrorPut(error);
            }).finally(() => {
                setLoadingPut(false);
            })
    }, [])

    return {dataPut, loadingPut, errorPut};
}

export default useUpdate;