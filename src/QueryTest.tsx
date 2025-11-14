import { useQuery } from "@tanstack/react-query";

const QueryTest = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['queryTest'],
    queryFn: async () => {
      const response = await fetch(
        'http://localhost:3000/getEventList',{method: 'get'}
      )
      return await response.json()
    },
  })
  return (
    <>
    {JSON.stringify(data)}
    {/* {data} */}
    </>
  )
}

export default QueryTest;