
[![Latest version](https://deno.land/badge/pkgstatq/version)](https://deno.land/x/pkgstatq)

# pkgstatq

**pkgstatq** is a deno-powered cli to query for node, python, or ruby packages

built on https://github.com/prdpx7/pkgstat

## usage

to run:

```sh
deno run --allow-env --allow-net 'https://deno.land/x/pkgstatq/cli.ts' <package> <nonode|python|ruby>
```

example:

```
deno run --allow-env --allow-net 'https://deno.land/x/pkgstatq/cli.ts' deno node
{
  name: "deno",
...
...
```

## install

Requires [deno](https://deno.land/manual@v1.33.2/getting_started/installation)

```
deno install -n pkgstatq --allow-env --allow-net https://deno.land/x/pkgstatq/cli.ts
```

## license

Copyright 2023 **denobytes**.\
See [LICENCE](LICENSE) file to get more infomation.

