import gql from 'graphql-tag';

const SHIPS_DATA_QUERY = gql`
  query getAllShips {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;

const SHIPS_IDS = gql`
  query getAllShips {
    vehicles {
      id
    }
  }
`;
const SHIPS_DATA_QUERY_SHORT = gql`
  query getAllShips {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
      }
      nation {
        name
      }
    }
  }
`;
const SCHEMA_QUERY = gql`
  {
    __schema {
      types {
        name
        fields {
          name
        }
      }
    }
  }
`;
const NATIONS_QUERY = gql`
  query getAllNations {
    nations {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
`;
const SCHEMA_NAME_QUERY = gql`
  {
    __type(name: "GlossaryQuery") {
      name
      fields {
        name
        args {
          name
          description
          type {
            name
            kind
          }
        }
        type {
          name
          kind
          ofType {
            name
            kind
            fields {
              name
            }

            ofType {
              name
              kind
              fields {
                name
              }
            }
          }
        }
      }
    }
  }
`;
const FULL = gql`
  fragment FullType on __Type {
    kind
    name
    fields(includeDeprecated: true) {
      name
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }
  fragment InputValue on __InputValue {
    name
    type {
      ...TypeRef
    }
    defaultValue
  }
  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
  query IntrospectionQuery {
    __schema {
      queryType {
        name
      }
      mutationType {
        name
      }
      types {
        ...FullType
      }
      directives {
        name
        locations
        args {
          ...InputValue
        }
      }
    }
  }
`;