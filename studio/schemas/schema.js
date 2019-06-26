// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
import mcway from './documents/mcway'
import character from './documents/character'

// Object types
import mainImage from './objects/mainImage'
import bodyPortableText from './objects/bodyPortableText'
import physical from './objects/physical'
import magic from './objects/magic'
import cbioPortableText from './objects/cbioPortableText'
import cReference from './objects/cReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'verseachi',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    mcway,
    character,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    mainImage,
    bodyPortableText,
    magic,
    physical,
    cbioPortableText,
    cReference
  ])
})
