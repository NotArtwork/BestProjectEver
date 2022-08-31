import React, { useState, useEffect} from 'react'
import Home from './components/Home'
import Header from './components/Header'


const App = () => {

  const [schoolData, setSchoolData] = useState([])


  //I don't think we need to useEffect if we are using asynch
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
    <BrowserRouter>
      <Header/>
      <Routes > 
        <Route path="/" element={ <Home schoolData={schoolData}/>} />
        <Route path="/course" element={<Course courseData={courseData}/>} />
      </Routes > 
    </BrowserRouter>
  );
}

export default App;