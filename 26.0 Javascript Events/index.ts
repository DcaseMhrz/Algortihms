// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

export default class Events {

  events: { [key: string]: Function[] }

  constructor() {
    this.events = {}
  }


  on(eventname: string, fn: Function) {
    if (this.events[eventname]) {
      this.events[eventname].push(fn)
    }
    else {
      this.events[eventname] = [fn]
    }

  }

  trigger(eventname: string) {
    if (this.events[eventname]) {
      for (let func of this.events[eventname]) {
        func()
      }
    }


  }

  off(eventname: string) {
    delete this.events[eventname]

    // if(this.events[eventname]){
    //   this.events[eventname]=[]
    // }
  }
}