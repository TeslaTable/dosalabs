import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    const [selectMenu, setSelectMenu] = useState(0)
    const [popUpShow, setPopupShow] = useState()
    const menuItem = [
        {
            name: "STARTERS",
            icon: "sausages",
            // content: "4 oz, for those love a meal with their dip",
            item: [
                {
                    image: "P23",
                    name: "Samosa (2)",
                    content: "Two homemade pastries filled with potatoes, onions and green peas. Fried to perfection served with mint sauce and house sauce",
                    price: '8',
                    slug: "samosa"
                },
                {
                    image: "P26",
                    name: "Paratha Melt",
                    content: "Two parathas stuffed with mozzarella cheese, fresh jalapenos, touch of tikka masala and served with tikka masala sauce. Add chicken extra for $3",
                    price: '9',
                    slug: "austin-anarkali"
                },
                {
                    image: "P24",
                    name: "Chicken Tikka Nacho",
                    content: "Freshly made to order corn chips topped with cheddar, jack and mozzarella cheese. Chicken tikka masala sauce, pico de Gallo and yogurt sauce",
                    price: '15',
                    slug: "dosa-taco"
                },
                {
                    image: "P23",
                    name: "Dhokla",
                    content: "Healthy and nutritious dhokla made of Fermented gram flour and yogurt batter steamed until it is fluffy and delicious, served with mint sauce",
                    price: '8',
                    slug: "samosa"
                },
                {
                    image: "P23",
                    name: "Chicken Saag Naan Pizza",
                    content: "Naan topped with saag sauce mozzarella cheese, chicken, fresh jalapeno, onion, tomato, pepperoncini and baked to perfection",
                    price: '12',
                    slug: "samosa"
                },
            ]
        },
        {
            name: "DOSA",
            icon: "dosa",
            content: "Very Light, crispy and healthy crepes made of fermented lentils and rice - fermentation reduces the excessive carbs and increases the micro nutrients - delicious and gluten-free - served with two chutneys and sambar. We only use olive oil for cooking Dosa",
            item: [
                {
                    image: "p5",
                    name: "Masala Dosa",
                    content: "Traditional masala made of potatoes cooked with onions, peas, seasoned with cumin and mustard seeds. Served with sambar rice",
                    price: '14',
                    slug: "must-have-masala"
                },
                {
                    image: "p6",
                    name: "Cheese Dosa",
                    content: "Mozzarella, cheddar jack cheese with cilantro, onions, jalapeno and a touch of tikka masala sauce",
                    price: '13',
                    slug: "easter-egg"
                },
                {
                    image: "p7",
                    name: "Eggs-citement Dosa with Avacado",
                    content: "3 eggs scrambled with fresh jalapeno onions and cilantro seasoned with salt, pepper, avacado and pico de Gallo. Add cheese extra for $1",
                    price: '15',
                    slug: "must-have-masala"
                },
                {
                    image: "p8",
                    name: "Spinach Artichoke dosa",
                    content: "Heart of artichokes sauteed with garlic, ginger, fresh baby spinach, grape tomatoes and lemon juice placed on a bed of cream cheese topped with a shaving of fresh parmesan cheese",
                    price: '15',
                    slug: "cheese-in-domain"
                },
                {
                    image: "p10",
                    name: "Supreme Dosa with chicken",
                    content: "Cheddar jeck and mozzarella cheese, onion, cilantro and jalapeno topped with tikka masala sauce and marinated chicken breast. Vegetarian option - Paneer is available",
                    price: '15',
                    slug: "austin-to-mars"
                }
            ]
        },
        {
            name: "ENTREES",
            icon: "antidosas",
            content: "All entrees are served with aromatic basmati rice. Add Naan for $2",
            item: [
                {
                    image: "p5",
                    name: "Chicken Tikka Masala",
                    content: "The most famous & delicious dish in indian cuisine",
                    price: '16',
                    slug: "biriyani-made-for-domain"
                },
                {
                    image: "p6",
                    name: "Chicken korma",
                    content: "Marinated chicken breasts cooked in a delicious sauce made of onions, tomatoes, cream, yogurt, cashew paste and spices",
                    price: '16',
                    slug: "genghis-khan-tikka-masala"
                },
                {
                    image: "p7",
                    name: "Chicken Saag",
                    content: "Marinated chicken breasts cooked in a delicious sauce made of spinach, onions, cream and spices",
                    price: '16',
                    slug: "lamb-curry"
                },
                {
                    image: "p1",
                    name: "Vegetable Korma",
                    content: "Delicious korma sauce served with fresh cauliflower, carrots, peas and green beans",
                    price: '15',
                    slug: "cuddly-idli-sambar"
                },
                {
                    image: "p2",
                    name: "Paneer Tikka Masala",
                    content: "Cubes of Paneer(cheese) sauted in butter and served with delicious tikka masala sauce",
                    price: '15',
                    slug: "chia-chia-idly"
                },
                {
                    image: "p2",
                    name: "Palak Paneer",
                    content: "Cubes of Paneer(cheese) sauted in butter and served with a sauce made of spinach, onions, cream and spices",
                    price: '15',
                    slug: "chia-chia-idly"
                },
                {
                    image: "p2",
                    name: "Fettuccine Chicken Tikka Masala",
                    content: "Try our delicious chicken tikka masala over fetachini pasta topped with fresh parmesan cheese",
                    price: '15',
                    slug: "chia-chia-idly"
                },
            ]
        },
        {
            name: "BIRIYANI",
            icon: "h30",
            content: "Onion, tomatoes and fresh jelapeno sauteed with ginger garlic yogurt cinnamon coriander tossed either with chicken or fresh vegetables mixed with rice topped with fried onions and fresh mint. Served with yogurt sauce",
            item: [
                {
                    image: "p12",
                    name: "Chicken Biriyani",
                    // content: "Tea with milk flavored with a mixture of aromatic Indian  and herbs",
                    price: '16',
                    slug: "haris-special-chai"
                },
                {
                    image: "p13",
                    name: "Vegetable Biriyani",
                    // content: "Chicory-laced coffee poured into furiously hot milk",
                    price: '15',
                    slug: "chennai-coffee"
                },
            ]
        },
        {
            name: "DESERTS",
            icon: "drinks",
            // content: "Fluids – quench and electrolytic",
            item: [
                {
                    image: "p12",
                    name: "Gulab Jamun",
                    content: "Three milk doughs shaped into a golf ball fried and soaked in honey rose syrup and topped with crushed pistachio",
                    price: '6',
                    slug: 'zingy-turmeric'
                },
                {
                    image: "p13",
                    name: "Ras Malai",
                    content: "Spongy curved milk flattened and soaked in a creamy sauce flavored with cardamon, saffron and rosewater and topped with crushed pistachio",
                    price: '7',
                    slug: 'fun-fenugreek'
                },
                {
                    image: "p13",
                    name: "Mango Lassi",
                    content: "Fresh mango pureed with yogurt, cardamom and honey and topped with diced mangoes, whipped cream, fresh strawberry and mint",
                    price: '6',
                    slug: 'fun-fenugreek'
                }
            ]
        },
        {
            name: "DRINKS",
            icon: "drinks",
            // content: "Fluids – quench and electrolytic",
            item: [
                {
                    image: "p12",
                    name: "Bottled water",
                    // content: "Potato mix seasoned with mustard seeds",
                    price: '1.50',
                    slug: 'extra-sambar'
                },
                {
                    image: "p13",
                    name: "Diet Coke",
                    // content: "Potato mix seasoned with mustard seeds",
                    price: '2.50',
                    slug: 'mango-chutney'
                },
                {
                    image: "p13",
                    name: "Mexican Coke",
                    // content: "Potato mix seasoned with mustard seeds",
                    price: '3.50',
                    slug: 'naan'
                },
                {
                    image: "p20",
                    name: "Topo Chico",
                    // content: "Potato mix seasoned with mustard seeds",
                    price: '3.50',
                    slug: 'danish-pie'
                },
                {
                    image: "p21",
                    name: "Maya's Special Chai",
                    // content: "Potato mix seasoned with mustard seeds",
                    price: '4.50',
                    slug: 'midnightcookie'
                },
            ]
        },

    ]
    return (
        <div className='menusContainer'>
            <div className='menuTitleContainer'>
                <span className='menuTitle'>OUR MENU</span>
            </div>
            <div className='menuHeadingContainer'>
                <h2 className='menuHeading'>Menu That Always Makes You Fall In Love</h2>
            </div>
            <div className='menusItemContainer'>
                {
                    menuItem.map((e, i) => {
                        return (
                            <div key={i} className={`${selectMenu == i ? 'selectedMenu' : "menusItem"} `} onClick={() => setSelectMenu(i)}>
                                <img src={require(`../../assets/${e.icon}.png`)} alt="" className='menusItemImage' />
                                <span className={`${selectMenu == i ? 'menusItemName' : "menusItemNameSelected"} `}>{e.name}</span>
                            </div>
                        )
                    })
                }
            </div>

            <div className='menusDetailContainer'>
                <h2 className='menusName'>{menuItem[selectMenu].name}</h2>
                <p className='menusContent'>{menuItem[selectMenu].content}</p>
                <div className='menusCardContainer'>
                    {
                        menuItem[selectMenu].item.map((e, i) => {
                            return (
                                <div key={i} className='menusCard' onMouseEnter={() => setPopupShow(i)} onMouseLeave={() => setPopupShow(undefined)}>
                                    <img src={require(`../../assets/${e.image}.png`)} alt="" className='menusCardImage' />
                                    <h2 className='menusCardName'>{e.name}</h2>
                                    <p className='menusCardContent'>{e.content}</p>
                                    <div className='menusCardPriceContainer'>
                                        <span className='menusCardPriceDollar'>$</span>
                                        <span className='menusCardPrice'>{e.price}</span>
                                    </div>
                                    {
                                        popUpShow == i ?
                                            <div className='popupContainer'>
                                                <img src={require("../../assets/popupbg.png")} alt="" className='popUpBg' />
                                                <div className='menuImageContainer'>
                                                    <img src={require(`../../assets/${e.image}.png`)} alt="" className="menuImage" />
                                                </div>
                                                <div className='menuContentContainer' >
                                                    <h2 className='menuName'>{e.name}</h2>
                                                    <p className='menuContent'>{`${e.content.slice(0, 20)}...`}</p>
                                                    <div className='menusPopupCardPriceContainer'>
                                                        <span className='menusPopupCardPriceDollar'>$</span>
                                                        <span className='menusPopupCardPrice'>{e.price}</span>
                                                    </div>
                                                    <div className='popupBtnContainer'>
                                                        <Link to={`/product/${e.slug}`}>
                                                            <button className='popupCta'>View Details</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                    }

                                </div>
                            )
                        })}
                </div>

            </div>

        </div>
    )
}