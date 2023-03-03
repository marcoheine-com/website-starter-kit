import * as prismicT from '@prismicio/types'

export const filledImageTypeGuard = (field: prismicT.ImageField): field is prismicT.FilledImageFieldImage => {
  return field?.url !== undefined
}
