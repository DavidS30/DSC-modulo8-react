
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {

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
