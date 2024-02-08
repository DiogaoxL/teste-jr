 import { Category } from "./category"

export const CategoryBar = () => {

    const categorys = [
        {
            title: "", 
            icon: ""
        },
        {
            title: "", 
            icon: ""
        },
        {
            title: "", 
            icon: ""
        },
        {
            title: "", 
            icon: ""
        },
        {
            title: "", 
            icon: ""
        },
        {
            title: "", 
            icon: ""
        },
        {
            title: "", 
            icon: ""
        },
    ]

    return (
        <ul>
            {categorys.map((category, index) => {
                return (
                  <Category icon={category.icon} title={category.title} key={index} />
                )
            })}
        </ul>
    )
}