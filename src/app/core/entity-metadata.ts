import { EntityMetadataMap } from '@ngrx/data';
 
const entityMetadata: EntityMetadataMap = {
    Posts: {},
};
 
// because the plural of "hero" is not "heros"
const pluralNames = { Posts: 'Posts' };
 




export const entityConfig = {
  entityMetadata,
  pluralNames
};