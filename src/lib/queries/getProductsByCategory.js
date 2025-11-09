import { gql } from "graphql-request";

export const GET_SUBCATEGORIES_BY_PARENT = gql`
  query GetSubcategoriesByParent($parentSlug: [String]) {
    productCategories(where: { parent: $parentSlug }) {
      nodes {
        id
        name
        slug
        description
        image {
          sourceUrl
        }
      }
    }
  }
`;
