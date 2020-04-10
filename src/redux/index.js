import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

export default createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        createLogger() // 一个很便捷的 middleware，用来打印 action 日志
    ))  