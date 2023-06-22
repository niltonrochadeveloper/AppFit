import axios from "axios";

export interface ExercisesProps {
    category?: any;
    muscles?: any;
}

const musc = {
    "Biceps": "Biceps",
    "Forearms": "Forearms",
    "Shoulders": "Shoulders",
    "Triceps": "Triceps",
    "Quads": "Quads",
    "Glutes": "Glutes",
    "Lats": "Lats",
    "Mid back": "Mid back",
    "Lower back": "Lower back",
    "Hamstrings": "Hamstrings",
    "Chest": "Chest",
    "Abdominals":"Abdominals",
    "Obliques": "Obliques",
    "Traps": "Traps",
    "Calves": "Calves",
}

export const FetchExercises = async ({muscles, category}: any) => {
    const options = {
        method: 'GET',
        url: 'https://musclewiki.p.rapidapi.com/exercises',
        params: {
            category: category,
            muscles: muscles,
        },
        headers: {
            'X-RapidAPI-Key': '0c4e570fe9msh72621c65ec4fa41p135a8ajsnfce2d9275253',
            'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
        }
    };
    
    try {
        const response = await axios.request(options);
        console.log('cat:', category)
        console.log('musc:', muscles)
        // console.log('response', response.data[0]);
        return await response.data
    } catch (error) {
        console.error(error);
    }
}