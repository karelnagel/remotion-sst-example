/// <reference path="./.sst/platform/config.d.ts" />

import { RemotionLambda } from "remotion-sst";

export default $config({
  app: (input) => {
    return {
      name: "remotion-sst-example",
      removal: "remove",
      home: "aws",
      providers: {
        aws: { region: "eu-central-1" },
      },
    };
  },
  run: async () => {
    const remotion = new RemotionLambda("Remotion", {
      path: "",
      forceDestroy: true,
    });
    new sst.aws.Astro("Example", {
      link: [remotion],
      domain: process.env.EXAMPLE_DOMAIN,
    });
  },
});
