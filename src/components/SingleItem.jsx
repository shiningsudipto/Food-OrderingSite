
const SingleItem = ({ item }) => {
    const { image, name, price, recipe, _id } = item;

    const handleAddToCart = (id) => {
        console.log(id);
    }

    return (
        <div className="flex shadow-xl">
            <img className="h-[170px] w-[150px] rounded-md" alt="Item Image" src={image} />
            <div className="flex flex-col justify-between ms-4 p-1">
                <h3 className="font-bold">{name}</h3>
                <p className="font-semibold">Price: {price}</p>
                <p><u>Description:</u> {recipe}</p>
                <button onClick={() => handleAddToCart(_id)}>Add to cart</button>
            </div>
        </div>
    );
};

export default SingleItem;