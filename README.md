# OpenTermsArchive.org

WORK IN PROGRESS

## Development

Copy `.env.local.example` to `.env.local` file at the root of the project

```
NODE_PATH="src"
```

Then launch

```
yarn
yarn dev
```

### Local creation of services

If you're a developer and a contributor of [OpenTermsArchive](https://github.com/ambanum/openTermsArchive), you can be interested in setting up a local instance where you can directly save the result of the contribution in the corresponding folder in OTA project, and thus test it on your local environment.

If so, you can add the following to your `.env.local`

```
NEXT_PUBLIC_OTA_SERVICES_PATH="/Users/username/Workspace/ambanum/OpenTermsArchive/services"
```

This way, in "Expert Mode", a button `Save on local` will appear and will add the content of the JSON to the directory

## Modules documentation

- [I18n](./src/modules/I18n/README.md)
- [Analytics](./src/modules/Analytics/README.md)
