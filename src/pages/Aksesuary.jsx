import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "antd";
import { addToCart } from "../store/cartSlice";

const aksessItems = [
	{
		title: "Android Asus",
		image:
			"https://media.wired.com/photos/6362cded1341ae5cc2594c57/master/w_2400,h_1800,c_limit/ASUS-ROG-Phone-6-Gear.png",
		price: 18000,
		description: "lorem lorem",
		id: 1,
		piece: 1,
	},
	{
		title: "Galaxy S23",
		image:
			"https://i5.walmartimages.com/dfw/4ff9c6c9-8b8c/k2-_99d4f7c2-814c-47ea-a05d-2dbcf50bc85a.v1.png?odnHeight=340&odnWidth=604&odnBg=FFFFFF",
		price: 30000,
		description: "lorem lorem",
		id: 2,
		piece: 1,
	},
	{
		title: "Galaxy S20",
		image:
			"https://www.zdnet.com/a/img/resize/edd1564de0ab869e5f7fa3be23a7e15360e336c7/2023/02/09/02d1a507-cea7-4651-9a91-80ece88a0eec/samsung-galaxy-s23-ultra-hero.jpg?auto=webp&fit=crop&height=900&width=1200",
		price: 30000,
		description: "lorem lorem",
		id: 3,
		piece: 1,
	},
	{
		title: "Iphone 12",
		image:
			"https://www.att.com/idpassets/sales/uf/brand/samsung/2023-diamond/ga/wireless-deals/1517166-Animated-Multi-Tile-iPhone14-retina.png",
		price: 50000,
		description: "lorem lorem",
		id: 4,
		piece: 1,
	},
	{
		title: "Air pots",
		image:
			"https://telefon.kg/image/cache/catalog/new/Aksessuary/Hoco/Naushniki/S11/1-228x228.jpeg",
		price: 1500,
		description: "lorem lorem",
		id: 5,
		piece: 1,
	},
	{
		title: "Iphon-Apple",
		image:
			"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
		price: 100000,
		description: "lorem lorem",
		id: 6,
		piece: 1,
	},
	{
		title: "Air Pots rx5",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAI-LjodpkDPR9GdYIMX4PIaKmIKTiZd8ZUnrVDzbPNJJIYGD2ZCYCkn_M0CvPfczuEA&usqp=CAU",
		price: 2000,
		description: "lorem lorem ",
		id: 7,
		piece: 1,
	},
	{
		title: "Apple Air",
		image: "https://istore.kg/media/products/AirPods-Max-Blue.webp",
		price: 5000,
		description: "lorem lorem ",
		id: 8,
		piece: 1,
	},
	{
		title: "Air pods Pro",
		image:
			"https://hips.hearstapps.com/hmg-prod/images/airpods-pro-2022-1663797595.jpg?crop=0.5xw:1xh;center,top&resize=1200:*",
		price: 4000,
		description: "lorem lorem lorem",
		id: 9,
		piece: 1,
	},
	{
		title: "Selfi lampa",
		image: "https://www.horeca.lighting/img/tovar/SL/SL-RL-14a.jpg",
		price: 200,
		description: "lorem lorem lorem",
		id: 10,
		piece: 1,
	},
	{
		title: "Shtatif",
		image: "https://ae04.alicdn.com/kf/H96d88568d56240dfae27e338f623931fI.jpg",
		price: 1000,
		description: "loremm lorem lorem",
		id: 11,
		piece: 1,
	},
	{
		title: "Kalonka",
		image:
			"https://images.prom.ua/1801115767_w640_h640_blutuz-akustika-kalonka.jpg",
		price: 3000,
		description: "lorem lorem lorem",
		id: 12,
		piece: 1,
	},
	{
		title: "Xiomi Redmi",
		image:
			"https://softech.kg/image/cache/86ac018c4786731ddebb8fd5ebfc7d0b.jpg",
		price: 2000,
		description: "lorem lorem lorem",
		id: 13,
		piece: 1,
	},
	{
		title: "Samsung Galaxy",
		image:
			"https://login.kg/image/cache/catalog/new/Planshety/Samsung/Galaxy%20Tab%20S8%20Ultra/samsung-galaxy-tab-s8-ultra-1-500x500.jpg",
		price: 25000,
		description: "lorem lorem lorem",
		id: 14,
		piece: 1,
	},
	{
		title: "Samsung",
		image:
			"https://www.ixbt.com/img/n1/news/2021/4/0/E2D-exFXsAcga_9_large.jpeg",
		price: 30000,
		description: "lorem lorem lorem",
		id: 15,
		piece: 1,
	},
	{
		title: "Acer",
		image:
			"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7",
		price: 50000,
		description: "lorem lorem lorem",
		id: 16,
		piece: 1,
	},
	{
		title: "Acer Pro",
		image:
			"https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg",
		price: 70000,
		description: "lorem lorem lorem",
		id: 17,
		piece: 1,
	},
	{
		title: "XUAWEI",
		image:
			"https://consumer.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/plp/laptops/img/img-0914/kv.jpg",
		price: 90000,
		description: "lorem lorem lorem",
		id: 18,
		piece: 1,
	},
	{
		title: "Acer",
		image:
			"https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg",
		price: 60000,
		description: "lorem lorem lorem",
		id: 19,
		piece: 1,
	},
	{
		title: "Galaxy ss",
		image:
			"http://images.summitmedia-digital.com/spotph/images/2022/06/30/guide-to-everyhing-laptop-640-1656580338.jpg",
		price: 70000,
		description: "lorem lorem lorem",
		id: 20,
		piece: 1,
	},
	{
		title: "ASUS",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYjiul22TZ4q8R3Ehce4jeEmzdQ5Br2ODbg&usqp=CAU",
		price: 120000,
		description: "lorem lorem lorem",
		id: 21,
		piece: 1,
	},
	{
		title: "Smart watch",
		image: "https://m.media-amazon.com/images/I/515BNisImJL._SL1000_.jpg",
		price: 2000,
		description: "lorem lorem lorem",
		id: 22,
		piece: 1,
	},
	{
		title: "Noise Colorfit ",
		image:
			"https://cdn.shopify.com/s/files/1/0997/6284/files/nav-noise-colorfit-loop-smartwatch.png?v=18114716816441478335",
		price: 3000,
		description: "lorem lorem lorem",
		id: 23,
		piece: 1,
	},
	{
		title: "Smart Baby watch",
		image:
			"https://login.kg/image/catalog/demo/product/Accessuars/SMART%20Watch/Q60/smart-baby-watch-q60_01.jpg",
		price: 4000,
		description: "lorem lorem lorem",
		id: 24,
		piece: 1,
	},
	{
		title: "MI band",
		image:
			"https://mistore.kg/wp-content/uploads/2023/01/xiaomi-xiaomi-mi-band-7-european-version.jpg",
		price: 2000,
		description: "lorem lorem lorem",
		id: 25,
		piece: 1,
	},
	{
		title: "Mi bads pro",
		image:
			"https://softech.kg/image/catalog/Products/Acsessuary/Umnye%20broslety/Mi%20Band%207/17%D1%84.jpg",
		price: 3000,
		description: "lorem lorem lorem",
		id: 26,
		piece: 1,
	},
	{
		title: "Smart TV",
		image:
			"https://www.lg.com/in/images/tvs/md07554883/gallery/55UQ7500PSF-D-2.jpg",
		price: 30000,
		description: "lorem lorem lorem",
		id: 27,
		piece: 1,
	},
	{
		title: "Sumsung",
		image:
			"https://media.4rgos.it/i/Argos/4021-m0014-m007-m050-asym-m008-m022-tv-buying-guide-header?maxW=768&bg=rgb(255,255,255)&qlt=75&fmt.jpeg.interlaced=true",
		price: 50000,
		description: "lorem lorem lorem",
		id: 28,
		piece: 1,
	},
	{
		title: "Smart led TV LE2323",
		image:
			"https://hnsfpau.imgix.net/5/images/detailed/225/KDG32XE665AN2-B_1.jpg?fit=fill&bg=0FFF&w=1500&h=844&auto=format,compress",
		price: 100000,
		description: "lorem lorem lorem",
		id: 29,
		piece: 1,
	},
	{
		title: "SM TV Pro",
		image:
			"https://www.bajajfinserv.in/Image_QLED_TV_2_QLED_354x202_desktop.jpg",
		price: 80000,
		description: "lorem lorem lorem",
		id: 30,
		piece: 1,
	},
];
const Aksesuary = () => {
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
				{aksessItems.map(item => (
					<div>
						<Card
							data-aos="flip-right"
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
							<h5 style={{ marginLeft: -20 }}>{item.price}</h5>
							<p>{item.description}</p>
							<Button
								onClick={() => dispatch(addToCart(item))}
								type="primary"
								ghost>
								Baske
							</Button>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
};
export default Aksesuary;
