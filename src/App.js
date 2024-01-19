import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5 w-100 flex-column flex-wrap ' style={{marginTop:'100px'}} >
      <div className=' p-5 rounded' style={{background:'#429E9D',width:'500px'}}>
        <h3 className='text-center text-light fw-bold m-5'>GET THINGS DONE!!!</h3>
        <AddTodo/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
