import MenuCategory from "../../components/MenuCategory";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu();

    const offeredItem = menu.filter(item => item.category == 'offered');
    const dessertItem = menu.filter(item => item.category == 'dessert');
    const pizzaItem = menu.filter(item => item.category == 'pizza');
    const saladItem = menu.filter(item => item.category == 'salad');
    const soupItem = menu.filter(item => item.category == 'soup');

    console.log(dessertItem);

    return (
        <div className="pt-12 container mx-auto">
            <div>
                <MenuCategory
                    heading={"desserts"}
                    subHeading={"Satisfyingly sweet and indulgent."}
                    menuItems={dessertItem}
                ></MenuCategory>
            </div>
            <div>
                <MenuCategory
                    heading={"pizza"}
                    subHeading={"Fresh and vibrant mix of flavors"}
                    menuItems={pizzaItem}
                ></MenuCategory>
            </div>
            <div>
                <MenuCategory
                    heading={"salad"}
                    subHeading={"Comforting and nourishing bowl of warmth"}
                    menuItems={saladItem}
                ></MenuCategory>
            </div>
            <div>
                <MenuCategory
                    heading={"soup"}
                    subHeading={"Cheesy, saucy, and absolutely delicious"}
                    menuItems={soupItem}
                ></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;