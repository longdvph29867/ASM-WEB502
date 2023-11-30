type Product = {
    _id: string,
    name: string,
    desc: string,
    images: string[],
    price: number,
    slug: string,
    id_category: {_id: string, categoryName: string},
    createAt: string,
    updateAt: string,
    gender: string
    rating:number
}
type FormProductData = Pick<Product, 'desc' | 'gender' | 'name' | 'price'> & {images: File[], id_category: string}

