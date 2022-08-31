import { useState, useEffect} from 'react'

const App = () => {

  const [schoolData, setSchoolData] = useState([])

  useEffect(() => {

    const getSchool = async () => {
      let req = await fetch('http://localhost:3000/schools')
      let res = await req.json()
      console.log(res)
      setSchoolData(res)
    }
    getSchool()
  }, [])


  return (
    <div className="App">

    </div>
  );
}

export default App;
