import React from 'react'
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';



function Header() {
  return (
		<>
			<section>
				<div className={classes.header_container}>
					<div className={classes.logo_container}>
						{/* logo */}
						<a href="#">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</a>
						{/* delivery */}
						<div className={classes.delivery}>
							<span>
                                {SlLocationPin}
                                </span>
							<div>
								<p>Deliver to</p>
								<span>Ethiopia</span>
							</div>
						</div>
					</div>

					<div className={classes.search}>
						{/* search */}
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="text" />
						<BsSearch size={25} />
					</div>

					{/* right side link */}
					<div className={classes.order_container}>
						<a href="" className={classes.language}>
							<img
								src="https://th.bing.com/th/id/R.a8854ee552e020fd9c957bb6842274f1?rik=CYBNsHDsVB%2bFnA&pid=ImgRaw&r=0"
								alt="USA Flag"
							/>
							<select name="" id="">
								<option value="">EN</option>
							</select>
						</a>
						{/* </div> */}

						{/* three component */}
						<a href="">
							<p>Sign In</p>
							<span>Account and Lists</span>
						</a>

						{/* orders */}
						<a href="">
							<p>returns</p>
							<span>& Orders</span>
						</a>
						{/* cart */}
						<a href="" className={classes.cart}>
							<BiCart size={35} />
							<span>0</span>
						</a>
					</div>
				</div>
			</section>
            <LowerHeader/>
		</>
	);
}

export default Header
