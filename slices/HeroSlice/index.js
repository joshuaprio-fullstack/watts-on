import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section>
    <span className="title">
      {
        <PrismicRichText field={slice.primary.title} />
      }
    </span>
    {
      <PrismicRichText field={slice.primary.description} />
    }
    {
      slice.items.map((item, i) =>
        <PrismicLink field={item.cta_link} key={i}>
          <PrismicNextImage field={slice.primary.image} />
          {item.cta_text}
        </PrismicLink>
      )
    } 
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default HeroSlice