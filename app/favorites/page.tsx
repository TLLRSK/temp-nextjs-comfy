import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';
import { fetchUserFavorites } from '@/utils/actions';
import React from 'react'

async function FavoritesPage() {
  const favorites = await fetchUserFavorites()
  if (favorites.length === 0) return <SectionTitle text='You have no favorites yet.'/>
  console.log(favorites)
  return (
    <div>
      <SectionTitle text='favorites'/>
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  )
}

export default FavoritesPage;