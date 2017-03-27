export const ITEM_LOADED = 'ITEM_LOADED'
export const RENDER_MODAL = 'RENDER_MODAL'

export function itemLoaded(loadedItem) {
  return { type: ITEM_LOADED, payload: loadedItem }
}

export function renderModal(modalContent) {
  return { type: RENDER_MODAL, payload: modalContent }
}
