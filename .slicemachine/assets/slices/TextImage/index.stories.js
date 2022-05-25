import MyComponent from '../../../../slices/TextImage';

export default {
  title: 'slices/TextImage'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"text_image","items":[],"primary":{"content":[{"type":"paragraph","text":"Proident cupidatat occaecat laborum ea consectetur voluptate quis proident magna.","spans":[]}],"asset":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"changeOrder":true,"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":"extend one-to-one web services"},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _ItemAsLinkToServices = () => <MyComponent slice={{"variation":"itemAsLinkToServices","name":"item as link to services","slice_type":"text_image","items":[{"linkToPage":{"link_type":"Web","url":"https://slicemachine.dev"}},{"linkToPage":{"link_type":"Web","url":"https://slicemachine.dev"}},{"linkToPage":{"link_type":"Web","url":"https://prismic.io"}},{"linkToPage":{"link_type":"Web","url":"http://google.com"}},{"linkToPage":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"changeOrder":false,"linkLabel":"redefine extensible deliverables"},"id":"_ItemAsLinkToServices"}} />
_ItemAsLinkToServices.storyName = 'item as link to services'
