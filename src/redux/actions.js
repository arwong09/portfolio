export const ITEM_LOADED = 'ITEM_LOADED'

export function itemLoaded(loadedItem) {
  return { type: ITEM_LOADED, payload: loadedItem }
}

