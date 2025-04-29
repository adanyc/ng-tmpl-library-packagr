import { ngPackagr } from 'ng-packagr';

ngPackagr()
  .forProject('src/ng-package.json')
  .withTsConfig('tsconfig.json')
  .build()
  .catch(error => {
    console.error(error);
    process.exit(1);
  });