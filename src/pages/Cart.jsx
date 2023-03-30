import React from "react";
import { Table, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { inCount, disCount, removeInCart, addToCart } from "../store/cartSlice";
import { Id } from "react-flags-select";

const Cart = () => {
	const cart = useSelector(state => state.cart.cart);

	const count = useSelector(state => state.cart.count);
	const summa = cart.reduce((sum, item) => sum + item.price, 0);

	const piece = cart.reduce((sum, item) => sum + item.piece, 0);
	const dispatch = useDispatch();
	const clearGo = remove => dispatch(removeInCart(remove));

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
				background: "#ECF2FF",
			}}>
			<div
				style={{
					width: "900px",
					height: "auto",

					borderRadius: "20px",
					marginTop: "20px",
				}}>
				<div
					style={{
						width: "850px",
						background: "white",
						borderRadius: "15px",
						height: "auto",
					}}>
					<h3>Basket</h3>
					{cart.map(el => (
						<div
							data-aos="flip-down"
							style={{
								width: 850,
								height: 200,
								marginBottom: "20px",

								textAlign: "center",
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}>
							<img
								style={{ width: 180, height: 200, borderRadius: "10px" }}
								src={el.image}
								alt=""
							/>
							<div
								style={{
									display: "flex",
									flexDirection: "column",

									alignItems: "center",
									width: "250px",
									height: "200px",
								}}>
								<h4>{el.title}</h4>
								<p>{el.description.slice(2, 100)}</p>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Button
									onClick={() => dispatch(addToCart(el.id))}
									style={{ background: "#8D7B68" }}>
									<h5>x {count}</h5>
								</Button>
							</div>
							<Button
								onClick={() => clearGo(el.id)}
								style={{ border: "1px solid red" }}>
								X
							</Button>
							<h4>{el.price} com</h4>
						</div>
					))}
				</div>
			</div>

			<div
				style={{
					width: "400px",
					height: "250px",
					background: "#ECF2FF",
					borderRadius: "20px",

					marginTop: "20px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
					textAlign: "center",
				}}>
				<div
					data-aos="zoom-in-down"
					style={{
						position: "fixed",
						width: "400px",
						height: "250px",
						background: "white",
						borderRadius: "20px",
					}}>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-evenly",
							fontSize: "20px",
						}}>
						<p>Goods{piece}</p>
						<p>{summa.toFixed(0)} com</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-evenly",
						}}>
						<h3 style={{ fontSize: "30px" }}>Total</h3>
						<h4>{summa.toFixed(0)} com</h4>
					</div>
					<div>
						<Button
							style={{ fontSize: "20px", height: "40px" }}
							type="primary"
							danger>
							Order
						</Button>
					</div>
					<p>
						{" "}
						✔I agree with the terms of use of the trading platform and return
					</p>
				</div>
			</div>
		</div>
	);
};
export default Cart;
