import './App.css'

function App() {
  document.title = "Deploy Vercel | Teste"
  function handleButtonClick(){
    alert("Clicou no botão")
  }

  return (
    <>
      <h1>Aplicação teste para deploy</h1>
      <button onClick={()=> handleButtonClick()}>Clique aqui</button>
    </>
  )
}

export default App
