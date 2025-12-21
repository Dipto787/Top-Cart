import ProductByCategory from "../ProductByCategory";



export default async function Page({ params }) {
    const category = await params;  


    return (
        <div className="p-10">

            <ProductByCategory category={category?.category}></ProductByCategory>
        </div>
    );
}
