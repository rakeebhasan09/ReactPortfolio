import { Link, NavLink } from "react-router-dom";
import {
	FaBehance,
	FaEnvelope,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";

const Header = () => {
	const openDrawer = () => {
		const drawerCheckbox = document.getElementById("my-drawer-4");
		if (drawerCheckbox) {
			drawerCheckbox.checked = true;
		}
	};
	const closeDrawer = () => {
		const drawerToggle = document.getElementById("my-drawer-4");
		if (drawerToggle) {
			drawerToggle.checked = false;
		}
	};
	return (
		<header className="absolute w-full">
			<div className="container">
				<div className="py-[10px] flex items-center justify-between">
					{/* Logo Card */}
					<div className="logo">
						<Link to="/" className="flex items-center gap-1">
							<img
								className="max-w-[40px] block"
								src="https://i.ibb.co.com/gZDM6BLc/logocopy.png"
								alt=""
							/>
							<span className="text-[35px] text-white font-rubik">
								Rakeeb
							</span>
						</Link>
					</div>

					{/* Menu Items */}
					<nav>
						<ul className="flex items-center gap-x-3">
							<li className="group">
								<NavLink className="py-2 px-3 text-white font-black capitalize rounded group-hover:bg-[#270D15] group-hover:text-[#FF014F] transition-all duration-200">
									home
								</NavLink>
							</li>
							<li className="group">
								<NavLink className="py-2 px-3 text-white font-black capitalize group-hover:bg-[#270D15] group-hover:text-[#FF014F] transition-all duration-200">
									about
								</NavLink>
							</li>
							<li className="group">
								<NavLink className="py-2 px-3 text-white font-black capitalize group-hover:bg-[#270D15] group-hover:text-[#FF014F] transition-all duration-200">
									services
								</NavLink>
							</li>
							<li className="group">
								<NavLink className="py-2 px-3 text-white font-black capitalize group-hover:bg-[#270D15] group-hover:text-[#FF014F] transition-all duration-200">
									projects
								</NavLink>
							</li>
							<li className="group">
								<NavLink className="py-2 px-3 text-white font-black capitalize group-hover:bg-[#270D15] group-hover:text-[#FF014F] transition-all duration-200">
									contact
								</NavLink>
							</li>
						</ul>
					</nav>

					{/* Social Links */}
					<div className="social-links">
						<ul className="flex items-center gap-x-3">
							<li className="group">
								<Link className="relative w-[40px] h-[40px] inline-flex items-center justify-center bg-[rgba(255,255,255,0.062745098)] rounded-full z-10 after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-[#FF014F] after:rounded-full after:z-0 after:scale-0 group-hover:after:scale-100 after:transition-transform after:duration-300">
									<FaInstagram className="text-white text-[18px] relative z-20" />
								</Link>
							</li>
							<li className="group">
								<Link className="relative w-[40px] h-[40px] inline-flex items-center justify-center bg-[rgba(255,255,255,0.062745098)] rounded-full z-10 after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-[#FF014F] after:rounded-full after:z-0 after:scale-0 group-hover:after:scale-100 after:transition-transform after:duration-300">
									<FaLinkedinIn className="text-white text-[18px] relative z-20" />
								</Link>
							</li>
							<li className="group">
								<Link className="relative w-[40px] h-[40px] inline-flex items-center justify-center bg-[rgba(255,255,255,0.062745098)] rounded-full z-10 after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-[#FF014F] after:rounded-full after:z-0 after:scale-0 group-hover:after:scale-100 after:transition-transform after:duration-300">
									<FaFacebookF className="text-white text-[18px] relative z-20" />
								</Link>
							</li>
							<li className="group">
								<Link className="relative w-[40px] h-[40px] inline-flex items-center justify-center bg-[rgba(255,255,255,0.062745098)] rounded-full z-10 after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-[#FF014F] after:rounded-full after:z-0 after:scale-0 group-hover:after:scale-100 after:transition-transform after:duration-300">
									<FaBehance className="text-white text-[18px] relative z-20" />
								</Link>
							</li>
							<li className="group">
								<span
									onClick={openDrawer}
									className="relative w-[40px] cursor-pointer h-[40px] inline-flex flex-col items-center border-[1px] border-brand justify-center bg-transparent rounded-full z-10 after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-[#FF014F] after:rounded-full after:z-0 after:scale-100 group-hover:after:scale-0 after:transition-transform after:duration-300"
								>
									<span className="h-[2px] block bg-white w-[50%] group-hover:bg-brand relative z-30"></span>
									<span className="h-[2px] block bg-white w-[50%] group-hover:bg-brand my-[6px] ml-2 group-hover:ml-0 transition-all duration-300 relative z-30"></span>
									<span className="h-[2px] block bg-white w-[50%] group-hover:bg-brand relative z-30"></span>
								</span>
							</li>
						</ul>
					</div>
				</div>
				{/* Menu Side Bar */}
				<div className="drawer drawer-end z-40 bg-[#141414]">
					<input
						id="my-drawer-4"
						type="checkbox"
						className="drawer-toggle"
					/>
					<div className="drawer-side ">
						<label className="drawer-overlay"></label>
						<div className="relative p-0 bg-[#141414] text-base-content min-h-full w-[400px]">
							<div className="bg-[rgba(21,21,21,0.50)]">
								<div className="absolute top-[15px] right-[15px]">
									<HiOutlineXMark
										onClick={closeDrawer}
										className="text-white text-4xl cursor-pointer"
									/>
								</div>
								<div className="py-4 px-5">
									<Link
										to="/"
										className="flex items-center gap-1"
									>
										<img
											className="max-w-[30px] block"
											src="https://i.ibb.co.com/gZDM6BLc/logocopy.png"
											alt=""
										/>
										<span className="text-[25px] text-white font-rubik">
											Rakeeb
										</span>
									</Link>
								</div>
							</div>
							<div className="menu-item-list">
								<div className="p-[30px]">
									<img
										className="w-full"
										src="https://i.ibb.co.com/gZ9MSxz4/aside-man.png"
										alt=""
									/>
									<h5 className="text-white text-[20px] font-rubik font-bold mt-[30px] mb-5">
										Freelancer delivering exceptional
										Webflow, and Next.js solutions.
									</h5>
									<p className="text-[#9F9F9F] font-rubik mb-10">
										I am a skilled freelancer specializing
										in Webflow development, Figma design,
										and Next.js projects. I deliver
										creative, dynamic, and user-centric web
										solutions.
									</p>
									<div className="flex flex-col gap-y-6">
										{/* Single Contact Info */}
										<div className="flex gap-x-5">
											<div className="w-[45px] h-[45px] border-[1px] border-[#ffffff14] flex items-center justify-center rounded">
												<BsFillTelephoneFill className="text-white text-[20px]" />
											</div>
											<div className="flex flex-col">
												<span className="text-brand text-[15px] font-bold uppercase">
													call now
												</span>
												<Link className="text-white font-rubik relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-white after:hover:w-full after:transition-all after:duration-500">
													+92 (8800) - 98670
												</Link>
											</div>
										</div>
										{/* Single Contact Info */}
										<div className="flex gap-x-5">
											<div className="w-[45px] h-[45px] border-[1px] border-[#ffffff14] flex items-center justify-center rounded">
												<FaEnvelope className="text-white text-[20px]" />
											</div>
											<div className="flex flex-col">
												<span className="text-brand text-[15px] font-bold uppercase">
													Mail Us
												</span>
												<Link className="text-white font-rubik relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-white after:hover:w-full after:transition-all after:duration-500">
													example@info.com
												</Link>
											</div>
										</div>
										{/* Single Contact Info */}
										<div className="flex gap-x-5">
											<div className="w-[45px] h-[45px] border-[1px] border-[#ffffff14] flex items-center justify-center rounded">
												<MdMyLocation className="text-white text-[20px]" />
											</div>
											<div className="flex flex-col">
												<span className="text-brand text-[15px] font-bold uppercase">
													My Address
												</span>
												<Link className="text-white font-rubik uppercase">
													66 Broklyant, New York 3269
												</Link>
											</div>
										</div>
									</div>

									{/* Find Me */}
									<div className="social-links">
										<p className="text-white font-medium uppercase mt-5 mb-[15px]">
											find with me
										</p>
										<ul className="flex items-center gap-x-3">
											<li className="group">
												<Link className="relative w-[40px] h-[40px] inline-flex items-center justify-center bg-[rgba(255,255,255,0.062745098)] rounded-full z-10 after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-[#FF014F] after:rounded-full after:z-0 after:scale-0 group-hover:after:scale-100 after:transition-transform after:duration-300">
													<FaInstagram className="text-white text-[18px] relative z-20" />
												</Link>
											</li>
											<li className="group">
												<Link className="relative w-[40px] h-[40px] inline-flex items-center justify-center bg-[rgba(255,255,255,0.062745098)] rounded-full z-10 after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-[#FF014F] after:rounded-full after:z-0 after:scale-0 group-hover:after:scale-100 after:transition-transform after:duration-300">
													<FaLinkedinIn className="text-white text-[18px] relative z-20" />
												</Link>
											</li>
											<li className="group">
												<Link className="relative w-[40px] h-[40px] inline-flex items-center justify-center bg-[rgba(255,255,255,0.062745098)] rounded-full z-10 after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-[#FF014F] after:rounded-full after:z-0 after:scale-0 group-hover:after:scale-100 after:transition-transform after:duration-300">
													<FaFacebookF className="text-white text-[18px] relative z-20" />
												</Link>
											</li>
											<li className="group">
												<Link className="relative w-[40px] h-[40px] inline-flex items-center justify-center bg-[rgba(255,255,255,0.062745098)] rounded-full z-10 after:absolute after:w-[100%] after:h-[100%] after:top-0 after:left-0 after:bg-[#FF014F] after:rounded-full after:z-0 after:scale-0 group-hover:after:scale-100 after:transition-transform after:duration-300">
													<FaBehance className="text-white text-[18px] relative z-20" />
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
