import React from 'react'
import Hero from '../components/Hero'
import ListingFilter from '../components/ListingFilter'
import Listing from '../components/Listing';

export default function Search() {
  const listings = [<Listing />]

  return (
    <>
      <Hero heroType='plain' />
      <ListingFilter components={listings} />
    </>
  )
}
