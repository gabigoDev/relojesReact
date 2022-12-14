import React, { useState } from "react";

const CheckoutForm = ({ onConfirm, onReset }) => {
    const [checkoutData, setCheckoutData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleInputChange = (event) => {
        if (event.target.id === "confirmEmail") {
            if (checkoutData.email !== event.target.value) {
                event.target.setCustomValidity(
                    "Email de confirmación no coincide."
                );
            } else {
                event.target.setCustomValidity("");
            }
        } else {
            setCheckoutData({
                ...checkoutData,
                [event.target.id]: event.target.value,
            });
        }
    };

    const validateForm = (event) => {
        event.preventDefault();
        onConfirm(checkoutData);
    };

    return (
        <form className="container " onSubmit={validateForm}>
            <h2 className="tipografia">
                {" "}
                Completá con tus datos para poder finalizar la compra{" "}
            </h2>
            <div className="row">
                <div className="col-6 col-md-12">
                    <label htmlFor="name" className="form-label">
                        Apellido y Nombre{" "}
                    </label>
                    <input
                        required={true}
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Apellido y Nombre"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-6 col-md-12">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        required={true}
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="ejemplo@mail.com"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-6 col-md-12">
                    <label htmlFor="confirmEmail" className="form-label">
                        Confirmar Email
                    </label>
                    <input
                        required={true}
                        type="email"
                        id="confirmEmail"
                        className="form-control"
                        placeholder="ejemplo@mail.com"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-6 col-md-12">
                    <label htmlFor="phone" className="form-label">
                        Numero de telefono
                    </label>
                    <input
                        required={true}
                        type="number"
                        id="phone"
                        className="form-control"
                        placeholder="Numero de telefono"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-6 col-md-12">
                    <label htmlFor="address" className="form-label">
                        Direccion
                    </label>
                    <input
                        required={true}
                        type="text"
                        id="address"
                        className="form-control"
                        placeholder="Direccion"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="d-flex gap-2">
                <button className="btn btn-success w-100" type="submit">
                    Comprar Carrito
                </button>
                <button className="btn btn-secondary w-100" onClick={onReset}>
                    Limpiar Carrito
                </button>
            </div>{" "}
        </form>
    );
};
export default CheckoutForm;
