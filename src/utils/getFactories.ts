export const getFactories = async() => {
    const res = await fetch('/api/factories')

    if (!res.ok) {
        throw new Error("Failed to fetch factories")
    }
    return res.json()
}