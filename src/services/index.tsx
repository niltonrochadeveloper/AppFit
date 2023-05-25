import React from "react";
import * as data from '../lib/muscleWiki.json'

interface MuscleProps {
    muscle: any;
}

export async function handleHome(muscle: any) {

    const getHome1 = await data.forEach((item) => muscle === item.Category)
    
    console.log('api', getHome1)

    // const getHome = JSON.stringify(getHome1)

    // return getHome
}
