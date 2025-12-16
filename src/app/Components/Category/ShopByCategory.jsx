import Link from "next/link";

const ShopByCategory = ({ categories }) => {
    console.log('catehhjhkjhkjgorifdfdfdes', categories)
    return (
        <div className="flex p-3 my-2 px-20  justify-between ">
            {
                categories?.map((category) => (<div key={category.id}> <Link href={''} className="text-xl  capitalize" >{category.category}</Link></div>))
            }
        </div>
    );
};

export default ShopByCategory;