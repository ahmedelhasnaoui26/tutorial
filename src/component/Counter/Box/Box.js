import React from 'react'

const Details = {
    id: '1',
    name: 'ayoub',
    address: {
        city: 'maknas',
        country: 'morocco'
    }
}
const Box = () => {
    const { id, name, address } = Details;
    return (
        <div>
            <h4>{id} {name} {address.city} {address.country}</h4>
        </div>
    )
}
export default Box