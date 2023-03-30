import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { AccountBookOutlined } from "@ant-design/icons";
import ReactFlagsSelect from "react-flags-select";
import { HomeOutlined } from "@ant-design/icons";
import { ShopOutlined } from "@ant-design/icons";
import { ShakeOutlined } from "@ant-design/icons";
import { SkinOutlined } from "@ant-design/icons";

import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const { Header: AntHeader } = Layout;

const Header = () => {
	const count = useSelector(state => state.cart.cart);
	const sum = count.reduce((sum, item) => sum + item.piece, 0);
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();
	const [select, setSelect] = useState("US");
	const [text, setText] = useState("");
	const onSelectFlag = countryCode => {
		console.log(countryCode);
		i18n.changeLanguage(countryCode);
		setSelect(countryCode);
	};
	const searchText = () => {};
	const menu = [
		{
			key: 1,
			label: (
				<div style={{ display: "flex" }}>
					<AccountBookOutlined style={{ fontSize: "20px", color: "yellow" }} />
					<h2
						style={{
							fontFamily: "sans-serif",
							color: "yellow",
							fontSize: "30px",
						}}>
						Categories
					</h2>
				</div>
			),
		},
		{
			key: 2,
			label: (
				<h5
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<HomeOutlined
						className="icon"
						style={{
							width: "45px",
							paddingTop: "8px",
							height: "45px",
							borderRadius: "50%",
							marginTop: "-10px",
							color: "#E7B10A",
							background: "yellow",

							fontSize: "25px",
						}}
					/>

					<Link style={{ color: "white" }} to="home">
						{t("Home")}
					</Link>
				</h5>
			),
		},
		{
			key: 3,
			label: (
				<h5
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<ShopOutlined
						className="icon"
						style={{
							width: "45px",
							height: "45px",
							borderRadius: "50%",
							marginTop: "-10px",
							paddingTop: "8px",
							background: "yellow",
							color: "green",

							fontSize: "25px",
						}}
					/>
					<Link style={{ color: "white" }} to="/home-items">
						Home-items
					</Link>
				</h5>
			),
		},
		{
			key: 4,
			label: (
				<h5
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<ShakeOutlined
						className="icon"
						style={{
							width: "45px",
							paddingTop: "8px",
							height: "45px",
							borderRadius: "50%",
							marginTop: "-10px",
							color: "grey",
							background: "yellow",

							fontSize: "25px",
						}}
					/>
					<Link style={{ color: "white" }} to="/accessories">
						Accessories
					</Link>
				</h5>
			),
		},
		{
			key: 5,
			label: (
				<h5
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<SkinOutlined
						style={{
							width: "45px",
							paddingTop: "8px",
							height: "45px",
							borderRadius: "50%",
							marginTop: "-10px",
							color: "#B3E5BE",
							background: "yellow",

							fontSize: "25px",
						}}
					/>
					<Link style={{ color: "white" }} to="/goods">
						Goods
					</Link>
				</h5>
			),
		},
		{
			key: 6,
			label: (
				<h5
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<p
						style={{
							position: "absolute",
							width: "20px",
							height: "25px",
							textAlign: "center",
							borderRadius: "50%",
							background: "yellow",
							marginLeft: "40px",
							color: "red",
							marginTop: "-20px",
						}}>
						{sum}
					</p>
					<ShoppingCartOutlined
						className="icon"
						style={{
							width: "45px",
							height: "45px",
							borderRadius: "50%",
							marginTop: "-10px",
							color: "red",

							fontSize: "25px",
							paddingTop: "8px",
							background: "yellow",
						}}
					/>
					<Link style={{ color: "red" }} to="/cart">
						Basket
					</Link>
				</h5>
			),
		},

		{
			key: 4,
			label: (
				<h3>
					<ReactFlagsSelect
						selected={select}
						onSelect={onSelectFlag}
						countries={["US", "RU", "KG"]}
						customLabels={{ US: "EN", RU: "RU", KG: "KG" }}
					/>
				</h3>
			),
		},
	];

	return (
		<div>
			<Layout style={{ alignItems: "center" }}>
				<AntHeader
					style={{
						backgroundImage: `url("https://oir.mobi/uploads/posts/2021-06/1623705607_1-oir_mobi-p-voskhod-solntsa-v-gorakh-priroda-krasivo-f-1.jpg")`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "cover",
						width: "1400px",
						height: "150px",
					}}>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
						<div>
							<h2 style={{ fontSize: "40px" }}>Shop</h2>
						</div>
						<div>
							<form>
								<input
									className="input"
									style={{
										paddingLeft: "20px",
										width: "500px",
										height: "43px",
										fontSize: "20px",
										borderRadius: "25px",
										// border: "2px solid yellow",
									}}
									type="text"
									placeholder="Search ..."
								/>
								<Button
									style={{
										width: "46px",
										height: "45px",
										fontSize: "20px",
										border: "2px solid yellow",
										position: "absolute",
										marginLeft: "-43px",
										marginTop: "7px",
										background: "yellow",
									}}
									shape="circle"
									icon={<SearchOutlined />}
								/>
							</form>
						</div>
						<div
							style={{
								width: "150px",
								height: "30px",
								background: "white",
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-evenly",
								marginTop: "50px",
							}}>
							<UserOutlined style={{ fontSize: "25px" }} />
						</div>
					</div>
					<div
						style={{
							marginTop: "-70px",
						}}>
						<Menu
							className="menu"
							style={{
								marginTop: "73px",
								height: "60px",

								width: "1300px",
							}}
							mode="horizontal"
							defaultSelectedKeys={["2"]}
							items={menu}
						/>
					</div>
				</AntHeader>
			</Layout>
			<Outlet />
		</div>
	);
};
export default Header;
