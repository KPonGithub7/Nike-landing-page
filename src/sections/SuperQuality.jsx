import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SpecialQuality = () => {
    return (
        <section
            id="about us"
            className="flex justify-between item-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div>
                <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
                    We Provide You
                    <span className="text-coral-red"> Super</span>{" "}
                    <span className="text-coral-red ">Qualitiy</span> Shoes
                </h2>
                <p className="mt-4  info-text lg:max-w-lg">
                    Discover stylish Nike arrivals, quality comfort, and
                    innovation for your active life. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vitae, totam! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Culpa,
                    deleniti.
                </p>
                <p className="mt-6 info-text lg:max-w-lg">
                    Discover stylish Nike arrivals, quality comfort, and
                    innovation for your active life.
                </p>

                <div className="mt-11">
                    <Button label="View Details" />
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img
                    src={shoe8}
                    alt="shoe8"
                    className="object-contain"
                    height={522}
                    width={570}
                />
            </div>
        </section>
    );
};

export default SpecialQuality;
