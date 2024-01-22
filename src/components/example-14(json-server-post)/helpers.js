export function splitText(text) {
  return text.split('|')
}

export function truncate(text, symbols) {
  return (text.length < symbols) ? text : text.slice(0, symbols).concat('...')
}

