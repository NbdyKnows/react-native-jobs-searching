import axios from "axios";
import { useState,useEffect } from "react";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '5b0d2b4bafmsh13467ccf04293abp1662dajsn988d2747629a',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }
        };
        
    const fetchdata = async () =>{
        setIsLoading(true);
        try{
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);

        } catch(error){
            setError(error);
            alert('There is an error')

        } finally{
            setIsLoading(false);
        }
    }

    useEffect(() =>{
        fetchdata();
    },[]);

    const refetch = () => {
        setIsLoading(true);
        fetchdata();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;