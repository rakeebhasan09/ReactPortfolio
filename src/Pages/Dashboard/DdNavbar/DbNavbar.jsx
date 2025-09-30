import { Link } from "react-router-dom";

const DbNavbar = ({ openSideBar }) => {
	return (
		<div className="sticky top-0 z-10 bg-white">
			<div className="navbar justify-between bg-base-100 min-h-0 py-2 px-4 shadow-sm">
				<div onClick={openSideBar} className="">
					<div className="hamburger-icon flex flex-col gap-2 cursor-pointer mr-2 lg:hidden">
						<span className="w-10 h-1 block bg-brand"></span>
						<span className="w-10 h-1 block bg-brand"></span>
						<span className="w-10 h-1 block bg-brand"></span>
					</div>
					<div className="logo">
						<Link
							to={"/dashboard"}
							className="flex items-center gap-1"
							data-discover="true"
						>
							<img
								className="w-[35px] xl:w-[30px] block lg:hidden"
								alt=""
								src="https://i.ibb.co.com/gZDM6BLc/logocopy.png"
							/>
							<span className="text-[25px] xl:text-[30px] text-brand font-rubik">
								Dashboard
							</span>
						</Link>
					</div>
				</div>
				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="cursor-pointer">
						<div className="flex items-center gap-2">
							<img
								className="w-10 rounded-full"
								alt="MD Rakeeb Hasan"
								src="https://i.ibb.co.com/n8YnT2Y9/my-photo.jpg"
							/>
							<div className="text-left hidden sm:block">
								<h4 className="text-black font-medium">
									MD Rakeeb Hasan
								</h4>
								<p className="text-brand text-sm">Admin</p>
							</div>
						</div>
					</div>

					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						<li>
							<Link to="/dashboard/profile">Profile</Link>
						</li>
						<li>
							<Link to={"/dashboard/change-password"}>
								Change Password
							</Link>
						</li>
						<li>
							<Link to={"/admin"}>Logout</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DbNavbar;
