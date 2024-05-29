
function Navbar() {
    return (
      <>
          <header className="bg-red-400 flex justify-center">
              <div className="container flex-row grid grid-cols-2 text-white">
                  <div className="flex-start justify-around items-center py-4 px-16">
                      <img className="h-16" src="/src/assets/images/1.png" alt="Logo Farmácia" />
                      {/* <h1>Farmácia de Deus</h1> */}
                  </div>
                  <nav>
                      <ul className="flex flex-row justify-end items-center py-10 px-16">
                          <li className="mx-3">Categorias</li>
                          <li className="mx-3">Cadastrar Categorias</li>
                      </ul>
                  </nav>
                  {/* <div className="">
                    <User size={32} color="#f9ecec" />
                    <ShoppingCart size={32} color="#f9ecec" />
                  </div> */}
              </div>
          </header>
      </>
    )
  }
  
  export default Navbar