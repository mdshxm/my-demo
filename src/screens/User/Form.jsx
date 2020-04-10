import React from 'react';
import { connect } from 'react-redux'
import { doPost } from "../../redux/actions"
class App extends React.Component {
    state = {
        name: "张三"
    }
    render() {
        return (
            <div className="App">
                <div>{this.props.test}</div>
                <button onClick={() => this.props.toggleTodo("qqqqqq")}>点击</button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    test: state.test
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: text => dispatch(doPost(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
