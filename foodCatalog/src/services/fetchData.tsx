import { spaceXGQL } from "../common/dataTypes"

let queryString = ""
const endpoint = "https://api.spacex.land/graphql/"
const headers = {
  "content-type": "application/json",
  Authorization: "<token>"
}

/**
 *
 * @param props spaceXGQLtemplate Object
 * @returns GraphQL query string
 */
const createQuery = (props: spaceXGQLtemplate) => {
  return `${props.alias}: launchesPastResult(find: {site_name: "${props.site_name}"}, limit: ${props.qty}) {
        data {
          launch_date_unix
          mission_name
          rocket {
            rocket_name
          }
          launch_site {
            site_name
          }
          links {
            flickr_images
          }
        }
      }`
}
/**
 *
 * @param props Array of spaceXGQLtemplate Object
 * @returns spaceXGQ Object. Alert will be raised for request errors.
 */
const fetchData = async (props: spaceXGQLtemplate[]) => {
  props.map((item) => {
    queryString += createQuery(item)
  }) //Concatenates each alias request in the template to form a single query string
  console.log(queryString)
  const response = await fetch(endpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query: `query {${queryString}}`, variables: {} })
  })
  const data: spaceXGQL | undefined = await response.json()
  if (!response.ok || !data) {
    // Checks if data is proper, if not, raise error
    alert("Request error")
    throw new Error("Request error")
  }
  return data
}

export default fetchData