import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Characters from './Components/Characters/Characters'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Character from './Components/Character/Character'
import Header from './Components/Header/Header'
import Locations from './Components/Locations/Locations'
import Episodes from './Components/Episodes/Episodes'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Header />
        <Switch>
          <Route path='/' exact component={Characters} />
          <Route path='/characters' component={Characters} />
          <Route path='/character/:id' component={Character} />
          <Route path='/locations' component={Locations} />
          <Route path='/episodes' component={Episodes} />
          <Route path='/episodes/:id' component={Characters} />
        </Switch>
      </ApolloProvider>
    </Router>
  )
}

export default App
