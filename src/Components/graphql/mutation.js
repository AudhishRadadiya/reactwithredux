import { gql } from "@apollo/client";

export const CREATEPOST = gql`
mutation createPost($input: CreatePostInput!){
    createPost(input: $input){
        id
        title
        body
        user{
            id
            name
            email
        }
    }
}
`;

export const UPDATEDATA = gql`
mutation updatePost($id: ID! $input: UpdatePostInput!){
    updatePost(id: $id input: $input){
        id
        title
        body
        user{
            id
            name
            email
        }
    }
}
`

export const DELETE_DATA = gql`
mutation deletePost($id: ID!){
    deletePost(id: $id)
}
` 