import {  gql } from "@apollo/client";

export const GETALLPOSTS = gql`
query posts($options: PageQueryOptions) {
  posts(options: $options) {
   data{
       id 
       title
       body
       user{
           id
           name
           username
           email
       }
   }
   links{
       first{
           page
           limit
       }
       prev{
           page
           limit
       }
   }
   meta{
       totalCount
   } 
  }
}
`;

export const GET_ALLALBUMS = gql`
query albums($options: PageQueryOptions){
    albums(options: $options){
        data{
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
}
`;

export const GETALBUM = gql`
query album($id: ID!){
    album(id: $id){
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
`