## Naming conventions

Why use snake_case, variables_like_this? Not for personal preference. I personally like how camelCase looks!
But it's objectively better for state management. It's easier to find/replace, "Cmd+D" find next occurrence,
but more importantly, consistency. If `setVariable` or `fetchVariable` refers to `variable`, why is the `v`/`V` different case? Why not keep it the same?

When you have several variables in the same file which look similar, it makes it much easier to read if you can just double-click the name and see all occurrences highlighted.

### Redux

- **under_score_case** for state/reducer/action variables/functions exposed to and used by app
  for example `variable_name` for the state
  and `fetch_variable_name` or `set_variable_name` for actions/functions which modify the state

- **camelCase** for helper/system variables/functions that are not used outside of redux files
