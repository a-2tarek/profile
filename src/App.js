import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';

const FullName = prompt("your full name ?")
const Bio = prompt("your bio ?")
const Proffission = prompt("your proffission ?")
const image = "logo192.png"
const func = () => {
  alert(FullName)
}
const styles = {padding: "20px",  fontFamily:'Courier New', color:"aqua"}

function App() {
  return (
    <>
      <div style ={styles}>
      <Profile FullName={FullName} Bio={Bio} Proffission={Proffission} Func={func} >{image}</Profile>
     
      </div>
    </>
  );
}

export default App;
