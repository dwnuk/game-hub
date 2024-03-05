import React from 'react'
import { Game } from '../hooks/useGames'
import { Box, Card, CardBody, Heading, Image } from '@chakra-ui/react'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
       <Box height={'80%'}>
       <Image src={game.background_image} height={'100%'} width={'100%'} objectFit={'cover'} />
       </Box>
        <CardBody display={'flex'} alignItems={'center'}>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard