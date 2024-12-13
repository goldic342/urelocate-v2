import { useState, useEffect } from 'react'

/**
 * Custom hook to fetch remote data asynchronously.
 * @param {function} fetchFunction - The async function to fetch data.
 * @param {Array} dependencies - Dependency array for useEffect to refetch on change.
 * @returns {Object} An object containing data, isLoading, and error.
 */
const useRemoteData = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true // To avoid state updates if component is unmounted.

    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const result = await fetchFunction()
        if (isMounted) {
          setData(result)
        }
      } catch (err) {
        if (isMounted) {
          setError(err)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, dependencies)

  return { data, isLoading, error }
}

export default useRemoteData
