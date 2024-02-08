import { useEffect, useState} from "react"

export const Products = () => {

    const { getProducts } = useFetch()

    const [products, setProducts] = useState()





    useEffect(() => {

        // const listProducts = getProducts()
        // if (listProducts) {
        //     setProducts(listProducts)
        // }
   

    }, [])

     

    return (


       <>
       
       </>
       
    )
}