import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../store/goodsSlice";
import { Card, Button } from "antd";
import { addToCart } from "../store/cartSlice";
import { Space, Spin } from "antd";

const Goods = () => {
	const goods = useSelector(state => state.items.goods);
	const dispatch = useDispatch();
	console.log("goods: ", goods);
	useEffect(() => {
		dispatch(getItem());
	}, []);
	if (getItem.length === 0) {
		return (
			<Space>
				<Spin size="large" />
			</Space>
		);
	}
	return (
		<div
			style={{
				width: "1400px",
				height: "auto",
				background: "white",
				margin: "0 auto",
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "space-evenly",
			}}>
			{goods.map(el => (
				<Card
					data-aos="flip-left"
					className="blockCart"
					style={{
						width: 230,

						marginLeft: "20px",
						marginTop: "30px",
					}}
					cover={
						<img
							style={{ height: "220px", width: "230px" }}
							alt="example"
							src={el.image}
						/>
					}>
					<h5>{el.tittle}</h5>
					<h5 style={{ marginLeft: -20 }}>{el.price}com</h5>
					<p>{el.description.slice(2, 200)}</p>
					<Button onClick={() => dispatch(addToCart(el))} type="primary" ghost>
						Basket
					</Button>
				</Card>
			))}
		</div>
	);
};
export default Goods;
