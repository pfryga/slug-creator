# slug-creator

## Requirements
```
Node.js v4.2.1 or greater
```

## Use

Installation
```
npm install slug-creator
```

Init object and get slug
```
import SlugCreator from 'slug-creator'

let creator = new SlugCreator();

let slug = creator.getSlug('Example string with polish characters like ą ę');
// slug equals 'example-string-with-polish-characters-like-a-e'
```

Run unit tests
```
npm run test
```

