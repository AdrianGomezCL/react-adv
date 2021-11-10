import { createContext } from "react";

import styles from "../styles/styles.module.css";

import useProduct from "../hooks/useProduct";

import { Product, ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface Props {
    children?: React.ReactElement | React.ReactElement[];
    product: Product;
    className?: string;
    style?: React.CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={ style } >
                {children}
            </div>
        </Provider>
    );
};