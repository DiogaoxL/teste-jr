

interface ProductCardProps {
    productImg: string
    describe: string
    price: string

}


export const ProductCard = ({productImg, describe, price}: ProductCardProps) => {
    
    
     
    
    
    return (


        <aside className="card-product-root">
            <img src={productImg} className="px-3 m-auto" />
            <p></p>

            <span>{price}</span>
            

            {/* 
            
            button-aside: 

            display>: flex;
            flex-direction: column;
            gap: 5px;
            padding-left: 3px;
            padding-right: 3px
            
            
            
            */}

            <div className="button-aside">
                <span className="">Frete grátis</span>
                <button>COMPRAR</button>
            </div>


        </aside>






    )
}