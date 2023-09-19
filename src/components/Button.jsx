const Button = ({
    label,
    iconURL,
    backgourndColor,
    borderColor,
    textColor,
    fullWidth,
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 rounded-full font-montserrat border leading-none ${
                backgourndColor
                    ? `${backgourndColor} ${textColor} ${borderColor}`
                    : `bg-coral-red text-white border-coral-red`
            } ${fullWidth && "w-full"}`}
        >
            {label}
            {iconURL && <img src={iconURL} alt="icon" />}
        </button>
    );
};

export default Button;
