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

export const CREATE_ALBUM = gql`
mutation createAlbum($input: CreateAlbumInput!){
    createAlbum(input: $input){
        id
        title
        user{
            id
            name
            username
            email
        }
    }
}
`;

export const UPDATE_ALBUM = gql`
mutation updateAlbum($id: ID! $input: UpdateAlbumInput!){
    updateAlbum(id: $id input: $input){
        id
        title
        user{
            id
            name
            username
            email
        }
    }
}
`;

export const DELETE_ALBUM = gql`
mutation deleteAlbum($id: ID!){
    deleteAlbum(id: $id)
}
`