import * as prismicT from '@prismicio/types'

export const filledLinkTypeGuard = (
  field: any
): field is
  | prismicT.FilledLinkToDocumentField
  | prismicT.FilledLinkToMediaField
  | prismicT.FilledLinkToWebField => {
  if (field.link_type === 'Document') {
    return field?.uid !== undefined
  }
  return field?.url !== undefined
}
