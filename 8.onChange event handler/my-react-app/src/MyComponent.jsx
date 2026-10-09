import { useState } from "react";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    };

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    };

    return (
        <div className="form-card">

            <h2>Order Form</h2>

            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
                <p>Name: {name}</p>
            </div>

            <div className="form-group">
                <label>Quantity</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                />
                <p>Quantity: {quantity}</p>
            </div>

            <div className="form-group">
                <label>Comment</label>
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Enter delivery instructions"
                />
                <p>Comment: {comment}</p>
            </div>

            <div className="form-group">
                <label>Payment</label>
                <select
                    value={payment}
                    onChange={handlePaymentChange}
                >
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>

                <p>Payment: {payment}</p>
            </div>

            <div className="form-group">
                <label>Shipping</label>

                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            value="Pick Up"
                            checked={shipping === "Pick Up"}
                            onChange={handleShippingChange}
                        />
                        Pick Up
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Delivery"
                            checked={shipping === "Delivery"}
                            onChange={handleShippingChange}
                        />
                        Delivery
                    </label>
                </div>

                <p>Shipping: {shipping}</p>
            </div>

        </div>
    );
}

export default MyComponent;