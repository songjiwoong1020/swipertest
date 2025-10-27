import { useQuery } from "@tanstack/react-query";

const QueryTest = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['queryTest'],
    queryFn: async () => {
      const response = await fetch(
        'http://localhost:3001',
      )
      return await response.json()
    },
  })
  return (
    <>
    {data}
    </>
  )
}

export default QueryTest;