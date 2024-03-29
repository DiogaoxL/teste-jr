
interface ProductProps {
    productName: string
    descriptionShort: string
    photo: string
    price: string
}

const useFetch = () => {

    const getProducts = async () => {
         
         try { 
 
            const response = await fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
            const data: ProductProps[]  = await response.json();
        
            if (!data) {
                throw Error
            }

            return data
            
         } catch (error) {
            throw Error
         }  
    };

    return {
        getProducts
    }
}