
const Formulario = () => {
    
    
  return (
    <div>
        <form>
            <div className="mb-3 container-md">
                <label className="form-label">Nombre completo:</label>
                <input type="text" className="form-control" placeholder="Ingresa tu nombre completo." onChange={handleChange} value={formData.name}></input>
            </div>
            <div className="mb-3 container-md">
                <label className="form-label">Teléfono de contacto:</label>
                <input type="text" className="form-control" placeholder="Ingresa tu número de teléfono." onChange={handleChange} value={formData.phone}></input>
            </div>
            <div className="mb-3 container-md">
                <label className="form-label">Correo electrónico:</label>
                <input type="email" className="form-control" placeholder="Ingresa tu correo." onChange={handleChange} value={formData.email}></input>
            </div>
            <div className="mb-3 container-md">
                <label className="form-label">Repite tu correo electrónico:</label>
                <input type="email" className="form-control" placeholder="Ingresa de nuevo tu correo." onChange={handleChange} value={formData.rEmail}></input>
            </div>
        </form>
    </div>
  )
}

export default Formulario