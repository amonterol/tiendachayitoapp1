import Link from "next/link";

function Login() {
  return (
    <div>
      <div className="mx-auto my-4" style={{ maxWidth: "30rem" }}>
        <h3 className="text-center">Iniciar sesión</h3>
      </div>

      <form className="mx-auto my-4  mt-4" style={{ maxWidth: "30rem" }}>
        <div className="form-group font-weight-bold">
          <label htmlFor="exampleInputEmail1">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div className="form-group font-weight-bold">
          <label htmlFor="exampleInputEmail1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <div>
          <p className="my-2 justify-content-end">
            ¿Olvido su contraseña?
            <Link href="/">
              <a style={{ color: "crimson" }}> Recuperar contraseña</a>
            </Link>
          </p>
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Ingresar
        </button>

        <div className="has-text-grey">
          <p className="my-2">
            ¿Nuevo cliente?
            <Link href="/register">
              <a style={{ color: "crimson" }}> Crear cuenta</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
