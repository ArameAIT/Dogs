import axios from "axios"

const API_URL = "https://api.thedogapi.com/v1"

const API_KEY = "live_TI6Zn0t8ak9xwOb4dJirckwYQm9nvg8dtnmG3EJz2J6jqaZPSZDsT5imgR24T3El"

export function getDogs(limit = 5){
   return axios.get(API_URL + `/images/search?limit=${limit}`, {
    headers:{
        "x-api-key" : API_KEY
    }
   })
}

export function getDogsBreeds(limit = 6){
    return axios.get(API_URL + `/breeds?limit=${limit}`, {
     headers:{
         "x-api-key" : API_KEY
     }
    })
 }