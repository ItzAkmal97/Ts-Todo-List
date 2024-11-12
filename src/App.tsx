import Todos  from './components/Todos'
import { TodosProvider } from './context/todosContext'
function App() {

  return (
    <TodosProvider>
      <Todos />
    </TodosProvider>
  )
}

export default App
