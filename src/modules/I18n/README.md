# i18n module

## install

1. Copy this module

and run

```
    yarn add next-i18nnext
    yarn add -D i18next-scanner i18next-scanner-typescript
```

2. Create the config file

```
touch next-i18next.config.js
echo "module.exports = require('./src/modules/I18n/next-i18next.config');" >> next-i18next.config.js
cat next-i18next.config.js
```

We will keep the config file in the module but next-i18nnext requires the file to ba at the root of the project

3. import the config file

modify you `next.config.js` with

```
const { i18n } = require('./src/modules/I18n/next-i18next.config');

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  i18n,
};

```

4. add tools to your script to generate translations

```
    "i18n": "yarn i18n:extract && yarn i18n:clean && echo '\n⚠️  You may need to restart your dev server\n'",
    "i18n:extract": "NODE_ENV=development i18next-scanner --config 'src/modules/I18n/i18next-scanner.config.js'",
    "i18n:clean": "find public/locales -size 3c -delete",

```

## usage

See https://github.com/isaachinman/next-i18next

There are also some new wrappers to ease the use on `pages`

You can use it with

```
import { withI18n } from 'modules/I18n';

export const getStaticProps = withI18n(['common', 'footer'])();
```

or if you need some more treatment

```
import { withI18n } from 'modules/I18n';

export const getStaticProps = withI18n(['common', 'footer'])(async (props: any) => {
  // do something
  return {
    props,
  };
});
```

instead of the documented feature whicj I found too verbose and not typescript proof

```
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  }
})
```

### translate simple strings

```
{t('contribute:service_page.title', 'What is expected from you')}
```

### translate html

```
<Trans i18nKey="contribute:service_page.description1">
  Most of the time, contractual documents contains a header, a footer, navigation
  menus, possibly ads… We aim at tracking only{' '}
  <strong>the significant parts of the document</strong>
</Trans>
```

## generate translation files

```
yarn i18n
```

## VSCode snippets

Get fast with these snippets

```
  "snippet-t": {
    "prefix": "t",
    "body": [
      "import { useTranslation } from 'next-i18next';",
      "const { t } = useTranslation();"
    ],
    "description": "use translation hook"
  },
  "snippet-t(": {
    "prefix": "t(",
    "body": [
      "t('${TM_DIRECTORY/^.*\\/src\\/modules\\/(.*)\\/(.*)/${1:/downcase}/}:$1','$2')"
    ],
    "description": "use translation function"
  },
  "snippet-trans": {
    "prefix": "trans",
    "body": [
      "<Trans i18nKey=\"${TM_DIRECTORY/^.*\\/src\\/modules\\/(.*)\\/(.*)/${1:/downcase}/}:$1\">",
      "",
      "</Trans>"
    ],
    "description": "use translation component"
  }
```