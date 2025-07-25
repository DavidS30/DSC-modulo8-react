
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TaskList from "./components/TaskList.jsx";
import {useState} from "react";
import AuthPanel from "./components/AuthPanel.jsx";

function App() {
  const [currentView, setCurrentView] = useState('task');

  if (currentView === 'auth') {
      return (
          <AuthPanel />
      )
  }
  return (
    <>
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 py-8">
                <TaskList />
            </main>
            <Footer />
        </div>
    </>
  )
}

export default App
