import { useEffect, useState } from 'react'
import Pages from './components/Pages'
import Splashscreen from './components/Splashscreen'




function App() {
      const [loading, setLoading] =useState(true);
 

useEffect(() =>{
             const timer = setTimeout(() => {
        setLoading(false);
        }, 2000);

        return () => clearTimeout(timer); 
},[])


  return (
    <>

<Splashscreen loading={loading} /> 
<Pages/>

    </>
  )
}

export default App
