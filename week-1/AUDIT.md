# Audit

Ik heb geprobeerd om de huidige bootstrap website zo snel mogelijk te maken. Hiervoor heb ik eerst gekeken naar de snelheid zoals die was. Dit kon nog aanzienlijk verbeterd worden! Hieronder heb ik gedocumenteerd wat ik veranderd heb. Ik heb dit een beetje met terug werkende kracht gedaan, want ik miste hier en daar een screenshot. In het vervolg doe ik dit preciezer!

Tested on:  2G connection (150ms, 450kb/s, 150kb/s)

## Before audit:

- Load:       23.36s
- Requests:   18

![alt text](screenshots/captured.png "Audit")

![alt text](screenshots/1.before.png "Audit")

![alt text](screenshots/1.first-state_network.png "Audit")

![alt text](screenshots/1.first-state_timeline.png "Audit")

### After image optimization

- Load:       14.60s
- Requests:   18

![alt text](screenshots/2.optimized-images.png "Audit")

![alt text](screenshots/2.gzip_network.png "Audit")

![alt text](screenshots/2.gzip_timeline.png "Audit")


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

### After adding critical css & loading scripts async (defer)

- Load: 5.6s
- Request: 13

### Page insights

![alt text](screenshots/7.page-insights.png)

Al met al is het een stuk sneller geworden! En de score op een goeie internet verbinding is 100/100. Alleen de server response time moet nog omhoog!

## Tools used

- Fontfaceobserver
- Gulp
- JS concat
- Gulp rename
- gulp-clean-css
- gulp-uglify
- critical css



