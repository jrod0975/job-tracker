import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Applications from './Applications'
import AddNew from './AddNew'


function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [screen, setScreen] = useState("dashboard")
  const [applicationList, setList] = useState(() => {
    const saved = localStorage.getItem("applications");
    if (saved) return JSON.parse(saved)
    else return []
  })

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applicationList));
  }, [applicationList]);


  const applied = applicationList.filter(item => item.status === "Applied").length
  const interview = applicationList.filter(item => item.status === "Interview").length
  const rejected = applicationList.filter(item => item.status === "Rejected").length
  const offered = applicationList.filter(item => item.status === "Offered").length

  console.log(offered)
  console.log(interview)
  console.log(rejected)
  console.log(applied)


  function addToList(object){
    console.log(applicationList)
    setList(prev => [...prev, object])
  }

  function deleteFromList(applicationToDelete){
    setList(prev => prev.filter(item => item.id !== applicationToDelete.id))
  }


  function changeScreen(newScreen){
    console.log("Changed to " + screen)
    if (screen !== newScreen){
      setScreen(newScreen)
    }
  }


  function changeMode(){
    setDarkMode(prev => !prev)
  }


  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "rgb(45, 45, 45)" : "white";
  }, [darkMode]);
  



 return  <>
    <Navbar changeScreen={changeScreen} setDarkMode={setDarkMode} darkMode={darkMode}/>


    <motion.div
        key={screen} // Use key to trigger transition when screen changes
        initial={{ opacity: 0 }} // Start the new screen off-screen to the right
        animate={{ opacity: 2 }} // Slide in from right to left
        exit={{ opacity: 0 }} // Slide out to the left when exiting
        transition={{ duration: 1, ease: 'easeInOut' }} // Smooth sliding transition
      >
        {screen === 'dashboard' && (
          <Dashboard
            darkMode={darkMode}
            applied={applied}
            interview={interview}
            rejected={rejected}
            offered={offered}
          />
        )}
        {screen === 'applications' && (
          <Applications darkMode={darkMode} applicationList={applicationList} deleteFromList={deleteFromList} />
        )}
        {screen === 'addnew' && <AddNew darkMode={darkMode} addToList={addToList} />}
      </motion.div>
  </>
}

export default App