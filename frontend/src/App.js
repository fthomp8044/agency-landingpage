
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    <Router>
      <Container>
        <Route path="/" component={HomeScreen} exact />

      </Container>
    </Router>
  );
}

export default App;
