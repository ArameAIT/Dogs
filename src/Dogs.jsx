import React, { useEffect, useState } from 'react'
import { getDogs, getDogsBreeds } from './ForDogs'

function Dogs() {
    const [dogs, setDogs] = useState([])
    const [dogBreed, setDogBreed] = useState([])

    useEffect(() => {
        getDogsBreeds(6).then((resp) => {
            setDogBreed(resp.data);
        })

    }, [])


    useEffect(() => {
        getDogs(5).then((response) => {
            setDogs(response.data)
        })
    }, [])

    return (
        <div className="flex flex-col justify-center items-cente p-4 gap-[50px]">
            <div className="flex gap-4 justify-center bg-green-700 p-8 border-5 border-red-700 w-full">
                {
                    dogBreed.map((el) => {
                        return (
                            <div className="p-3 border-4 rounded-xl text-white transition hover:bg-white hover:text-green-700 hover:cursor-pointer " key={el.id}>
                                <p>{el.name}</p>
                            </div>
                        )
                        c;
                    })

                }

            </div>
            <div className="flex">
                {
                    dogs.map((el) => {
                        return (
                            <div className="  bg-green-700 p-2 flex-wrap" key={el.id}>
                                <img src={el.url} className="w-[300px]" />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Dogs