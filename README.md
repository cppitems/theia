## adopted version for customized markdown preview

### developing

0. install node and yarn

```bash

```

0. clone

```bash

```

1. build theia

```bash
# in root dir
yarn --cache-folder ./ycache && rm -rf ./ycache
# yarn theia build --mode production && yarn theia download:plugins
yarn theia build --mode development && yarn theia download:plugins
# start theia backend
node ./examples/browser/src-gen/backend/main.js ./ --port 3333 --hostname=0.0.0.0
```

3. watch (vor dev)

```bash
# in root dir
yarn watch
# in examples/browser
yarn watch
# in examples/browser
yarn run start ../.. --port 3333 --hostname=0.0.0.0
```

# features

## scott meyer's like code highliting theme

```pmans
/* file: test.cpp */ /* compile: clang++ -std=c++17 -c test.cpp */
/*b5*/ sdsdsddd
// sdsdsd
```

## regular highlight.js

```cpp
int main()
std::vector<double> vec;
std::vector<double> vec;
```

## custom fonsts for code and text

### fonts

-   Code: Ubuntu Mono
-   Text: Crimson
