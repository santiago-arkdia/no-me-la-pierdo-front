import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import ButtonAtom from "./ButtonsAtom";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { useShoppingCart } from "app/hooks/useShoppingCart";

export const TableProductSell = ({ item }: any) => {
  console.log("TableProductSell", item);
  const { name, price, id, quantity, date } = item;
  const [quantityItem, setQuantityItem] = useState(quantity);
  const { addToCart, removeFromCart } = useShoppingCart();

  const handleIncreaseQuantity = () => {
    setQuantityItem(quantityItem + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantityItem > 0) {
      setQuantityItem(quantityItem - 1);
    }
  };

  const handleRemoveProduct = () => {
    removeFromCart(id);
  };

  useEffect(() => {
    if (quantityItem > 0) {
      addToCart({ id, name, price, quantity: quantityItem, date });
    } else {
      addToCart({ id, name, price, quantity: 0, date });
    }
  }, [quantityItem, id, name, price, addToCart, date]);

  return (
    <tr className="border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap pl-20"
        style={{ width: "50%" }}
      >
        {name}
      </th>
      {/* <td className="px-6 py-4 flex " style={{ width: "16.66%" }}>
        <ButtonAtom
          icon={CgMathMinus}
          onClick={handleDecreaseQuantity}
          active={quantityItem > 0}
        />
        <p className="mx-4">{quantityItem}</p>
        <ButtonAtom icon={CgMathPlus} onClick={handleIncreaseQuantity} active />
      </td> */}
      <td className="px-6 py-4 flex" style={{ width: "16.66%" }}>
        <ButtonAtom
          icon={CgMathMinus}
          onClick={handleDecreaseQuantity}
          active={quantityItem > 0}
        />
        <p className="mx-4" style={{ width: "40px", textAlign: "center" }}>
          {quantityItem}
        </p>
        <ButtonAtom icon={CgMathPlus} onClick={handleIncreaseQuantity} active />
      </td>
      <td className="px-6 py-4" style={{ width: "16.66%" }}>
        ${price * quantityItem}
      </td>
      <td className="px-6 py-4" style={{ width: "16.66%" }}>
        <ButtonAtom icon={IoMdClose} onClick={handleRemoveProduct} active />
      </td>
    </tr>
  );
};
