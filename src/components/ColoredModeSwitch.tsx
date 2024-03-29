import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColoredModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  )
}

export default ColoredModeSwitch