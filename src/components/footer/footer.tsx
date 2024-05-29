
function Footer() {
    return (
      
      <>
          <footer className="bg-red-400 flex flex-col justify-center items-center text-white py-4 px-4">
              <div className="flex flex-col items-center justify-center">
                  <p>Farmácia de Deus By Marshel0 | 2024🤠 &copy; </p>
                  <p>Acesse nossa rede social GitHub!</p>
              </div>
              <div className="flex flex-row">
                  {/* <a href=""><img src="./src/assets/images/linkedin-logo.svg" alt="" /></a>
                  <a href=""><img src="./src/assets/images/instagram-logo.svg" alt="" /></a> */}
                  <a target="_blank" href="https://github.com/Marshel0"><img src="./src/assets/images/github-logo.svg" alt="" /></a>
               </div>
          </footer>
      </>
    )
  }
  
  export default Footer