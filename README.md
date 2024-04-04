<div align="center">
  <a href="https://koyeb.com">
    <img src="https://www.koyeb.com/static/images/icons/koyeb.svg" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Koyeb Serverless Platform</h3>
  <p align="center">
    Deploy a LlamaIndex RAG application on Koyeb
    <br />
    <a href="https://koyeb.com">Learn more about Koyeb</a>
    ·
    <a href="https://koyeb.com/docs">Explore the documentation</a>
    ·
    <a href="https://koyeb.com/tutorials">Discover our tutorials</a>
  </p>
</div>


## About Koyeb and the LlamaIndex RAG application example

Koyeb is a developer-friendly serverless platform to deploy apps globally. No-ops, servers, or infrastructure management required.

This repository contains a LLamaIndex application built using Retrieval Augmented Generation (RAG) to query about an uploaded document. You can deploy it on the Koyeb serverless platform for testing.

This example application is designed to show how LlamaIndex applications can be deployed on Koyeb.

## Getting Started

Follow the steps below to deploy and run the LlamaIndex RAG application on your Koyeb account.

### Requirements

You need:

* a Koyeb account to successfully deploy and run this application. If you don't already have an account, you can sign-up for free [here](https://app.koyeb.com/auth/signup).
* a [Together AI API key](https://www.together.ai/) so our application can leverage the platform's AI models.

### Deploy using the Koyeb button

The fastest way to deploy the LlamaIndex RAG application is to click the **Deploy to Koyeb** button below.

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/apps/deploy?type=git&repository=github.com%2Fkoyeb%2Fexample-llamaindex-rag&branch=main&name=example-llamaindex-rag&env[API_KEY]=CHANGE_ME)

Clicking on this button brings you to the Koyeb App creation page with everything pre-set to launch this application.  Modify the value of the `API_KEY` environment value with your own key and launch the application.

_To modify this application example, you will need to fork this repository. Checkout the [fork and deploy](#fork-and-deploy-to-koyeb) instructions._

### Fork and deploy to Koyeb

If you want to customize and enhance this application, you need to fork this repository.

If you used the **Deploy to Koyeb** button, you can simply link your service to your forked repository to be able to push changes.
Alternatively, you can manually create the application as described below.

On the [Koyeb Control Panel](//app.koyeb.com/apps), on the **Overview** tab, click the **Create Web Service** button to begin.

1. Select **GitHub** as the deployment method.
2. In the repositories list, select the repository you just forked.
3. Expand the **Environment variables** section and click **Add variable**.  Add a variable named `API_KEY` set to your Together AI API key.
4. Choose a name for your App and Service, i.e. `llamaindex-rag`, and click **Deploy**.

You land on the deployment page where you can follow the build of your application. Once the build is completed, your application is being deployed and you will be able to access it via `<YOUR_APP_NAME>-<YOUR_ORG_NAME>.koyeb.app`.

## Contributing

If you have any questions, ideas or suggestions regarding this application sample, feel free to open an [issue](https://github.com/koyeb/example-llamaindex-rag/issues) or fork this repository and open a [pull request](https://github.com/koyeb/example-llamaindex-rag/pulls).

## Contact

[Koyeb](https://www.koyeb.com) - [@gokoyeb](https://twitter.com/gokoyeb) - [Slack](http://slack.koyeb.com/)
