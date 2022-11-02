import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CallToActionSlice} CallToActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallToActionSlice>} CallToActionProps
 * @param { CallToActionProps }
 */
const CallToAction = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.title} />
    <PrismicRichText field={slice.primary.body} />
    <span >{ slice.primary.button_text }</span>
    <img src={slice.primary.background_image.url} alt={slice.primary.background_image.alt} />
  </section>
)

export default CallToAction