'use client'
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Searchbar from "./components/Searchbar"
import ExercisesList from "./components/ExercicesList"

import { fetchExercises } from "@/utils"
import { HomeProps } from "@/types"

export default async function Home({ searchParams }: HomeProps) {

  const allExercises = await fetchExercises({
    difficulty: searchParams.difficulty || "",
    muscle: searchParams.muscle || ""
  })

  const isDataEmpty = !Array.isArray(allExercises) || allExercises.length < 1 || !allExercises

  return (
    <>
      <Navbar />
      <Body />
      <Searchbar />
      <ExercisesList isDataEmpty={isDataEmpty} allExercises={allExercises} />
    </>
  )
}