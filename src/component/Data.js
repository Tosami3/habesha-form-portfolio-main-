import React from 'react'


function Data() {
    const products =[
        {
          id:99000,
          image:"/habesha8.jpg",
      },
        {id:99000,
          image:"/habesha9.jpg",
      
      
      },
    
      {id:99000,
        image:"/habesha20.jpg",
    }
      ]
  return (
    <div>
       {products.map(itme=>(
        <h1
      image={itme.image} id={itme.id}
        />
        ))}
    </div>
  )
}

export default Data
