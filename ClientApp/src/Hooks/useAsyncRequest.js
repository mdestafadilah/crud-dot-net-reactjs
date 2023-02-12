import { useState, useEffect } from "react";

const useAsyncRequest = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect((total) => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://localhost:7211/api/Peserta`
                );
                const json = await response.json();
                setData(json, setLoading(false));
            } catch (err) {
                console.warn("Backend tidak terkoneksi..",err)
                setLoading(false);
            }
        };
        fetchData();
    })

    return[data, loading];
}

export default useAsyncRequest;