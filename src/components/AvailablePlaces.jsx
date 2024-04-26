import { useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { useEffect } from 'react';

const places = localStorage.getItem('places')

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false)
  const [AvailablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {

      try {
        setIsFetching(true)
        const response = await fetch("http://localhost:3000/places")
        const resData = await response.json()
        setAvailablePlaces(resData.places)

        if(!response.ok) throw new Error("Failed to fetch data")
      } catch (error) {{}
        setError({message: error.message || "Cant fetch data, please try again later"})
      }
      setIsFetching(false)
    }
    fetchData()
  }, [])

  if(error) return <Error title="An Error occured!" message={error.message}/>

  return (
    <Places
      title="Available Places"
      places={AvailablePlaces}
      isLoading={isFetching}
      loadingText="Loading"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
