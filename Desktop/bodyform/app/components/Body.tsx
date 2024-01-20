'use client'
import { Flex, Heading, Text, Button } from "@chakra-ui/react"
import styles from './Body.module.css'

import Link from 'next/link'

const Body = () => {
  return (
    <Flex
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        height='60vh'
    >
      <Flex
        direction='column'
        pl='2rem'
        width='70%'
      >
        <Heading as='h1' size='x1' noOfLines={1}>
            BodyForm
        </Heading>
        <Text mt='1rem' >
            Reach your fitness goals with our premium exercise library
        </Text>
        <Link href="#searchbar">
            <Button mt='1rem'
                    colorScheme="messenger"
            >
                Search exercices
            </Button>
        </Link>
      </Flex>
      <div className={styles.bodyImage}></div>
    </Flex>
  )
}

export default Body
