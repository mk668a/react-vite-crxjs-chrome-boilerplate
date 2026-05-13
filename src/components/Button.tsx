import type { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button {...props} />
);

export default Button;
