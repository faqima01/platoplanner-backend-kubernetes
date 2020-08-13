# Plato Planner's Backend

Plato Planner's backend is built on Node.js and Express.js with Mongoose as database. It is containerized with Docker and deployed on GKE (Google Kubernetes Engine). Plato Planner's frontend is built on React framework and deployed on Firebase. Plato Planner can be accessed at https://plato-planner.web.app/. I am open-sourcing it as an inspiration for deploying Node.js and MongoDB on Kubernetes.

## Deploying on Google Kubernetes Engine

1. Create a project, if you haven't already
2. Navigate to Google Kubernetes Engine console on GCP
3. Create a cluster (with your own desirable configurations)
4. Once the cluster is created, navigate inside it and hit Deploy
5. Inside Deploy, hook up your GitHub repo and pull the files that should be similar to above (in case of Node.js)
6. Add your environment variables and optionally your own configuration YAML files, just like above
7. You could configure more stuff if you wished. Once done with that, deploy it
8. Add a load balancer service that will expose it to the public by navigating to Services & Ingress section on the elft
9. Once a load balancer service is created, you will get an IP which you can use for accessing your backend
10. If you want to make your backend HTTP-secured, you must create an Ingress service after you created the load balancer service
11. You could also create a pipeline if you wished so that any change on your GitHub repo is consistent with your Kubernetes cluster

## How much it costs?

I deployed it on the most affordable cluster with 3 replicas on my Google Cloud free-tier period with \$300 credit. It depends on the amount of request to your backend. I did it for experimentation and learning more about Kubernetes. Do it at your own cost!

## Contributing (if applicable)

If you want to contribute to this repo, feel free to do so. Just submit a pull request.

## License

The contents of this repository are covered under the [MIT License](./LICENSE).
