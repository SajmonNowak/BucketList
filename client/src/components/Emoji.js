
import { Box } from '@chakra-ui/react'
import React from 'react'

const Emoji = ({label, symbol}) => {
    return (
        <Box as="span" fontSize={46} role="img"  >
            {symbol}
        </Box>
    )
}

export default Emoji
