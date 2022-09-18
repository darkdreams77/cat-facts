import { useEffect, useState } from 'react'
import { fetchCatImage2 } from '../api/fetchCatImage'
import { initialCatImage } from '../store/catData/slice'
import { CatImageType } from '../types/entities'

export const useCatImage = () => {
  const [catImage, setCatImage] = useState<CatImageType>(initialCatImage)

  useEffect(() => {
    const image = fetchCatImage2()
    image
      .then((res) => {
        setCatImage(res.data[0])
      })
      .catch((error) => console.error(error))
  }, [])

  return catImage
}
