import { use } from "react";
import { GraphQLClient } from "graphql-request";
import { GET_PRODUCTS_BY_CATEGORY_SLUG } from "@/lib/queries/getCategoryProductsBySlug";
import GridWrapper from "@/components/GridWrapper";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL);

export default function CategoryPage({ params }) {
  const { category } = use(params);
  const data = use(client.request(GET_PRODUCTS_BY_CATEGORY_SLUG, { slug: category }));
  const categoryData = data.productCategory;

  if (!categoryData?.products?.nodes?.length) {
    return <div className="p-10 text-center text-gray-600">No products found in this category.</div>;
  }

  return (
    <main className="md:mt-[113px] mt-[104px] grow-1 w-full">
      <div className="xl:max-w-[90%] mx-auto w-full">
        {/* ---- your heading block ---- */}
        <div className="pt-[32px] flex flex-col">
          <h1 className="xl:p-0 md:text-[46px] font-kave-haffertext text-left mb-[12px] font-normal">
            {categoryData.name}
          </h1>
          <div className="xl:p-0 md:max-w-[612px] mb-[24px] text-[15px] text-neutral-100">
            <div>
              <p className="font-kave-haffer">{categoryData.description}</p>
            </div>
          </div>
        </div>

        {/* ---- everything interactive  ---- */}
        <GridWrapper
          categoryData={categoryData}
          category={category} />
      </div>
    </main>
  );
}
