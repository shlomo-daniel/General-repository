
function Product(props) {
  return <div>
    <h1>{props.heading}</h1>
    <img src={"https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
    <p>{props.description}</p>
    <p>{props.price}</p>
  </div>
}

function App() {
  return <div>
    <Product />
    <Product />
    <Product />
  </div>

}

export default App

