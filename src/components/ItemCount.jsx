import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const addNumber = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const restNumber = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    return (
        <div className="d-grid">
            <div className="input-group mb-3">
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={restNumber}
                >
                    <i className="fa-solid fa-minus"></i>
                </button>
                <input
                    className="form-control text-center"
                    value={count} readOnly={true}
                ></input>
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={addNumber}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
            <button
                className="btn btn-outline-primary"
                disabled={stock <= 0}
                onClick={() => onAdd(count)}
            >
                Agregar al carrito{" "}
            </button>
        </div>
    );
};
export default ItemCount;
