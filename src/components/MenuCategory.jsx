import SectionTitle from "./SectionTitle";
import SingleItem from "./SingleItem";

const MenuCategory = ({ menuItems, heading, subHeading }) => {

    return (
        <>
            <SectionTitle
                heading={heading}
                subHeading={subHeading}
            ></SectionTitle>
            <div className="grid grid-cols-3 gap-x-6 gap-y-10">
                {
                    menuItems.map(item => (
                        <div key={item._id}>
                            <SingleItem
                                item={item}
                            ></SingleItem>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default MenuCategory;