import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img
                    src={offer}
                    alt="offers"
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </div>
            <div>
                <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
                    <span className="text-coral-red"> Special</span> Offer
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

                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop Now" iconURL={arrowRight} />
                    <Button
                        label="Learn More"
                        backgourndColor="bg-white"
                        borderColor="border-slate-gray"
                        textColor="t3ext-color-gray"
                    />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
