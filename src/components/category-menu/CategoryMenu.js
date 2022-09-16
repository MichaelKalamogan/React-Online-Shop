import CategoryItem from "../category-item/category-item";
import { categories } from "../../utils/categories";
import "./CategoryMenu.scss";

function CategoryMenu(props) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryMenu;
