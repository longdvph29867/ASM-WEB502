type Product = {
    _id: ObjectId,
    name: string,
    desc: string,
    images: string[],
    price: number,
    slug: string,
    id_category: ObjectId,
    createAt: string,
    updateAt: string,
    gender: string
    rating:number
}
type FormProductData = Omit<Product, '_id' | 'slug' | 'createAt' | 'updateAt' | 'rating' | 'images'> & { image: string}
// type FormProductData = {
//     name: string,
//     desc: string,
//     images: string,
//     price: string,
//     id_category: ObjectId,
//     gender: string
// }

type ValidProduct = Partial<Omit<FormProductData, 'price'>> & {price?: string}