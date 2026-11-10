# SuperAgent

A tiny sandbox repository used to try out [dsh-superagent](https://github.com/deepseek-ai/dsh-superagent-prototype).

The agent works on this repository through GitHub: mention it on an issue or a pull
request comment, it opens a Ticket, works in its own directory and answers back in the
same conversation with a branch and a pull request.

## Layout

- `src/greet.js` — the `greet()` and `farewell()` helpers, the things to change when trying a request.
- `test/greet.test.js` — tests run by Node's built-in test runner.

## Run the tests

```sh
node --test
```

No dependencies, no install step.
