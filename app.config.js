export default ({ config }) => ({
  ...config,
  name: "Storybook App",
  slug: "storybook-app",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  expo: {
    extra: {
      eas: {
        projectId: "705559a2-1b2a-46aa-83c2-6c74db2398bc",
      },
    },
  },
});
