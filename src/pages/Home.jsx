import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { getGoods } from "../store/homeSlice";

import { Card, Button } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const goods = useSelector(state => state.product.products);
	const navigate = useNavigate();
	console.log("goods: ", goods);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getGoods());
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}>
			<div
				style={{
					width: "1400px",
					height: "360px",
					background: "#ecf2ff",
					margin: "0 auto",
				}}>
				<Carousel
					style={{
						width: "1220px",
						height: "300px",

						margin: "0 auto",
						position: "relative",
						marginTop: "30px",
					}}>
					<Carousel.Item>
						<img
							width={1220}
							height={300}
							style={{ borderRadius: "30px" }}
							className="d-block w-100"
							src="https://reviewed-com-res.cloudinary.com/image/fetch/s--JSasK8g1--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_xy_center,q_auto,w_1200,x_1651,y_2005/https://reviewed-production.s3.amazonaws.com/1557334966467/Amazon-Echo-Devices-Hero-Amazon.jpg"
							alt="First slide"
						/>
						{/* <Carousel.Caption>
							
						</Carousel.Caption> */}
					</Carousel.Item>
					<Carousel.Item>
						<img
							width={1220}
							height={300}
							style={{ borderRadius: "30px" }}
							className="d-block w-100"
							src="https://voicebot.ai/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							width={1220}
							height={300}
							style={{ borderRadius: "30px" }}
							className="d-block w-100"
							src="https://hips.hearstapps.com/hmg-prod/images/gh-040720-best-products-1586369359.png?resize=1200:*"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>
			<div className="blockProduct">
				<div>
					<h3
						style={{
							fontSize: "30px",

							marginTop: "50px",
							marginBottom: "40px",
							marginLeft: "30px",
						}}>
						Bestsellers
					</h3>
				</div>

				<div data-aos="zoom-in" className="carddiv">
					<Card
						onClick={() => navigate("/home-items")}
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000"
						hoverable
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://mebel-7ja.ru/image/cache/catalog/PhotoRoom_20211017_061904-1000x1000-1000x1000.png"
							/>
						}>
						<h5 style={{ marginLeft: -20 }}>Sofa MMP</h5>
						<h5 style={{ marginLeft: -20 }}>20 000сом</h5>
						<p>Sofa fot home ,office and ....</p>
					</Card>
					<Card
						onClick={() => navigate("/home-items")}
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000"
						hoverable
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://miralls.ru/wp-content/uploads/2022/05/Zerkalnyj-shkaf-v-vannuyu-komnatu-Rikki-Plus-2-min.jpg"
							/>
						}>
						<h5>Mirror</h5>
						<h5 style={{ marginLeft: -20 }}>10 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/accessories")}
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000"
						hoverable
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://telefon.kg/image/cache/catalog/new/Aksessuary/Hoco/Naushniki/S11/1-228x228.jpeg"
							/>
						}>
						<h5>Air Pots</h5>
						<h5 style={{ marginLeft: -20 }}>1 500сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/accessories")}
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000"
						hoverable
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
							/>
						}>
						<h5>Iphon-Apple</h5>
						<h5 style={{ marginLeft: -20 }}>100 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/home-items")}
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000"
						hoverable
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://roomsee.ru/assets/images/products/13452/divan-krovat-edinburgh-zelenyij-5.jpg"
							/>
						}>
						<h5 style={{ marginLeft: -20 }}>Sofa RRP</h5>
						<h5 style={{ marginLeft: -20 }}>30 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/home-items")}
						data-aos="flip-left"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqSDgteUmu6Uq-t7_JfvQmsogieocxdjM4g&usqp=CAU"
							/>
						}>
						<h5>Mirror</h5>
						<h5 style={{ marginLeft: -20 }}>15 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/accessories")}
						data-aos="flip-left"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAI-LjodpkDPR9GdYIMX4PIaKmIKTiZd8ZUnrVDzbPNJJIYGD2ZCYCkn_M0CvPfczuEA&usqp=CAU"
							/>
						}>
						<h5>Air Pots rx5</h5>
						<h5 style={{ marginLeft: -20 }}>2 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/goods")}
						data-aos="flip-left"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://pyxis.nymag.com/v1/imgs/388/d38/354c0c92873c5ac7435114b25dd164169c-weekender-bags.jpg"
							/>
						}>
						<h5>New Bag</h5>
						<h5 style={{ marginLeft: -20 }}>2000,2200,800,сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/home-items")}
						data-aos="flip-left"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://novamebel.kg/wp-content/uploads/2019/08/5c9f33ffb7969.jpg"
							/>
						}>
						<h5 style={{ marginLeft: -20 }}>Sofa MMP</h5>
						<h5 style={{ marginLeft: -20 }}>35 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/accessories")}
						data-aos="flip-left"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://lt2.pigugroup.eu/colours/682/968/69/68296869/techancy-bts-51-ed7c5-kaina_large.jpg"
							/>
						}>
						<h5>Air Pots rr</h5>
						<h5 style={{ marginLeft: -20 }}>3 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/goods")}
						data-aos="flip-up"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PV522v-I5wstO7EdvG4hlzqggLfnyzAWan9pOVCLU7sa8GTCUIQZl3RdCyqzqJiPmVM&usqp=CAU"
							/>
						}>
						<h5>Bag for boy</h5>
						<h5 style={{ marginLeft: -20 }}>500сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/goods")}
						data-aos="flip-up"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://ixbt.online/live/images/original/00/96/98/2021/09/18/6569a71787.jpg"
							/>
						}>
						<h5>Boods</h5>
						<h5 style={{ marginLeft: -20 }}>2 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/accessories")}
						data-aos="flip-up"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OXzi?ver=3a58"
							/>
						}>
						<h5>Poco</h5>
						<h5 style={{ marginLeft: -20 }}>80 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/accessories")}
						data-aos="flip-up"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India-1200x675.jpg"
							/>
						}>
						<h5>MI Laptop</h5>
						<h5 style={{ marginLeft: -20 }}>100 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/accessories")}
						data-aos="flip-up"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-18068,msid-88453753/vivo-s12-series.jpg"
							/>
						}>
						<h5>Vivo</h5>
						<h5 style={{ marginLeft: -20 }}>100 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/home-items")}
						data-aos="fade-right"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://tefal.ee/media/cache/show_main/6b/cb/a0a617aeabef2638407eb7811216.png"
							/>
						}>
						<h5>Tefal Turbo Cuisine</h5>
						<h5 style={{ marginLeft: -20 }}>200сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/home-items")}
						data-aos="fade-right"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://cdn.lifehacker.ru/wp-content/uploads/2016/05/SHablon-kollazheJ-dlya-Mancave-kopiya-2020-03-10T161933.705_1583842795-630x315.jpg"
							/>
						}>
						<h5 style={{ marginLeft: -20 }}>200сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/home-items")}
						data-aos="flip-up"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://ir.ozone.ru/s3/multimedia-o/c1000/6524954292.jpg"
							/>
						}>
						<h5 style={{ marginLeft: -20 }}>Tefal</h5>
						<h5 style={{ marginLeft: -20 }}>200сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/home-items")}
						data-aos="fade-left"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://img5.lalafo.com/i/posters/api/63/5b/fa/427a0ad3f4fa8487fce0f37701.jpeg"
							/>
						}>
						<h5 style={{ marginLeft: -20 }}>Tefal mR5</h5>
						<h5 style={{ marginLeft: -20 }}>200сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
					<Card
						onClick={() => navigate("/home-items")}
						data-aos="fade-left"
						className="blockCart"
						style={{
							width: 230,
						}}
						cover={
							<img
								style={{ height: "220px", width: "230px" }}
								alt="example"
								src="https://4tololo.ru/sites/default/files/images/201421012009549655.jpg?itok=1o_x_LeH"
							/>
						}>
						<h5 style={{ marginLeft: -20 }}>Frying pan</h5>
						<h5 style={{ marginLeft: -20 }}>2 000сом</h5>
						<p>lorem lorem lorem</p>
					</Card>
				</div>
			</div>
		</div>
	);
};
export default Home;
