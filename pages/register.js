import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function RegisterPage() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [userData, setUserData] = useState(initialState);

  const { name, email, password, password_confirmation } = userData;

  // const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div>
      <div className="mx-auto my-4" style={{ maxWidth: "30rem" }}>
        <h3 className="text-center">Crear una cuenta</h3>
      </div>

      <form
        className="mx-auto my-4"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <div className="form-group font-weight-bold">
          <label htmlFor="name ">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ingrese su nombre completo"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>

        <div className="form-group font-weight-bold">
          <label htmlFor="exampleInputEmail1 ">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Ingrese su correlo electrónico"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>

        <div className="form-group font-weight-bold">
          <label htmlFor="exampleInputPassword1 ">Constraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Ingrese su nueva contraseña"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>

        <div className="form-group font-weight-bold">
          <label htmlFor="exampleInputPassword2 font-weight-bold">
            Confirmar contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Confirmar nueva contraseña"
            name="password_confirmation"
            value={password_confirmation}
            onChange={handleChangeInput}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Crear cuenta
        </button>

        <p className="my-2">
          ¿Ya tiene una cuenta?{" "}
          <Link href="/login">
            <a style={{ color: "crimson" }}>Entrar aquí</a>
          </Link>
        </p>
      </form>
    </div>
  );
}
export default RegisterPage;
