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