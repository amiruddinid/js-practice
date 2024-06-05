import { useState, useEffect } from 'react';

interface IBooks {
    data: [{
        id: number
        title: string,
        author: string,
        cover: string,
        price: number,
        sold: boolean
    }]
    count: number
}

export default function books() {
  const [result, setResult] = useState<IBooks>()

  useEffect(() => {
    let ignore = false;

    const getBooks = async () => {
        const res = await fetch("http://localhost:8000/api/v1/books")
        const data = await res.json()
        console.log(data)
        setResult(data)
    }

    if(!ignore) getBooks();

    return () => {
        ignore = true;
    };
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Books</h1>
      <table>
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>author</th>
                <th>cover</th>
                <th>price</th>
                <th>sold</th>
            </tr>
        </thead>
        <tbody>
            {
                result?.data ? result.data.map((el:any) => (
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.title}</td>
                        <td>{el.author}</td>
                        <td><img src={el.cover} alt=""/></td>
                        <td>{el.price}</td>
                        <td>{el.sold}</td>
                    </tr>
                )) : (
                    <tr>
                        <td>no data</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  );
}
