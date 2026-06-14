import './App.css';
import Lottery from './Lottery';
import Ticket from './Ticket';
// import Counter from './Counter';
// import LikeButton from './LikeButton';
// import LudoBoard from './LudoBoard';
// import TodoList from './TodoList';

function App() {
  let winCondition = (ticket) =>{
    return sum(ticket) === 15;
  };

  return (
    <>
      {/* <p>States in React</p>
      <Counter/>
      <LikeButton/> 
      <LudoBoard /> 
      <TodoList /> */}
      <Lottery n={3} winCondition={winCondition}/>
    </>
  );
}

export default App
