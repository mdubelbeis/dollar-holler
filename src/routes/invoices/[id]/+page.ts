import { error } from '@sveltejs/kit'

// THIS FILE AND .TS FUNCTIONS 
export function load({params}) {
  if (params.id) return {id: params.id}
  throw error(404, 'Invoice not found')
}