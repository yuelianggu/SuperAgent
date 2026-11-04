import assert from 'node:assert/strict'
import { test } from 'node:test'

import { greet } from '../src/greet.js'

test('greets by name', () => {
  assert.equal(greet('world'), 'Hello, world!')
})

test('trims the name', () => {
  assert.equal(greet('  world  '), 'Hello, world!')
})

test('greets in Chinese', () => {
  assert.equal(greet('世界', { language: 'zh' }), '你好，世界！')
})

test('rejects an empty name', () => {
  assert.throws(() => greet('   '), TypeError)
})
