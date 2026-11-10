/**
 * Return a greeting for `name`.
 *
 * This is deliberately small: it is the first thing a request to the agent is likely
 * to touch, so the diff of a pull request stays easy to read.
 *
 * @param {string} name
 * @param {{language?: 'en' | 'zh'}} [options]
 * @returns {string}
 */
export function greet(name, options = {}) {
  const who = String(name ?? '').trim()
  if (!who) throw new TypeError('greet: name must be a non-empty string')

  if (options.language === 'zh') return `你好，${who}！`
  return `Hello, ${who}!`
}

/**
 * Return a farewell for `name`.
 *
 * @param {string} name
 * @returns {string}
 */
export function farewell(name) {
  const who = String(name ?? '').trim()
  if (!who) throw new TypeError('farewell: name must be a non-empty string')

  return `Goodbye, ${who}!`
}
