interface CategoryProps {
    icon: string
    title: string
}

export const Category = ({icon, title}: CategoryProps) => {


    return (
        <li>
            {icon && <img src={icon} alt="ícone da categoria" />}
            <span>{title}</span>
        </li>
    )

}