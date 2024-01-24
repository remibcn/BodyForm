import { FilterProps } from "@/types";

export async function fetchExercises(filters: FilterProps) {
    let { muscle, difficulty } = filters 

    const headers: HeadersInit = {
        'X-RapidAPI-Key': '75716c6a1cmsh32dd026fb945d59p154714jsn49ee18fc6af1',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
        `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=${difficulty}&muscle=${muscle}`, {
            headers: headers
        }
    )

    const result = await response.json()

    return result
}


		