# Audit

Tested on:  2G connection (150ms, 450kb/s, 150kb/s)

## Before audit:

- Load:       23.36s
- Requests:   18

![alt text](screenshots/captured.png "Audit")
![alt text](screenshots/1.before.png "Audit")

### After image optimization

- Load:       23.36s
- Requests:   18

![alt text](screenshots/2.optimized-images.png "Audit")


### After minifing javascript

- Load: 6.72s
- Requests: 14

![alt text](screenshots/3.minified-js.png "Audit")


### After adding GZIP

- Load: 6.01s
- Requests: 14

![alt text](screenshots/4.gzip.png "Audit")


### After minifing images (with tinyjpg/png)

- Load: 5.95s
- Requests: 14

Page insights: 71/100 mobile, 88/100 mobile


![alt text](screenshots/5.minified-imgs.png)

### After minifing css

- Load: 5.89s
- Requests: 14

![alt text](screenshots/6.minified-css.png)

### After adding critical css



## Done

- Fontfaceobserver
- JS concat
- Gulp rename
- gulp-clean-css
- gulp-uglify
- critical css



