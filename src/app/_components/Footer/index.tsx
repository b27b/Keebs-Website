import React from 'react'
import Link from 'next/link'



import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
   console.log(error)
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <FooterComponent footer={footer}/>
    </>
  )
}
