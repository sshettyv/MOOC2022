const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const Footer = () => {
  return(
    <div> am a footer</div>
  )
}

const App = () => {
  const name = 'vijeth'
  return (
    <div>
      <h1>Greetings </h1>
      <Hello name />
      <Footer/>
    </div>
  )
}

export default App