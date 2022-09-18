import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCatFact2 } from '../api/fetchCatFact'

export const useCatFact = () => {
  const dispatch = useDispatch()
  const [catFact, setCatFact] = useState<string>('')

  useEffect(() => {
    const fact = fetchCatFact2()
    fact
      .then((res) => {
        setCatFact(res.data.fact)
      })
      .catch((error) => console.error(error))
  }, [])

  return catFact
}
