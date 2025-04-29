import {Button, Typography} from "antd";
import React from "react";

const { Title } = Typography;

const lists = [{
    key: 0,
    url: "assets/package/1.jpg",
    title: "7 Nights Saadiyat",
    subTitle: "Offer from £899",
    description: "Saadiyat Golf Club is a prestigious golfing destination located on Saadiyat Island in Abu Dhabi, United Arab Emirates. It is renowned for its stunning ocean views, natural surroundings, and world-class golf facilities."
}, {
    key: 1,
    url: "assets/package/2.jpg",
    title: "7 Nights Abu Dhabi Gc",
    subTitle: "Offer from £899",
    description: "The championship course at Abu Dhabi Golf Club is renowned for hosting the annual Abu Dhabi HSBC Championship, part of the European Tour. Designed by Peter Harradine, the course offers a challenging and strategic layout with a desert-style design."
}, {
    key: 2,
    url: "assets/package/3.jpg",
    title: "5 Nights Yas Links",
    subTitle: "Offer from £899",
    description: "A highly regarded golfing destination located on Yas Island in Abu Dhabi, United Arab Emirates. It offers a unique and challenging golfing experience along with stunning views of the Arabian Gulf."
}, {
    key: 3,
    url: "assets/package/4.jpg",
    title: "7 Nights Emirates Faldo",
    subTitle: "Offer from £899",
    description: "Staying at: The 5 Star Faldo Hotel UAE, 3 Rounds, All Inclusive, Fantastic Upgrades Available!\n" +
        "The Faldo Course, designed by six-time Major champion Sir Nick Faldo, is another exceptional 18-hole course at Emirates Golf Club, It offers a distinct character with its desert-style design, challenging bunkers, and large greens.\n" +
        "Baud on 2 sharing"
}]

const Package = () => {
    return (
        <div className="package">
            {
                lists.map((item, index) => (
                    <div className="package-list" key={item.key} style={{backgroundImage: `url(${item.url})`}}>
                        <div className="package-list-left"/>
                        <div className="package-list-right">
                            <Title className="package-list-title">
                                {item.title}
                            </Title>
                            <Title className="package-list-subtitle">
                                {item.subTitle}
                            </Title>
                            <Title className="package-list-description">{item.description}</Title>
                            <Button shape="round" size="large" ghost style={{ marginTop: 16, textTransform: 'uppercase' }}>More Info</Button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Package;
