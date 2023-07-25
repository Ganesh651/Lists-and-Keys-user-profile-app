import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Ester Howard',
    role: 'Software Developer',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List App</h1>
    {/* <UserProfile userDetails={userDetails} /> */}
    <ul className="list">
      {userDetailsList.map(eachUser => (
        <UserProfile eachUser={eachUser} key={eachUser.id} />
      ))}
    </ul>
  </div>
)

export default App
