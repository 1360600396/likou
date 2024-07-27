const PENDING='pending'
const FULFILLED='fulfilled'
const REJECTED='rejected'
class mypromise {
  state=PENDING
  result=undefined
  constructor(executor){
    
    const resolve=(res)=>{
      this.#change(FULFILLED,res)
    }
    const reject=(res)=>{
      this.#change(REJECTED,res)
    }
    executor(resolve,reject)
  }
  #change(state,res){
    if(this.state!=PENDING){
      return
    }
    this.state=state
    this.result=res
  }

  then(onFulfilled, onRejected) {
    // 2. 处理未传入回调函数的特殊情况
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason
    }
    if (this.state === FULFILLED) {
      onFulfilled(this.result)
    } else if (this.state === REJECTED) {
      onRejected(this.result)
    }
  }



}




class MyPromise {
  state = PENDING
  result = undefined

  constructor(executor) {
    const resolve = (result) => {
      this.#changeState(FULFILLED, result)
    }
    const reject = (result) => {
      this.#changeState(REJECTED, result)
    }
    executor(resolve, reject)
  }

  #changeState(state, result) {
    if (this.state !== PENDING) {
      return
    }
    this.state = state
    this.result = result
  }
  // 1. 增加then方法
  then(onFulfilled, onRejected) {
    // 2. 处理未传入回调函数的特殊情况
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason
    }
    if (this.state === FULFILLED) {
      onFulfilled(this.result)
    } else if (this.state === REJECTED) {
      onRejected(this.result)
    }
  }
}

 class mypromise {
  state='pending'
  result=undefined
  constructor(executor){
      const resolve=(res)=>{
        this.#change(FULFILLED,res)
      }
      const reject=(res)=>{
        this.$change(REJECTED,res)
      }
      executor(resolve,reject)
  }
  #change(state,res){
      if(state!=PENDING){
        return 
      }
      this.state=state
      this.res=res

  }


 }

