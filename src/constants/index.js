'use client';

import Swal from "sweetalert2";
import {
	FacebookOutlined,
	InstagramOutlined,
	TwitterOutlined,
	LinkedinOutlined,
	BehanceOutlined,
} from "@ant-design/icons";

const width = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
	isSmallDevice: "768px",
};

const height = {
	small: "400px",
	mid: "800px",
};

export const device = {
	mobileS: `(max-width: ${width.mobileS})`,
	mobileM: `(max-width: ${width.mobileM})`,
	mobileL: `(max-width: ${width.mobileL})`,
	tablet: `(max-width: ${width.tablet})`,
	laptop: `(max-width: ${width.laptop})`,
	laptopL: `(max-width: ${width.laptopL})`,
	desktop: `(max-width: ${width.desktop})`,
	desktopL: `(max-width: ${width.desktop})`,
	isSmallDevice: `(max-width: ${width.isSmallDevice})`,
};

export const deviceHeight = {
	small: `(max-height: ${height.small})`,
	mid: `(max-height: ${height.mid})`,
};


export const setToStorage = (key, value) => {
	let storedValue = JSON.stringify(value);
	localStorage.setItem(key, storedValue);
};

export const getFromStorage = (key) => {
	let value = localStorage.getItem(key);
	return value ? JSON.parse(value) : null;
};

export const fireSwalSuccess = (message, callback = () => { }) => {
	Swal.fire({
		icon: "success",
		toast: true,
		position: "top",
		title: message,
		showConfirmButton: false,
		timer: 2000,
	}).then(() => {
		callback();
	});
};

export const fireSwalError = (message) => {
	Swal.fire({
		icon: "error",
		toast: true,
		position: "top-end",
		title: message,
		showConfirmButton: false,
		timer: 2000,
	});
};

export const fireSwalConfirm = (confirmFunction) => {
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#E4410A",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes",
	}).then((result) => {
		if (result.isConfirmed) {
			confirmFunction();
		}
	});
};

export const fireSwalPayment = (confirmFunction) => {
	Swal.fire({
		title: "Insufficient Funds?",
		text: "You do not have enough in your pocket to stream this song! Please deposit into your pocket to continue",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#E4410A",
		cancelButtonColor: "#d33",
		confirmButtonText: "Deposit",
	}).then((result) => {
		if (result.isConfirmed) {
			confirmFunction();
		}
	});
};

export const fireSwalPaymentValidation = (amount, confirmFunction) => {
	Swal.fire({
		title: "Payment",
		text: `You will be required to pay the sum of ${amount}`,
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#E4410A",
		cancelButtonColor: "#d33",
		confirmButtonText: "Pay",
	}).then((result) => {
		if (result.isConfirmed) {
			confirmFunction();
		}
	});
};

export const fireSwalLogin = (confirmFunction) => {
	Swal.fire({
		title: "You need to login",
		text: "To play/download this song you need to login",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#FFBC1D",
		cancelButtonColor: "#d33",
		confirmButtonText: "Login",
	}).then((result) => {
		if (result.isConfirmed) {
			confirmFunction();
		}
	});
};

const siteURL =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://stitchack.netlify.app";

export const copyToClipboard = async (link) => {
	if ("clipboard" in navigator) {
		await navigator.clipboard.writeText(`${siteURL}${link}`);
	} else {
		document.execCommand("copy", true, `${siteURL}${link}`);
	}
	fireSwalSuccess("Link Copied");
};

export const prefixURL = process.env.REACT_APP_FILEURL;

export const socialMedia = [
	"facebook",
	"instagram",
	"twitter",
	"linkedIn",
	"tikTok",
];

export const socialMediaIcons = {
	facebook: <FacebookOutlined size={22} />,
	instagram: <InstagramOutlined size={22} />,
	twitter: <TwitterOutlined size={22} />,
	linkedIn: <LinkedinOutlined size={22} />,
	tikTok: <BehanceOutlined size={22} />,
};


export const logout = () => {
	localStorage.clear();
	window.location.reload();
};