
const Formulario = () => {
  return (
    <div>
        <form className="w-25 container">
            <div class="mb-3 container-md">
                <label className="form-label">Nombre completo:</label>
                <input type="text" className="form-control" placeholder="Ingresa tu nombre completo."></input>
            </div>
            <div className="mb-3 container-md">
                <label className="form-label">Teléfono de contacto:</label>
                <input type="text" className="form-control" placeholder="Ingresa tu número de teléfono."></input>
            </div>
            <div className="mb-3 container-md">
                <label className="form-label">Correo electrónico:</label>
                <input type="email" className="form-control" placeholder="Ingresa tu correo."></input>
            </div>
            <div className="mb-3 container-md">
                <label className="form-label">Repite tu correo electrónico:</label>
                <input type="email" className="form-control" placeholder="Ingresa de nuevo tu correo."></input>
            </div>
        </form>
    </div>
  )
}

export default Formulario