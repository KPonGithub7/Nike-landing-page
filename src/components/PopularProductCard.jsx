import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 w-full max-sm:w-full flex-col">
            <img
                src={imgURL}
                alt={name}
                className="w-[280px] h-[280px] cursor-pointer "
            />

            <div className="flex flex-1 gap-2.5 justify-start">
                <img src={star} alt="Rating" width={24} height={24} />
                <p className="font-montserrat text-xl text-slate-gray leading-normal">
                    (4.5)
                </p>
            </div>
            <h3 className="mt-2 leading-normal text-2xl font-palanquin font-semibold">
                {name}
            </h3>
            <p className="mt-2 font-montserrat text-coral-red text-2lx">
                {price}
            </p>
        </div>
    );
};

export default PopularProductCard;
