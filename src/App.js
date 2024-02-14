import './App.css';
import Profile from './components/Profile'
import Card from './components/Card'
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div class="main">
      <div class="inputDiv">
        <SearchInput/>
      </div>
      <div class="main-position">
        <Profile />
        <div class="experience">
          <ul class="projects">
            <Card />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
