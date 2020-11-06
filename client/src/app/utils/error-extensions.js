export const getDetails = (error) => {
  return error.response ? error.response.data.message : error.message
}
