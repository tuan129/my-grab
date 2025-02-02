import { Drawer } from "antd";
import "./CSS.css";
import Words from "./Words";
import { Checkbox } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import add from "../images/add.png"
function Compre() {
    // drawer
    const [visible, setVisible] = useState(false);
    //checkbox
    const onChange = (checkedValues) => {
        console.log("checked = ", checkedValues);
    };
    const options = [
        {
            label: "Thêm 1 miếng gà không cay",
            value: "1",
            price: "31.000",
        },
        {
            label: "4 miếng gà Nuggets và xốt BBQ",
            value: "2",
            price: "31.000",
        },
        {
            label: "Thêm 1 miếng gà cay",
            value: "3",
            price: "31.000",
        },
        {
            label: "Khoai tây chiên",
            value: "4",
            price: "",
        },
        {
            label: "Bắp ngô tách hạt",
            value: "5",
            price: "",
        },
        {
            label: "Xà lách xắt",
            value: "6",
            price: "",
        },
        {
            label: "Tắc Muối Mơ Ngâm Hạt Chia cỡ V",
            value: "7",
            price: "14.000",
        },
        {
            label: "Coca-Cola Cỡ Lớn",
            value: "8",
            price: "5.000",
        },
        {
            label: "Cà Phê Sữa Đá Cỡ Vừa",
            value: "9",
            price: "8.000",
        },
        {
            label: "Americano Đá Viên Cỡ Vừa",
            value: "10",
            price: "18.000",
        },
        {
            label: "Sữa Chua Uống Dâu Tây",
            value: "11",
            price: "44.000",
        },
        {
            label: "Matcha Đá Viên Cỡ Lớn",
            value: "12",
            price: "58.000",
        },
        {
            label: "Americano Nóng Cỡ Nhỏ",
            value: "13",
            price: "18.000",
        },
    ];
    return (
        <>
            <div className="container-detail">
                <div
                    className="container-sm container-compre"
                    style={{ height: "350px" }}
                >
                    <div className="container-sm">
                        {/* nav */}
                        <nav
                            style={{
                                marginLeft: "20px",
                                marginTop: "30px",
                                "--bs-breadcrumb-divider": 'url("src/assets/icon-next.svg")',
                            }}
                            aria-label="breadcrumb"
                        >
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={"/"}
                                        style={{ textDecoration: "none", color: "#00a5cf" }}
                                    >
                                        Trang chủ{" "}
                                        <img
                                            src="https://food.grab.com/static/images/icons/icon-next.svg"
                                            style={{ width: "10px", marginTop: "-3px" }}
                                        ></img>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to={"/Detail"}
                                        style={{ textDecoration: "none", color: "#00a5cf" }}
                                        href="#"
                                    >
                                        Nhà hàng{" "}
                                        <img
                                            src="https://food.grab.com/static/images/icons/icon-next.svg"
                                            style={{ width: "10px", marginTop: "-3px" }}
                                        ></img>
                                    </Link>
                                </li>
                                <li
                                    style={{ color: "black" }}
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    McDonald - Hồ Gươm
                                </li>
                            </ol>
                        </nav>
                        <div className="card-compre" style={{ marginLeft: "20px" }}>
                            <h1 style={{ fontWeight: "650" }}> McDonald - Hồ Gươm</h1>
                            <p className="card-text">Gà Rán - Burger, Món Quốc Tế</p>

                            <img
                                className="span-star"
                                src="	https://food.grab.com/static/images/icons/icon-star.svg"
                            ></img>
                            <span className="card-text span-card">4.3</span>
                            <span className="card-text span-clock">
                                <img
                                    src="https://food.grab.com/static/images/icons/icon-clock.svg"
                                    alt=""
                                    srcSet=""
                                />
                                <span className="card-text span-card">30 phút</span>
                                <span className="card-text span-clock">•</span>
                                <span className="card-text span-card">2km</span>
                            </span>
                            <div
                                className="open-hour"
                                style={{ marginTop: "10px", marginBottom: "10px" }}
                            >
                                <span style={{ marginRight: "20px" }}>Giờ mở cửa</span>
                                <span>Hôm nay 07:00-22:50</span>
                            </div>
                            <p className="card-text">
                                <small className="text-body-secondary">
                                    <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"></img>
                                    <span className="card-text span-card">
                                        🔥50K off, Combo Trưa Chỉ 40K
                                    </span>
                                    <span
                                        style={{
                                            fontWeight: "650",
                                            color: "#00a5cf",
                                            marginLeft: "20px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Xem chi tiết
                                    </span>
                                </small>
                            </p>
                        </div>
                    </div>
                    {/* slide */}
                </div>
                <div className="border-top"></div>
                <div
                    className="container-max-compre"
                    style={{ backgroundColor: "#f7f7f7" }}
                >
                    {/* best seller */}
                    <div
                        className="container-sm container-compre"
                        style={{ height: "800px" }}
                    >
                        <Words words={"Best Seller"}></Words>
                        {/* on click drawer */}

                        <div
                            className="row row-cols-1 row-cols-md-3 g-4"
                            onClick={() => {
                                setVisible(true);
                            }}
                        >
                            <div className="col">
                                <div
                                    className="card"
                                    style={{ width: "385px", height: "220px" }}
                                >
                                    {/* Nội dung thẻ card */}
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                style={{ margin: "15px" }}
                                                src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                                                className="card-img"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body" style={{ marginLeft: "15px" }}>
                                                <p
                                                    className="card-title"
                                                    style={{ fontWeight: "400", fontSize: "16px" }}
                                                >
                                                    Combo 2 người - C
                                                </p>

                                                <p
                                                    className="card-text"
                                                    style={{ color: "#9a9a9a", fontSize: "15px" }}
                                                >
                                                    Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                                                    bao gồm 2x Tương Cà
                                                </p>
                                                <p style={{ fontWeight: "500", width: "80px" }}>
                                                    119.000
                                                </p>
                                                <img
                                                    className="add-button"
                                                    src={add}
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card"
                                    style={{ width: "385px", height: "220px" }}
                                >
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                style={{ margin: "15px" }}
                                                src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                                                className="card-img"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body" style={{ marginLeft: "15px" }}>
                                                <p
                                                    className="card-title"
                                                    style={{ fontWeight: "400", fontSize: "16px" }}
                                                >
                                                    Combo 2 người - C
                                                </p>

                                                <p
                                                    className="card-text"
                                                    style={{ color: "#9a9a9a", fontSize: "15px" }}
                                                >
                                                    Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                                                    bao gồm 2x Tương Cà
                                                </p>
                                                <p style={{ fontWeight: "500" }}>119.000</p>
                                                <img
                                                    className="add-button"
                                                    src={add}
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card"
                                    style={{ width: "385px", height: "220px" }}
                                >
                                    {/* Nội dung thẻ card */}
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                style={{ margin: "15px" }}
                                                src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                                                className="card-img"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body" style={{ marginLeft: "15px" }}>
                                                <p
                                                    className="card-title"
                                                    style={{ fontWeight: "400", fontSize: "16px" }}
                                                >
                                                    Combo 2 người - C
                                                </p>

                                                <p
                                                    className="card-text"
                                                    style={{ color: "#9a9a9a", fontSize: "15px" }}
                                                >
                                                    Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                                                    bao gồm 2x Tương Cà
                                                </p>
                                                <p style={{ fontWeight: "500" }}>119.000</p>
                                                <img
                                                    className="add-button"
                                                    src={add}
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card"
                                    style={{ width: "385px", height: "220px" }}
                                >
                                    {/* Nội dung thẻ card */}
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                style={{ margin: "15px" }}
                                                src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                                                className="card-img"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body" style={{ marginLeft: "15px" }}>
                                                <p
                                                    className="card-title"
                                                    style={{ fontWeight: "400", fontSize: "16px" }}
                                                >
                                                    Combo 2 người - C
                                                </p>

                                                <p
                                                    className="card-text"
                                                    style={{ color: "#9a9a9a", fontSize: "15px" }}
                                                >
                                                    Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                                                    bao gồm 2x Tương Cà
                                                </p>
                                                <p style={{ fontWeight: "500" }}>119.000</p>
                                                <img
                                                    className="add-button"
                                                    src={add}
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    className="card"
                                    style={{ width: "385px", height: "220px" }}
                                >
                                    {/* Nội dung thẻ card */}
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                style={{ margin: "15px" }}
                                                src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                                                className="card-img"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body" style={{ marginLeft: "15px" }}>
                                                <p
                                                    className="card-title"
                                                    style={{ fontWeight: "400", fontSize: "16px" }}
                                                >
                                                    Combo 2 người - C
                                                </p>

                                                <p
                                                    className="card-text"
                                                    style={{ color: "#9a9a9a", fontSize: "15px" }}
                                                >
                                                    Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                                                    bao gồm 2x Tương Cà
                                                </p>
                                                <p style={{ fontWeight: "500" }}>119.000</p>
                                                <img
                                                    className="add-button"
                                                    src={add}
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="card"
                                    style={{ width: "385px", height: "220px" }}
                                >
                                    {/* Nội dung thẻ card */}
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                style={{ margin: "15px" }}
                                                src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                                                className="card-img"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body" style={{ marginLeft: "15px" }}>
                                                <p
                                                    className="card-title"
                                                    style={{ fontWeight: "400", fontSize: "16px" }}
                                                >
                                                    Combo 2 người - C
                                                </p>

                                                <p
                                                    className="card-text"
                                                    style={{ color: "#9a9a9a", fontSize: "15px" }}
                                                >
                                                    Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã
                                                    bao gồm 2x Tương Cà
                                                </p>
                                                <p style={{ fontWeight: "500" }}>119.000</p>
                                                <img
                                                    className="add-button"
                                                    src={add}
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* more card */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Drawer */}
            <div>
                <Drawer
                    visible={visible}
                    footer={
                        <button
                            className="btn btn-success"
                            style={{ color: "white", backgroundColor: "#00B14F", float: "right", borderColor: "transparent" }}
                        >
                            Add to basket - 119.000 đ
                        </button>
                    }
                    onClose={() => {
                        setVisible(false);
                    }}
                    width={500}
                >
                    <div
                        className="card border-0"
                        style={{ width: "385px", height: "150px" }}
                    >
                        {/* Nội dung thẻ card */}
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    style={{ margin: "15px" }}
                                    src="https://media1.nguoiduatin.vn/media/vuong-thi-thao/2017/11/28/mds05c.JPG"
                                    className="card-img"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p
                                        className="card-title"
                                        style={{ fontWeight: "400", fontSize: "16px" }}
                                    >
                                        Combo 2 người - C
                                    </p>

                                    <p
                                        className="card-text"
                                        style={{ color: "#9a9a9a", fontSize: "15px" }}
                                    >
                                        Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã bao gồm
                                        2x Tương Cà
                                    </p>
                                    <p
                                        style={{
                                            fontWeight: "500",
                                            width: "80px",
                                            marginTop: "-10px",
                                        }}
                                    >
                                        119.000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider-detail" style={{ width: "100%" }}></div>

                    <div className="body-drawer" style={{ height: "95%" }}>
                        {/* padding */}
                        <div className="container-checkbox" style={{ padding: "24px" }}>
                            {/* Checkbox */}
                            <h5 style={{ fontWeight: "600" }}>Thêm Món Thêm Ngon</h5>
                            <div className="wrap-checkbox">
                                {/* value 1 2 3 */}
                                {options
                                    .filter((option) => ["1", "2", "3"].includes(option.value))
                                    .map((option) => (
                                        <div key={option.value} className="checkbox-option">
                                            <Checkbox value={option.value}>
                                                <div className="inputContent">
                                                    <span className="label">{option.label}</span>
                                                </div>
                                            </Checkbox>
                                            <span className="price">{option.price} đ</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="divider-detail" style={{ width: "100%" }}></div>
                        <div className="container-checkbox" style={{ padding: "24px" }}>
                            <h5 style={{ fontWeight: "600" }}>Chọn món ăn kèm</h5>
                            <div className="wrap-checkbox">
                                {options
                                    .filter((option) => ["4", "5", "6"].includes(option.value))
                                    .map((option) => (
                                        <div key={option.value} className="checkbox-option">
                                            <Checkbox value={option.value}>
                                                <div className="inputContent">
                                                    <span className="label">{option.label}</span>
                                                </div>
                                            </Checkbox>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        {/*  */}
                        <div className="divider-detail" style={{ width: "100%" }}></div>
                        <div className="container-checkbox" style={{ padding: "24px" }}>
                            <h5 style={{ fontWeight: "600" }}>Chọn nước</h5>
                            <div className="wrap-checkbox">
                                {options
                                    .filter((option) => ["7", "8", "9", "10", "11", "12"].includes(option.value))
                                    .map((option) => (
                                        <div key={option.value} className="checkbox-option">
                                            <Checkbox value={option.value}>
                                                <div className="inputContent">
                                                    <span className="label">{option.label}</span>
                                                </div>
                                            </Checkbox>
                                            <span className="price">{option.price}đ</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="divider-detail" style={{ width: "100%" }}></div>
                    </div>
                </Drawer>
            </div>
        </>
    );
}
export default Compre;