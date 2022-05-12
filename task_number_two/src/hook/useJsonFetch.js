import React from 'react';

export default function useJsonFetch(url = '', opts = {}) {
    const [data, setData] = React.useState({} || []); 
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    if (typeof url !== 'string' || typeof opts !== 'object') {
        setError('Parameters ("url" = string and "opts" = object) were expected, but completely different ones were received')
        throw new Error('Parameters ("url" = string and "opts" = object) were expected, but completely different ones were received')
    }

    async function fetching() {
        const req = await fetch(url, opts)
        if (!req.ok) {
            setError(req.status || req.statusText)
        } else {
            const res = await req.json();
            setData(res)
            setLoading(false)
        }
    }

    React.useEffect(() => {
        setLoading(true);
        fetching()
    }, [])

    return [data, loading, error]
}