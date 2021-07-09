const fetchFunction = {
    post: async (url, obj) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const data = await res.json()
        return await data
    },
    get: async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        return await data
    }
}

export default fetchFunction;