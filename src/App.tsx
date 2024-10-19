import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'

function App() {


  return (
    
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}>
      <GridItem area={'nav'} bg='blue' >
        Navigation 1
      </GridItem>
      <Show above='lg'>
      <GridItem area={'aside'} bg='gold'>
        Aside
      </GridItem>
      </Show>
      <GridItem area={'main'} bg='red'>
        Main Content
      </GridItem>

    </Grid>

  )
}

export default App
