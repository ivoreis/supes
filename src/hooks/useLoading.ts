import { useState, useEffect } from 'react'

const useLoading = (loading, delay = 500) => {
  const [isLoading, setIsLoading] = useState(loading)

  useEffect(() => {
    setTimeout(() => setIsLoading(loading), delay)
  }, [loading])

  return isLoading
}

export default useLoading
