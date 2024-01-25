# apply nestia to nestjs

## pros and cons of nestia

### pros

1. swagger and validation automatically without anything (only ts)

2. performence is good

### const

1. whitelist & forbidNonWhitelist is impossible

## step

1. nest new <app-name>

2. npx nestia setup

3. remove @nestia/e2e

4. set tsconfig.json strict: true, and remove other subsets

## swagger

(https://kscodebase.tistory.com/635)

1. setup nestia.config.ts

output dir should not be dist/

2. change main.ts

3. add package.json script "build:swagger": "npx nestia swagger"

4. npm run build:swagger
