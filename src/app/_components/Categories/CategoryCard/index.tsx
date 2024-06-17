import React from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import { Category, Media } from '../../../../payload/payload-types'
import Image from 'next/image'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media
  return (
    <div className={classes.card}>
    <Image src={media.url} alt={category.title} className={classes.img} width={350} height={350}/>
    <p className={classes.title}> {category.title}</p>
    <Link href='/products' className={classes.link}>Shop</Link>
    </div>
  )
}

export default CategoryCard
