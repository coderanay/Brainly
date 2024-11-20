// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Components/ui/Button'
import { PlusIcon } from './icons/PlusIcons'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
      <Button 
        variant={"primary"}
        startIcon={<PlusIcon size={"lg"} />} 
        endIcon={<ShareIcon size={"lg"} />} 
        size="lg" 
        title={"Share"}
      ></Button>

<Button 
        variant={"secondary"}
        startIcon={<PlusIcon size={"lg"} />} 
        endIcon={<ShareIcon size={"lg"} />} 
        size="lg" 
        title={"Share"}
      ></Button>


      <Button 
        variant={"primary"}
        startIcon={<PlusIcon size={"sm"} />} 
        endIcon={<ShareIcon size={"sm"} />} 
        size="sm" 
        title={"Share"}
      ></Button>
    </>
  )
}

export default App
