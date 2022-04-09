# TSDX React User Guide

Product card is a test package, it was created with React and Typescript using State Initializer Component Pattern

## Example
```
import  {
   ProductButtons,
   ProductCard,
   ProductImage,
   ProductTitle,
} from 'gliscano-product-card'
```

```
<ProductCard
        product={ product }
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({
            isMaxCountReached,
           }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons
                isMaxCounter={isMaxCountReached}
              />
            </>
          )
        }
      </ProductCard>
```

```bash
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd gliscano-product-card
npm i
npm start
```

To run tests, use
```
npm test
```

### Jest

Jest tests are set up to run with
```
npm test
```

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

