import {commitMutation, graphql} from 'react-relay'

const mutation = graphql`
  mutation CreateTestMutation($input: CreateTestInput!) {
    createTest(input: $input) {
      test {
        id
        testField        
      }
      edge {
        __typename
        cursor
        node {
          id
          testField
        }
      }
    }
  }
`
function commit(environment, testField) {
  return new Promise((resolve, reject) => {
    commitMutation(
      environment,
      {
        mutation,
        variables: {input: { testField: testField,
                             clientMutationId: 'asd'+(new Date().toLocaleDateString()) }},                           
        onCompleted: (response) => {
          console.log('Success!', response)  
          resolve(response)  
        },
        onError: (response) => {
          console.log('Error!', response)        
          reject(response)
        },
        updater: (store) => {
        }
      }
    )
  })
}

export default {commit}