switch ReactDOM.querySelector("#root") {
| Some(root) => ReactDOM.render(<div> {React.string("Hello Andrea")} </div>, root)
| None => () // do nothing
}
