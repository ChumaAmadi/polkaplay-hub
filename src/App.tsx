import React from 'react';
import { gql, useQuery } from '@apollo/client';

const NFT_QUERY = gql`
  query NFTQuery($id: ID!) {
    nft(id: $id) {
      id
      name
      creators
      price
      description
      imageUrl
      owner
      creationDate
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(NFT_QUERY, {
    variables: { id: "1" }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>NFT Info</h1>
      <p>ID: {data.nft.id}</p>
      <p>Name: {data.nft.name}</p>
      <p>Creators: {data.nft.creators.join(', ')}</p>
      <p>Price: ${data.nft.price}</p>
      <p>Description: {data.nft.description}</p>
      <img src={data.nft.imageUrl} alt={data.nft.name} style={{ width: '200px' }} />
      <p>Owner: {data.nft.owner}</p>
      <p>Creation Date: {data.nft.creationDate}</p>
    </div>
  );
};

export default App;
