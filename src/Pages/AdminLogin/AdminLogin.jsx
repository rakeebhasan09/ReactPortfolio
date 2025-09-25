import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FaLock, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const AdminLogin = () => {
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	// Handle Admin Login
	const handleAdminLogin = (event) => {
		event.preventDefault();
		const userNameInDB = "rakeebhasan@gmail.com";
		const userPassInDB = "Rakeeb@#6880?";

		const userName = event.target.username.value;
		const userPass = event.target.userpassword.value;

		if (userNameInDB !== userName) {
			toast.warn("User Not Found!");
			return;
		}

		if (userPassInDB !== userPass) {
			toast.info("Invalid User Credential!");
			return;
		}
		toast.success("Log In Successfull.");
		event.target.reset();
	};
	return (
		<>
			<Helmet>
				<title>Rakeeb Hasan || Admin Login</title>
			</Helmet>
			<div className="min-h-screen bg-white flex items-center justify-center">
				<div className="max-w-[750px] w-full py-[30px] px-5 md:p-10 lg:p-[70px] lg:pt-[50px] mx-auto shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] font-rubik">
					<div className="logo text-center">
						<a
							className="inline-flex items-center gap-1"
							href="/"
							data-discover="true"
						>
							<img
								className="w-[35px] xl:w-[40px] block"
								alt=""
								src="https://i.ibb.co.com/gZDM6BLc/logocopy.png"
							/>
							<span className="text-[25px] xl:text-[35px] text-brand font-rubik">
								Rakeeb
							</span>
						</a>
					</div>
					<div className="mt-[30px]">
						<form onSubmit={handleAdminLogin}>
							<div className="flex flex-col gap-y-5">
								<div className="admin-input-row flex items-center py-[15px] px-[15px] md:px-[30px] bg-[#f8f9fa]">
									<div className="w-10  h-9 flex items-center justify-center pr-[10px] border-r-[1px] border-r-brand">
										<FaUser className="text-[#000000] text-[22px]" />
									</div>
									<input
										type="text"
										name="username"
										className="w-[calc(100%-40px)] px-3 outline-none bg-transparent text-[#141414] text-[18px]"
										placeholder="Enter Your E-mail Address"
									/>
								</div>
								<div className="relative admin-input-row flex items-center py-[15px] px-[15px] md:px-[30px] bg-[#f8f9fa]">
									<div className="absolute right-5">
										{showPassword ? (
											<BsFillEyeSlashFill
												onClick={handleShowPassword}
												className="text-[#000000] text-[22px] cursor-pointer"
											/>
										) : (
											<BsFillEyeFill
												onClick={handleShowPassword}
												className="text-[#000000] text-[22px] cursor-pointer"
											/>
										)}
									</div>
									<div className="w-10  h-9 flex items-center justify-center pr-[10px] border-r-[1px] border-r-brand">
										<FaLock className="text-[#000000] text-[22px]" />
									</div>
									<input
										type={
											showPassword ? "text" : "password"
										}
										name="userpassword"
										className="w-[calc(100%-40px)] px-3 outline-none bg-transparent text-[#141414] text-[18px]"
										placeholder="Enter Your Password"
									/>
								</div>
								<div className="text-center mt-4">
									<button className="bg-brand text-white text-[20px] py-3 px-10 rounded font-rubik font-medium">
										Log In
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminLogin;
