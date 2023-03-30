import React from "react";
import { Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const itemState = [
	{
		title: "Sofa MMR",
		price: 20000,
		image:
			"https://mebel-7ja.ru/image/cache/catalog/PhotoRoom_20211017_061904-1000x1000-1000x1000.png",
		description: "lorem lorem lorem lorem",
		id: 1,
		piece: 1,
	},
	{
		title: "Mirror",
		price: 10000,
		image:
			"https://miralls.ru/wp-content/uploads/2022/05/Zerkalnyj-shkaf-v-vannuyu-komnatu-Rikki-Plus-2-min.jpg",
		description: "lorem lorem lorem ",
		id: 2,
		piece: 1,
	},
	{
		title: "Sofa RRP",
		price: 30000,
		image:
			"https://roomsee.ru/assets/images/products/13452/divan-krovat-edinburgh-zelenyij-5.jpg",
		description: "lorem lorem lorem ",
		id: 3,
		piece: 1,
	},
	{
		title: "Mirror",
		price: 15000,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqSDgteUmu6Uq-t7_JfvQmsogieocxdjM4g&usqp=CAU",
		description: "lorem lorem lorem",
		id: 4,
		piece: 1,
	},
	{
		title: "Mirror ff",
		price: 4000,
		image:
			"https://cdn.shopify.com/s/files/1/0263/1899/5504/products/circularedgeledwhitelight0101.jpg?v=1655387952",
		description: "lorem lorem lorem ",
		id: 5,
		piece: 1,
	},
	{
		title: "Tefal food",
		price: 3000,
		image:
			"https://www.ubuy.dk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFzV3RCVVlqZUwuX0FDX1NMMTUwMF8uanBn.jpg",
		description: "lorem lorem lorem",
		id: 6,
		piece: 1,
	},
	{
		title: "Robot tefal ",
		price: 4000,
		image:
			"https://images.immediate.co.uk/production/volatile/sites/30/2022/05/tefal-pressure-cooker-thumbnail-6e61392.png",
		description: "lorem lorem lorem",
		id: 7,
		piece: 1,
	},
	{
		title: "Vacuum cleaner",
		price: 5000,
		image:
			"https://avatars.mds.yandex.net/get-mpic/5229883/img_id8622579291030974449.jpeg/orig",
		description: "lorem lorem lorem ",
		id: 8,
		piece: 1,
	},
	{
		title: "Asaxy",
		price: 2000,
		image:
			"https://assets.asaxiy.uz/product/items/desktop/96a3be3cf272e017046d1b2674a52bd32022112913135166933K3jB9zfCXe.jpg.webp",
		description: "lorem lorem lorem",
		id: 9,
		piece: 1,
	},
	{
		title: "Tefal Minipro",
		price: 3000,
		image:
			"https://www.trustedreviews.com/wp-content/uploads/sites/54/2017/10/Tefal-Minipro-Chopper_6.jpg",
		description: "lorem lorem lorem",
		id: 10,
		piece: 1,
	},
	{
		title: "Tefal easy frea",
		price: 5000,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32yi2FbdUZ0q2WcngAznuNfeC2OYAIo7vMLntwFP-fHC3I_10CGxegK6R_5n6OHC_ICU&usqp=CAU",
		description: "lorem lorem lorem",
		id: 11,
		piece: 1,
	},
	{
		title: "Tefal Minipro",
		price: 3000,
		image:
			"https://www.trustedreviews.com/wp-content/uploads/sites/54/2017/10/Tefal-Minipro-Chopper_6.jpg",
		description: "lorem lorem lorem",
		id: 12,
		piece: 1,
	},
	{
		title: "Tefal Smart",
		price: 10000,
		image:
			"https://static.mvideo.ru/media/Promotions/Promo_Page/2020/June/obzor-tefal-smart-and-light/obzor-tefal-smart-and-light-top1-m.png",
		description: "lorem lorem lorem",
		id: 13,
		piece: 1,
	},
	{
		title: "Tefal easy frea",
		price: 5000,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32yi2FbdUZ0q2WcngAznuNfeC2OYAIo7vMLntwFP-fHC3I_10CGxegK6R_5n6OHC_ICU&usqp=CAU",
		description: "lorem lorem lorem",
		id: 14,
		piece: 1,
	},
	{
		title: "Vacuum Cleaner",
		price: 4000,
		image:
			"https://www.thespruce.com/thmb/8MsBLc-N7vx7spQPEqeWmlwbrNk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-clean-a-vacuum-4788316_03-d57d88e2089d4fb5b452fa0a841a6d8b.jpg",
		id: 15,
		piece: 1,
	},
	{
		title: "Tefal easy frea",
		price: 5000,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32yi2FbdUZ0q2WcngAznuNfeC2OYAIo7vMLntwFP-fHC3I_10CGxegK6R_5n6OHC_ICU&usqp=CAU",
		description: "lorem lorem lorem",
		id: 16,
		piece: 1,
	},
	{
		title: "Vacuum robot",
		price: 3000,
		image:
			"https://cdn.shopify.com/s/files/1/0397/4846/8889/products/ahvc-6178---1_2.jpg?v=1643183667",
		id: 17,
		piece: 1,
	},

	{
		title: "Asaxy",
		price: "2 000 com",
		image:
			"https://assets.asaxiy.uz/product/items/desktop/96a3be3cf272e017046d1b2674a52bd32022112913135166933K3jB9zfCXe.jpg.webp",
		description: "lorem lorem lorem",
		id: 18,
		piece: 1,
	},
	{
		title: "Tefal Minipro",
		price: 3000,
		image:
			"https://www.trustedreviews.com/wp-content/uploads/sites/54/2017/10/Tefal-Minipro-Chopper_6.jpg",
		description: "lorem lorem lorem",
		id: 19,
		piece: 1,
	},
	{
		title: "Tefal rr",
		price: 400,
		image:
			"https://static.onlinetrade.ru/img/items/b/chaynik_tefal_ko_206410_2401346_8.jpg",
		description: "lorem lorem ",
		id: 20,
		piece: 1,
	},
];

const Home_items = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<div
				style={{
					width: "1400px",
					background: "white",
					height: "auto",
					margin: "0 auto",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					gap: "20px",
					alignItems: "center",
				}}>
				{itemState.map(item => (
					<div style={{ display: "flex" }}>
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
									src={item.image}
								/>
							}>
							<h5>{item.title}</h5>
							<h5 style={{ marginLeft: -20 }}>{item.price}com</h5>
							<p>{item.description}</p>
							<Button
								onClick={() => dispatch(addToCart(item))}
								type="primary"
								ghost>
								Basket
							</Button>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
};
export default Home_items;
