import React from "react";

const Card: React.FC<BaseCardProps> = ({children, className, ...rest}) => {
    const cardClassName = ["bg-white-1 mb-4 py-4 px-6 rounded-sm"]; 

    if(className) cardClassName.push(className);

    return (
        <div className={cardClassName.join()} {...rest}>
            {children}
        </div>
    )
}

export default Card;