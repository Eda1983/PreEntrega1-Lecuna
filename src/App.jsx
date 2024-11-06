import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <>
        <div style={{backgroundColor: "#F8F9FA",minHeight: "100vh"}}>
        <h1 style={{textAlign: "center", color: "#0D6EFD"}}>Tecnotienda</h1>
        <NavBar />
        <hr />
        <ItemListContainer greeting={"Bienvenidos a nuestra tienda"}/>
        </div>
    </>
  )
}

export default App
