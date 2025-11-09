import { gql } from "graphql-request";

export const GET_PRODUCTS_BY_CATEGORY_SLUG = gql`
  query GetProductsByCategorySlug($slug: ID!) {
    productCategory(id: $slug, idType: SLUG) {
      id
      name
      slug
      description
      image {
        sourceUrl
      }
      products {
        nodes {
          id
          name
          slug
          shortDescription
          description
          ... on SimpleProduct {
            price
            image {
              sourceUrl
            }
            galleryImages {
              nodes {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;
