# TSDX React User Guide

Product card is a test package, it was created with React and Typescript using State Initializer Component Pattern

WIP

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
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd gliscano-product-card
npm i # or yarn to install dependencies
npm start # or yarn start
```

To run tests, use `npm test` or `yarn test`.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files


#### React Testing Library

We do not set up `react-testing-library` for you yet, we welcome contributions and documentation on this.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.
