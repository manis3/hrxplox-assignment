import Banner from '@/components/banner/banner';
import CategoriesCard from '@/components/categories/categoriesCard';
import CategoryCard from '@/components/categories/category/categoryCard';
import CategoryCardWithImageZoomIn from '@/components/categories/category/categoryCardWithImageZoomIn';
import ProductDetails from '@/components/productDetails/productDetails';
export default function Home() {
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 m-5">
        <CategoriesCard badgeTitle="Men's ware" show className="hover:scale-110" />
        {/* <CategoriesCard badgeTitle='jewelery' />

        <CategoriesCard badgeTitle='skincare' />

        <CategoriesCard badgeTitle='jeans' /> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 m-5">
        <CategoriesCard className="hover:scale-110" />
      </div>
      <div className="w-[1450px] m-auto">
        <ProductDetails />
        <CategoryCardWithImageZoomIn />
      </div>
    </div>
  );
}
