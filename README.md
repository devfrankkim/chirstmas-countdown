## What did I build?

[I've built a countdown app for Christmas with HTML, CSS and JavaScript](https://heyfranksmile.github.io/chirstmas-countdown/)

---

## What I have learned from building this project

- [x] How to get current time with milliseconds and new Date() [reference](http://www.kylesconverter.com/time/hours-to-milliseconds)
- [x] DOM manipulation 
- [x] How to use setInterval(fn, delay) 
- [x] Difference between setInterval and setTimeout [reference](https://johnresig.com/blog/how-javascript-timers-work/)
- [x] JavaScript is not a multi-threaded language
--- 
## The difference between setInterval and setTimeout
[To check out the difference live](http://jsfiddle.net/GustvandeWal/295jqqqb/)        
         
They essentially try to do the same thing, but the setInterval approach will be more accurate than the setTimeout approach, since setTimeout waits 1000ms, runs the function and then sets another timeout. So the wait period is actually a bit more than 1000ms (or a lot more if your function takes a long time to execute).

Although one might think that setInterval will execute exactly every 1000ms, it is important to note that setInterval will also delay, since JavaScript isn't a multi-threaded language, which means that - if there are other parts of the script running - the interval will have to wait for that to finish.